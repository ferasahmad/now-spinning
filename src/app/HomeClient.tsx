"use client";

import { signOut, useSession } from "next-auth/react";
import SpotifyButton from "@/components/SpotifyButton";
import { useCurrentlyPlaying } from "@/hooks/useCurrentlyPlaying";

export default function HomeClient() {
  const { data: session } = useSession();
  const { currentlyPlaying, loading, error } = useCurrentlyPlaying(
    session?.token?.access_token
  );

  return (
    <div className="flex flex-1 items-center justify-center flex-col gap-4">
      <h1 className="text-5xl">Welcome {session?.user?.name}!</h1>

      {loading && <p>Loading currently playing song...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && currentlyPlaying ? (
        <div className="text-center">
          <h2 className="text-xl">Currently Playing:</h2>
          <p className="text-lg font-bold">{currentlyPlaying.name}</p>
          <p className="text-md">Track #{currentlyPlaying.trackNumber}</p>
          <p className="text-md">
            Artists: {currentlyPlaying.artists.join(", ")}
          </p>
          <div>
            <img
              src={currentlyPlaying.album.cover}
              alt="Album Cover"
              className="rounded-md"
            />
            <p className="text-md">{currentlyPlaying.album.name}</p>
            <p className="text-md">
              Total Tracks: {currentlyPlaying.album.totalTracks}
            </p>
          </div>
        </div>
      ) : (
        !loading && <p>No song is currently playing.</p>
      )}

      <SpotifyButton onClick={signOut}>Sign out</SpotifyButton>
    </div>
  );
}
