import React from "react";
import SpotlightCard from "./bits/SpotlightCard";
import TeamCard from "./TeamCard";
import { TeamData } from "../utils/constants";
import SplitText from "./bits/SplitText";

const Team = () => {
  return (
    <div className="w-full min-h-screen py-20 flex flex-col items-center justify-center gap-16 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      
      {/* Background glow for ambience */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

      <SplitText
        text="Meet The Team"
        className="text-4xl md:text-5xl font-bold text-center tracking-tighter bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
        delay={50}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl z-10">
        {TeamData.map((data, i) => {
          return (
            <SpotlightCard
              key={i}
              className="h-full !bg-white/5 !border-white/10 !p-6 !rounded-2xl group transition-all duration-300 hover:!border-white/20 hover:!shadow-lg hover:!shadow-cyan-500/10"
              spotlightColor="rgba(0, 229, 255, 0.15)"
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
