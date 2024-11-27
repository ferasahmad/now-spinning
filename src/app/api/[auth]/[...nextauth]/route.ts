import NextAuth from "next-auth/next";
import { type NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const options: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      authorization:
        "https://accounts.spotify.com/authorize?scope=" +
        [
          "user-top-read", // Access top artists and tracks
          "user-read-recently-played", // Access recently played tracks
          "user-library-read", // Access saved tracks and albums
          "user-read-private", // Access user profile
          "user-read-currently-playing", // Access currently playing track
        ].join(" "),
      clientId: process.env.SPOTIFY_CLIENT_ID || "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        token,
      };
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
