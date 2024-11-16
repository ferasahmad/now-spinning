import axios from "axios";

export const spotifyApiClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the Authorization header dynamically for each request
export function setAccessToken(accessToken: string) {
  spotifyApiClient.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
}
