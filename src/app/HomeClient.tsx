"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Turntable from "@/components/Turntable";
import { useCurrentlyPlaying } from "@/hooks/useCurrentlyPlaying";
import AuthenticatedContent from "@/components/AuthenticatedContent";
import UnauthenticatedContent from "@/components/UnauthenticatedContent";

const App: React.FC = () => {
  const { data: session, status } = useSession();
  const { currentlyPlaying, loading, error } = useCurrentlyPlaying(
    session?.token?.access_token
  );

  const isAuthenticated = Boolean(session);
  const isSessionLoading = status === "loading";

  return (
    <div className="flex flex-1 items-center gap-4">
      <div className="flex flex-1 justify-around">
        <div />
        <Turntable />
      </div>

      <div className="flex flex-col items-center justify-center flex-1">
        {isSessionLoading ? (
          <></>
        ) : isAuthenticated ? (
          <AuthenticatedContent
            currentlyPlaying={currentlyPlaying}
            loading={loading}
            error={error}
            signOut={signOut}
          />
        ) : (
          <UnauthenticatedContent />
        )}
      </div>
    </div>
  );
};

export default App;
