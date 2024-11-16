"use client";
import SpotifyButton from "@/components/SpotifyButton";
import WithPublic from "@/hoc/withPublic";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="flex flex-1 items-center justify-center flex-col gap-4">
      <h1 className="text-5xl">Next.JS & Spotify Starter</h1>
      <p>Review the README for details of the repo.</p>
      <SpotifyButton onClick={() => signIn("spotify")}>
        Sign in with Spotify
      </SpotifyButton>
    </div>
  );
}

export default function PublicLoginPage() {
  return (
    <WithPublic>
      <Login />
    </WithPublic>
  );
}
