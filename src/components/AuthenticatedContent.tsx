import React from "react";
import Sleeve from "@/components/Sleeve";
import { CurrentlyPlaying } from "@/hooks/useCurrentlyPlaying";

interface AuthenticatedContentProps {
  currentlyPlaying: CurrentlyPlaying | null;
  loading: boolean;
  error: string | null;
  signOut: () => void;
}

const AuthenticatedContent: React.FC<AuthenticatedContentProps> = ({
  currentlyPlaying,
  loading,
  error,
  signOut,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      {loading ? (
        <></>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : currentlyPlaying ? (
        <div className="flex flex-1 items-center justify-center pb-40">
          <Sleeve currentlyPlaying={currentlyPlaying} />
        </div>
      ) : (
        <div className="text-center">
          <p className="text-[16px] font-medium">No track is playing.</p>
        </div>
      )}
      <button
        onClick={signOut}
        className="absolute bottom-5 right-5 text-[#9C6E3C]"
      >
        Sign out
      </button>
    </div>
  );
};

export default AuthenticatedContent;
