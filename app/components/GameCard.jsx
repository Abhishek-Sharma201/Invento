import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeContent from "./bits/FadeContent";

const GameCard = ({ image, title, desc, link }) => {
  return (
    <FadeContent
      blur={true}
      duration={500}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="p-4 h-full w-[300px] lg:w-full flex flex-col items-start justify-center gap-4 rounded-md bg-zinc-950 border border-zinc-800">
        <div className="h-[max-content] w-full rounded-md overflow-hidden relative">
          <Image
            src={image}
            alt="gameImage"
            className=" h-full w-full object-contain "
            width={300}
            height={300}
          />
          <div className="z-10 absolute top-0 left-0 h-full w-full gameCard"></div>
        </div>
        <div className="h-[max-content] w-[max-content] flex flex-col items-start justify-center gap-2">
          <h2 className="text-[1.5rem]">{title}</h2>
          <p className="text-[.75rem] h-auto text-wrap w-[100%] ">{desc}</p>
          {link ? (
            <Link
              href={link}
              className="py-1 px-2 bg-blue-700 text-white rounded-[4px] h-[max-content] w-[max-content] flex items-center justify-center gap-2 text-[.7rem]"
            >
              Go
              <sup>
                <Link2 height={"12px"} width={"12px"} />
              </sup>
            </Link>
          ) : (
            <Link
              href={"#"}
              className="py-1 px-2 bg-zinc-700 text-white opacity-[.4]  rounded-[4px] h-[max-content] w-[max-content] flex items-center justify-center gap-2 text-[.7rem]"
            >
              Go
              <sup>
                <Link2 height={"12px"} width={"12px"} />
              </sup>
            </Link>
          )}
        </div>
      </div>
    </FadeContent>
  );
};

export default GameCard;
