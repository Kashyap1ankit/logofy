import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Google from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";
import { NextConfig } from "next";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { signinSchema } from "./lib/validators/auth.validator";

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
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        try {
          const { success } = signinSchema.safeParse({
            email: credentials.email,
            password: credentials.password,
          });

          if (!success) throw new Error("Schema validation failed");

          const isUser = await prisma.user.findFirst({
            where: {
              email: credentials.email as string,
            },
          });

          if (!isUser) throw new Error("No such user in record");

          const comparePassword = await bcrypt.compare(
            credentials.password as string,
            isUser.password as string,
          );

          if (!comparePassword) throw new Error("Password Mismatched");

          return {
            id: isUser.id,
            email: isUser.email,
            name: isUser.name,
            username: isUser.username,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = {
        id: user.id,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
        username: user.username,
      };
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "database",
  },
}) satisfies NextConfig;
