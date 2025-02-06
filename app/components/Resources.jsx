import React from "react";
import { GameResources } from "../utils/constants";
import ResourceCard from "./ResourceCard";

const Resources = () => {
  return (
    <div className=" h-[100dvh] w-full flex flex-col items-start justify-center gap-4 px-20 ">
      <h1 className=" text-[2rem] ">Resources</h1>
      <div className="  ">
        {GameResources.map((data, i) => {
          return <ResourceCard {...data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Resources;
