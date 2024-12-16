"use server";

import {
  generateVideoSchema,
  generateVideoType,
} from "@/lib/validators/generate.validator";

import { Cloudinary, CREDITS_PER_REQUEST_REQUIRED } from "@/lib/config";
import streamifier from "streamifier";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { getUserCredit } from "./transaction.action";

export async function UploadVideoAction(data: generateVideoType) {
  try {
    const res = await getUserCredit();
    console.log("res", res);

    if (res.status !== 200) throw new Error(res.message);

    if (res.credits === 0 || res.credits < CREDITS_PER_REQUEST_REQUIRED)
      throw new Error("Not Enough credits");

    const { success } = generateVideoSchema.safeParse(data);

    if (!success) throw new Error("Validation failed");

    const { file } = data;

    if (!file[0] || !(file[0] instanceof File))
      throw new Error("File is required");

    //Converting the raw file to buffer
    const bufferArr = await file[0].arrayBuffer();
    const buffer = Buffer.from(bufferArr);

    const uploadVideoToCloud = new Promise((resolve, reject) => {
      const upload_stream = Cloudinary.uploader.upload_stream(
        {
          folder: "greenify",
          resource_type: "video",
          use_filename: true,
        },
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        },
      );

      streamifier.createReadStream(buffer).pipe(upload_stream);
    });

    const uploadedVideoUrl: any = await uploadVideoToCloud; //eslint-disable-line

    const session = await auth();

    await prisma.history.create({
      data: {
        prompt: uploadedVideoUrl.secure_url,
        userId: session?.user.id,
      },
    });

    return {
      status: 200,
      message: "File successfully uploaded",
      originalFileUrl: uploadedVideoUrl.secure_url,
    };
  } catch (error) {
    return {
      status: 400,
      message: (error as Error).message,
      originalFileUrl: null,
    };
  }
}
