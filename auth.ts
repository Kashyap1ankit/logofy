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
    async signIn({ user, account }) {
      //No need to manage the logic for oAuth as adapter handles it
      if (account?.provider === "credentials") {
        const userDetails = await prisma.user.findFirst({
          where: {
            username: user.username,
          },
          select: {
            password: false,
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            username: true,
            createdAt: true,
          },
        });

        if (!userDetails) return false;

        user.createdAt = userDetails.createdAt;
        user.image = userDetails.image;
        user.name = userDetails.name;
        return true;
      }
      return true;
    },

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
