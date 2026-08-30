import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { prisma } from "./lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  socialProviders: {
    google: {
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    },
  },
  secret: process.env.AUTH_SECRET!,
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    cookieCache: { enabled: true, maxAge: 5 * 60 },
  },
  user: {
    additionalFields: {
      username: { type: "string", required: false },
    },
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          // Create wallet with 1 credit on new user creation
          await prisma.wallet.create({
            data: {
              userId: user.id,
              credit: 1,
              transactions: {
                create: [{ amount: 8, credit: 1 }],
              },
            },
          });
          // Set username = email
          await prisma.user.update({
            where: { id: user.id },
            data: { username: user.email },
          });
        },
      },
    },
  },
});
