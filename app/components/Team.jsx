import React from "react";
import SpotlightCard from "./bits/SpotlightCard";
import TeamCard from "./TeamCard";
import { TeamData } from "../utils/constants";
import SplitText from "./bits/SplitText";

const Team = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-evenly gap-6 lg:px-20 ">
      <SplitText
        text="Team"
        className="text-2xl font-[500] text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {TeamData.map((data, i) => {
          return (
            <SpotlightCard
              key={i}
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <TeamCard {...data} />
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
