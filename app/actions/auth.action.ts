"use server";

import { prisma } from "@/lib/prisma";
import { saltRounds } from "@/lib/utils";
import { signupSchema, signupType } from "@/lib/validators/auth.validator";
import bcrypt from "bcryptjs";

export async function SignupAction(formData: signupType) {
  try {
    const { success } = signupSchema.safeParse(formData);

    if (!success) throw new Error("Schema validation failed");

    const isAlreadyUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            username: formData.username,
          },
          {
            email: formData.email,
          },
        ],
      },
    });

    if (isAlreadyUser) throw new Error("Given Credential is already in use");

    const hashedPassword = await bcrypt.hash(formData.password, saltRounds);

    await prisma.user.create({
      data: {
        username: formData.username,
        email: formData.email,
        password: hashedPassword,
      },
    });

    return {
      status: 200,
      message: "User created successfully",
    };
  } catch (error) {
    return {
      status: 400,
      message: (error as Error).message,
    };
  }
}
