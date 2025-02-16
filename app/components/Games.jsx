import React from "react";
import { GameData } from "../utils/constants";
import GameCard from "./GameCard";

const Games = () => {
  return (
    <div
      className="gap-16 min-h-screen h-[max-content] w-full items-center justify-start flex flex-col py-4 px-5 lg:px-32 bg-black"
      id="games"
    >
      <h2 className="text-[1.8rem]">{"<Games />"}</h2>
      <div className="w-full h-[max-content] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
        
        {GameData.map((data, i) => {
          return <GameCard {...data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Games;
