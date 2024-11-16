import React, { ReactNode } from "react";

interface SpotifyButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function SpotifyButton({
  onClick,
  children,
}: SpotifyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
    >
      {children}
    </button>
  );
}
