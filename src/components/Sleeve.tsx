import { CurrentlyPlaying } from "@/hooks/useCurrentlyPlaying";
import Image from "next/image";
import React from "react";

export default function Sleeve({
  currentlyPlaying,
}: {
  currentlyPlaying: CurrentlyPlaying;
}) {
  return (
    <div className="flex flex-col opacity-90">
      <Image
        src={currentlyPlaying.album.cover}
        width={420}
        height={420}
        alt=""
        className="rounded-[5px] shadow-lg rotate-12"
      />
      <div></div>
    </div>
  );
}
