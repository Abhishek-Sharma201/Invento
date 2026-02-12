import React from "react";
import FadeContent from "./bits/FadeContent";

const TeamCard = ({ role, name, work }) => {
  const getInitials = (n) => {
    return n
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full min-h-[200px] z-10 relative">
        
        {/* Avatar Placeholder */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
           <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
             {getInitials(name)}
           </span>
           <div className="absolute inset-0 rounded-full blur-xl bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
              {name}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                  {role}
                </span>
                <span className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-500/10 rounded-full border border-purple-500/20">
                  {work}
                </span>
            </div>
        </div>
        
        {/* Hover decorative element */}
        <div className="absolute inset-x-8 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </FadeContent>
  );
};

export default TeamCard;
