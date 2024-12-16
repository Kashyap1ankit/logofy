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
        id: true,
        credit: true,
      },
    });

    if (!res) throw new Error("Unauthorized user");

    return {
      status: 200,
      message: "Fetched balance",
      credits: res.credit,
      id: res.id,
    };
  } catch (error) {
    return {
      status: 400,
      message: (error as Error).message,
      credits: 0,
      id: null,
    };
  }
}

export async function deductCredits() {
  try {
    const response = await getUserCredit();

    if (response.status !== 200 || !response.id)
      throw new Error(response.message);

    const upadatedWallet = await prisma.wallet.update({
      where: {
        id: response.id,
        userId: response.id,
      },
      data: {
        credit: response.credits - 1,
      },
      select: {
        credit: true,
      },
    });
    return {
      status: 200,
      message: "Wallet updated",
      credits: upadatedWallet.credit,
    };
  } catch (error) {
    return {
      status: 400,
      message: (error as Error).message,
      credits: null,
    };
  }
}
