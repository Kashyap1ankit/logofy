import { prisma } from "@/lib/prisma";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { signinSchema } from "./validators/auth.validator";

export const AuthConfig = {
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
};
