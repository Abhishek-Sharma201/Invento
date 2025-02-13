import React from "react";
import { Inter } from "next/font/google";
import TextPressure from "./bits/TextPressure";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className=" h-[10dvh] w-full flex items-center justify-between px-3 lg:px-8 gap-3 ">
      <p className=" text-[.5rem] font-[300] lg:text-[.7rem] ">
        Note: This is a{" "}
        <span className=" text-[.5rem] font-[400] lg:text-[.7rem] ">BETA</span>{" "}
        version of the Game.
      </p>
      <h2
        id="team_name"
        className=" text-[.6rem] lg:text-[.9rem] h-auto w-auto gap-1 flex items-center justify-center "
      >
        <span className={`${inter.className}`}>&copy;</span>
        <TextPressure
          text="999   Studio"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
        <span className={`${inter.className}`}>{new Date().getFullYear()}</span>
      </h2>
    </div>
  );
};

export default Footer;
