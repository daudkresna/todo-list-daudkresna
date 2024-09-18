import prisma from "@/app/lib/prisma";
import type { Adapter } from "next-auth/adapters";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  // Disini error terjadi kemungkinan karena terdapat 2 object adapter yang berbeda
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as unknown as any; //eslint-disable-line @typescript-eslint/no-explicit-any
        return { ...token, id: user.id, username: u.username };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          id: token.id,
          name: token.name,
          username: token.username,
        },
      };
    },
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "locos", email: "jsmith@example.com" };

        if (!credentials?.username && !credentials?.password) {
          return null;
          // Any object returned will be saved in `user` property of the JWT
        }

        const match = await prisma.user.findUnique({
          select: {
            id: true,
            name: true,
            username: true,
            hashedPassword: true, // <-- add thispassword: true,
          },
          where: {
            username: credentials?.username,
          },
        });
        if (!match) {
          return null;
        }
        const valPassword = credentials.password === match.hashedPassword;
        if (!valPassword) {
          return null;
        }
        return match;
      },
    }),
  ],
};

export default authOptions;
