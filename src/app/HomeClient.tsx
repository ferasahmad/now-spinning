"use client";

import SpotifyButton from "@/components/SpotifyButton";
import { signOut, useSession } from "next-auth/react";

export default function HomeClient() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-1 items-center justify-center flex-col gap-4">
      <h1 className="text-5xl">Welcome {session?.user?.name}!</h1>
      <SpotifyButton onClick={signOut}>Sign out</SpotifyButton>
    </div>
  );
}
