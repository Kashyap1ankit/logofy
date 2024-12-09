import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    username?: string;
    createdAt?: DateTime;
  }

  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultUser;
  }
}
