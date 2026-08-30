"use server";
import { headers } from "next/headers";

import { replicate } from "@/lib/config";
import { Cloudinary } from "@/lib/config";
import { Readable } from "stream";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import {
  generateImageInputSchema,
  generateImageInputType,
} from "@/lib/validators/generate.validator";
import { getUserCredit } from "./transaction.action";

async function uploadTo(readableStream: any, url: string) {
  try {
    const uploadToCloud = new Promise((resolve, reject) => {
      const uploadStream = Cloudinary.uploader.upload_stream(
        {
          folder: "greenify",
          resource_type: "image",
          use_filename: true,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      // Pipe the ReadableStream to the Cloudinary upload stream
      Readable.from(readableStream).pipe(uploadStream);
    });
    const uploadedVideoUrl: any = await uploadToCloud;

    const session = await auth.api.getSession({ headers: await headers() });

    await prisma.history.create({
      data: {
        userId: session?.user?.id as string,
        prompt: url,
        final: uploadedVideoUrl.secure_url,
      },
    });

    return {
      status: 200,
      message: "File successfully uploaded",
      finalFileUrl: uploadedVideoUrl.secure_url,
    };
  } catch (error) {
    return {
      status: 400,
      message: (error as Error).message,
      finalFileUrl: null,
    };
  }
}

export async function GenerateLogo(data: generateImageInputType) {
  try {
    const response = await getUserCredit();

    if (response.credits < 1) throw new Error("Credits not available");
    const { success } = generateImageInputSchema.safeParse(data);

    if (!success) throw new Error("Schema validation failed");

    const input = {
      size: "1024x1024",
      style: data.style,
      prompt: `Create a high-quality, visually balanced SVG illustration of ${data.prompt}. Use clean, smooth lines, and ensure the design is professional, modern, and aesthetically pleasing. Include subtle details and textures to make the SVG engaging, while maintaining simplicity and clarity. Use a harmonious color palette that complements the subject and ensures eye-soothing visuals suitable for diverse applications.`,
    };

    const output = await replicate.run("recraft-ai/recraft-v3-svg", { input });

    if (!output) throw new Error("Error while comvering the video");

    const res = await uploadTo(output, data.prompt);

    if (res.status !== 200) throw new Error(res.message);

    return {
      status: 200,
      output: res.finalFileUrl,
      message: "Success",
    };
  } catch (error) {
    return {
      status: 400,
      output: null,
      message: (error as Error).message,
    };
  }
}
