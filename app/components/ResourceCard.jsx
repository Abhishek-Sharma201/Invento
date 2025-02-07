import React from "react";
import FadeContent from "./bits/FadeContent";

const ResourceCard = ({ name, use, svg }) => {
  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className=" min-w-[250px] flex flex-col items-center justify-between gap-3 py-4 rounded-md h-full resource_card ">
        {svg}
        <h2 className=" text-[1.2rem] lg:text-[1.2rem] "> {name} </h2>
        <p className=" text-[.6rem] lg:text-[.7rem] ">{use}</p>
      </div>
    </FadeContent>
  );
};

export default ResourceCard;
