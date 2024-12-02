import React from "react";
import SpotifyButton from "@/components/SpotifyButton";
import { signIn } from "next-auth/react";

const UnauthenticatedContent: React.FC = () => {
  return (
    <div className="w-[400px]">
      <h1 className="text-[42px] font-bold">Now Spinning</h1>
      <p className="mb-[42px] font-medium text-[16px]">
        Your virtual turntable.
      </p>
      <SpotifyButton onClick={() => signIn("spotify")}>
        Sign in with Spotify
      </SpotifyButton>
    </div>
  );
};

export default UnauthenticatedContent;
