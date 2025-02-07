import React from "react";
import { GameResources, TeamData } from "../utils/constants";
import ResourceCard from "./ResourceCard";
import SplitText from "./bits/SplitText";
import TeamCard from "./TeamCard";

const Resources = () => {
  return (
    <div
      id="resources"
      className=" h-[max-content] w-full flex flex-col items-center justify-center gap-6 lg:gap-12 px-8 lg:px-28 resource lg:py-6 py-3 "
    >
      <SplitText
        text="Resources"
        className="text-2xl font-[500] text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
      <div
        className={` grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 `}
      >
        {GameResources.map((data, i) => {
          return <ResourceCard {...data} key={i} />;
        })}
      </div>
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
          return <TeamCard key={i} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Resources;
