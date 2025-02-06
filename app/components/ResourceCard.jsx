import React from "react";

const ResourceCard = ({ name, use, svg }) => {
  return (
    <div className=" min-w-[250px] flex flex-col gap-3 p-4 bg-zinc-900 border border-zinc-700 rounded-md h-full ">
      {svg}
      <h2 className=" text-[1.2rem] lg:text-[2rem] "> {name} </h2>
      <p className=" text-[.6rem] lg:text-[.8rem] ">{use}</p>
    </div>
  );
};

export default ResourceCard;
