import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-[100dvh] z-[99] flex flex-col items-center justify-center">
      <div className="h-[30px] w-[30px] rounded-[50%] bg-transparent border-[5px] border-t-zinc-600 animate-spin "></div>
    </div>
  );
};

export default Loader;
