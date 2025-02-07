import React from "react";
import FadeContent from "./bits/FadeContent";

const TeamCard = ({ role, name, work }) => {
  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className=" w-[270px] h-[max-content] flex flex-col items-start justify-center gap-2 rounded-md p-4 team_card">
        <h1 className=" text-[1.3rem] lg:text-[1.4rem] ">{name}</h1>
        <h2 className=" text-[.8rem] lg:text-[.9rem] ">Work: {work}</h2>
        <h4 className=" text-[.7rem] lg:text-[.7rem] ">Role: {role}</h4>
      </div>
    </FadeContent>
  );
};

export default TeamCard;
