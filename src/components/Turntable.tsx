import React from "react";
import Image from "next/image";
import Base from "../assets/Base.svg";
import ToneArm from "../assets/Tonearm.svg";
import Record from "../assets/Record.svg";

export default function Turntable() {
  return (
    <div className="relative -rotate-12">
      <Image
        src={Record}
        alt=""
        className="absolute left-[10px] top-[10px] w-[440px] h-[440px]"
      />
      <Image
        src={ToneArm}
        alt=""
        className="absolute right-[80px] top-[25px] w-[70px] h-[380px]"
      />
      <Image src={Base} height={450} width={580} alt="" />
    </div>
  );
}
