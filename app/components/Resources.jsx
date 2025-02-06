import React from "react";
import { GameResources } from "../utils/constants";
import ResourceCard from "./ResourceCard";

const Resources = () => {
  return (
    <div className=" h-[max-content] w-full flex flex-col items-start justify-center gap-4 px-8 lg:px-28 ">
      <h1 className=" text-[1.3rem] lg:text-[2rem] ">Resources</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {GameResources.map((data, i) => {
          return <ResourceCard {...data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Resources;
