import NextAuth from "next-auth";
import { NextConfig } from "next";
import { AuthConfig } from "@/lib/auth.config";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";

const custom: Adapter = {
  ...PrismaAdapter(prisma),
  async createUser(user) {
    const newUser = await prisma.user.create({
      data: {
        ...user,
        username: user.email,
        wallet: {
          create: [
            {
              credit: 1,
              transactions: {
                create: [
                  {
                    amount: 8,
                    credit: 1,
                  },
                ],
              },
            },
          ],
        },
      },
    });
    return newUser;
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...AuthConfig,
  adapter: custom,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 3,
  },
  cookies: {
    sessionToken: {
      name: "session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
        maxAge: 60 * 60 * 24 * 7, //7days persistent
      },
    },
  },

  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.createdAt = user.createdAt;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.createdAt = token.createdAt;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
}) satisfies NextConfig;
