import { Session } from "next-auth"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt"; // eslint-disable-line @typescript-eslint/no-unused-vars

declare module "next-auth" {
  interface Session {
    user: User;
  }

  interface User {
    id: string;
    username: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
  }
}
