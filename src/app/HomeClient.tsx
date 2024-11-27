"use client";

import { useEffect, useState } from "react";
import SpotifyButton from "@/components/SpotifyButton";
import { signOut, useSession } from "next-auth/react";
import { fetchCurrentlyPlaying } from "@/lib/spotify/endpoints";

interface CurrentlyPlaying {
  name: string;
  trackNumber: number;
  artists: string[];
  album: {
    name: string;
    cover: string;
    totalTracks: number;
  };
}

export default function HomeClient() {
  const { data: session } = useSession();
  const [currentlyPlaying, setCurrentlyPlaying] =
    useState<CurrentlyPlaying | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleFetchCurrentlyPlaying = async () => {
      if (!session?.token?.access_token || currentlyPlaying?.name) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetchCurrentlyPlaying(
          session?.token?.access_token
        );

        console.log(response);

        setCurrentlyPlaying({
          name: response.item.name,
          trackNumber: response.item.track_number,
          artists: response.item.artists.map((artist) => artist.name),
          album: {
            name: response.item.album.name,
            cover: response.item.album.images[0]?.url || "",
            totalTracks: response.item.album.total_tracks,
          },
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    handleFetchCurrentlyPlaying();
  }, [session]);

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
            <img src={currentlyPlaying.album.cover} alt="Album Cover" />
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
