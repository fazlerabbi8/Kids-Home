import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      try {
        const users = await dbConnect(collections.USERS);
        const existing = await users.findOne({ email: user.email });

        if (!existing) {
          await users.insertOne({
            provider: account?.provider,
            email: user.email,
            image: user.image,
            name: user.name,
            role: "user",
          });
        }
        return true;
      } catch (err) {
        console.error("signIn callback error:", err);
        return false;
      }
    },

    async jwt({ token, user }) {
      try {
        if (user?.email || token?.email) {
          const users = await dbConnect(collections.USERS);
          const dbUser = await users.findOne({
            email: user?.email ?? token.email,
          });
          if (dbUser) {
            token.role = dbUser.role;
            token.id = dbUser._id.toString();
            token.email = dbUser.email;
          }
        }
        return token;
      } catch (err) {
        console.error("jwt callback error:", err);
        return token;
      }
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
};