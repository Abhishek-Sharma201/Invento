import React from "react";
import ShinyText from "./bits/ShinyText";
import RotatingText from "./bits/RotatingText";

const Hero = () => {
  return (
    <div className=" min-h-screen h-[max-content] w-full flex flex-col items-center justify-center gap-4 relative">
      <div className=" absolute z-[0] h-full w-full top-0 left-0 bg_vid bg-black/45 ">
        <video src="/assets/Gods.mp4" loop autoPlay muted></video>
      </div>
      <div className="z-10 min-h-screen w-full flex flex-col items-center justify-center gap-4 ">
        <div className=" flex flex-col lg:flex-row items-center justify-center gap-4 h-[max-content] w-[max-content] ">
          <ShinyText
            text="999 Studio"
            disabled={false}
            speed={2}
            className=" text-[2rem] lg:text-[5rem] font-semibold tracking-widest text-zinc-200 mix-blend-difference "
            id="team_name"
          />
          <RotatingText
            texts={["3D Components", "Coding!", "Next Level", "Adventures"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-blue-700 text-black text-[1.4rem] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg flex items-center justify-center "
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <p className=" h-auto w-[300px] md:w-[450px] lg:w-[620px] text-[.9rem] text-zinc-200 text-center px-1 ">
          999 Studio, where visions ignite, Crafting new worlds, from day into
          night. With Unity's magic and Blender's might, We shape the future,
          pixel-perfect and bright.
        </p>
      </div>
    </div>
  );
};

export default Hero;
