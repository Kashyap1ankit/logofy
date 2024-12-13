"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function getUserCredit() {
  try {
    const session = await auth();

    if (!session) throw new Error("User not loggedIn");

    const res = await prisma.wallet.findFirst({
      where: {
        userId: session.user.id,
      },

      select: {
        credit: true,
      },
    });

    if (!res) throw new Error("Unauthorized user");

    return {
      status: 200,
      message: "Fetched balance",
      credits: res.credit,
    };
  } catch (error) {
    return {
      status: 400,
      message: (error as Error).message,
      credits: 0,
    };
  }
}
