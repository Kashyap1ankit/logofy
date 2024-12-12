"use server";

import { replicate } from "@/lib/config";
import { Cloudinary } from "@/lib/config";
import { Readable } from "stream";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

//eslint-disable-next-line
async function uploadTo(readableStream: any, url: string) {
  try {
    const uploadVideoToCloud = new Promise((resolve, reject) => {
      const uploadStream = Cloudinary.uploader.upload_stream(
        {
          folder: "greenify",
          resource_type: "video",
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
    const uploadedVideoUrl: any = await uploadVideoToCloud; //eslint-disable-line

    const session = await auth();

    const user = await prisma.history.findFirst({
      where: {
        userId: session?.user.id,
        original: url,
      },
    });

    if (!user) throw new Error("No history found");

    await prisma.history.update({
      where: {
        id: user.id,
      },

      data: {
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

export async function GenerateVideo(url: string) {
  try {
    if (!url) throw new Error("File not found in db");

    const output = await replicate.run(
      "arielreplicate/robust_video_matting:73d2128a371922d5d1abf0712a1d974be0e4e2358cc1218e4e34714767232bac",
      {
        input: {
          input_video: url,
          output_type: "green-screen",
        },
      },
    );

    if (!output) throw new Error("Error while comvering the video");

    const res = await uploadTo(output, url);

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
