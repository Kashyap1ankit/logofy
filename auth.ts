import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Google from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";
import { NextConfig } from "next";

const custom: Adapter = {
  ...PrismaAdapter(prisma),
  async createUser(user) {
    const newUser = await prisma.user.create({
      data: {
        ...user,
        username: user.email,
      },
    });
    return newUser;
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: custom,
  providers: [Google],
  pages: {
    signIn: "/signin",
  },
}) satisfies NextConfig;
