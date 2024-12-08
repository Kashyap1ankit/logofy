"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function CheckUser() {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return {
        status: 400,
        message: "User not logged in",
      };
    }

    const isUser = await prisma.user.findFirst({
      where: {
        id: session.user.id,
      },
    });

    if (!isUser) throw new Error("No such user exist");

    return {
      status: 200,
      message: "User already exit",
      id: isUser.id,
    };
  } catch {
    return {
      status: 201,
      message: " User doesn't exit",
      id: null,
    };
  }
}
