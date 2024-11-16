import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import {
  fetchTopArtists,
  fetchTopTracks,
  fetchUserPlaylists,
  fetchRecentlyPlayed,
  fetchSavedTracks,
  fetchUserProfile,
} from "@/lib/spotify/endpoints";

export function useTopArtists(limit = 10, time_range = "short_term") {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["topArtists", limit, time_range],
    queryFn: () => {
      if (!session?.accessToken) throw new Error("No access token available");
      return fetchTopArtists(session.accessToken, limit, time_range);
    },
    enabled: !!session?.accessToken,
  });
}

export function useTopTracks(limit = 10, time_range = "short_term") {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["topTracks", limit, time_range],
    queryFn: () => {
      if (!session?.accessToken) throw new Error("No access token available");
      return fetchTopTracks(session.accessToken, limit, time_range);
    },
    enabled: !!session?.accessToken,
  });
}

export function useUserPlaylists(limit = 10) {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["userPlaylists", limit],
    queryFn: () => {
      if (!session?.accessToken) throw new Error("No access token available");
      return fetchUserPlaylists(session.accessToken, limit);
    },
    enabled: !!session?.accessToken,
  });
}

export function useRecentlyPlayed(limit = 10) {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["recentlyPlayed", limit],
    queryFn: () => {
      if (!session?.accessToken) throw new Error("No access token available");
      return fetchRecentlyPlayed(session.accessToken, limit);
    },
    enabled: !!session?.accessToken,
  });
}

export function useSavedTracks(limit = 10) {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["savedTracks", limit],
    queryFn: () => {
      if (!session?.accessToken) throw new Error("No access token available");
      return fetchSavedTracks(session.accessToken, limit);
    },
    enabled: !!session?.accessToken,
  });
}

export function useUserProfile() {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["userProfile"],
    queryFn: () => {
      if (!session?.accessToken) throw new Error("No access token available");
      return fetchUserProfile(session.accessToken);
    },
    enabled: !!session?.accessToken,
  });
}
