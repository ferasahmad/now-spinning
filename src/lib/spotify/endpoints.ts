import { spotifyApiClient, setAccessToken } from "./apiClient";

export async function fetchSpotifyData(
  endpoint: string,
  accessToken: string,
  params = {}
) {
  setAccessToken(accessToken);
  const response = await spotifyApiClient.get(endpoint, { params });
  return response.data;
}

export const fetchTopArtists = (
  accessToken: string,
  limit = 10,
  time_range = "short_term"
) => fetchSpotifyData("/me/top/artists", accessToken, { limit, time_range });

export const fetchTopTracks = (
  accessToken: string,
  limit = 10,
  time_range = "short_term"
) => fetchSpotifyData("/me/top/tracks", accessToken, { limit, time_range });

export const fetchUserPlaylists = (accessToken: string, limit = 10) =>
  fetchSpotifyData("/me/playlists", accessToken, { limit });

export const fetchRecentlyPlayed = (accessToken: string, limit = 10) =>
  fetchSpotifyData("/me/player/recently-played", accessToken, { limit });

export const fetchSavedTracks = (accessToken: string, limit = 10) =>
  fetchSpotifyData("/me/tracks", accessToken, { limit });

export const fetchUserProfile = (accessToken: string) =>
  fetchSpotifyData("/me", accessToken);
