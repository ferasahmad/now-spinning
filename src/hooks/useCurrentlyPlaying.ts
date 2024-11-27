import { useEffect, useState } from "react";
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

export function useCurrentlyPlaying(accessToken: string | undefined) {
  const [currentlyPlaying, setCurrentlyPlaying] =
    useState<CurrentlyPlaying | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleFetchCurrentlyPlaying = async () => {
      if (!accessToken || currentlyPlaying?.name) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetchCurrentlyPlaying(accessToken);
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
  }, [accessToken, currentlyPlaying?.name]);

  return { currentlyPlaying, loading, error };
}
