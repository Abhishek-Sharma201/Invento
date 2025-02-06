import React from "react";
import { Unity } from "../utils/SVG";

const ResourceCard = ({ name, use, svg }) => {
  return (
    <div className=" w-[250px] h-[max-content] flex flex-col items-start justify-center gap-3 ">
      {svg}
      <h2> {name} </h2>
      <p>{use}</p>
    </div>
  );
};

export default ResourceCard;
