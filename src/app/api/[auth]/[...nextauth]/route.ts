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
          "user-read-email", // Access email
          "user-library-read", // Access saved tracks and albums
          "playlist-read-private", // Access private playlists
          "playlist-modify-private", // Modify private playlists
          "playlist-modify-public", // Modify public playlists
          "user-library-modify", // Modify saved tracks and albums
          "user-read-private", // Access user profile
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
