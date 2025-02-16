import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Games from "./components/Games";

const page = () => {
  return (
    <main className=" h-full w-full flex flex-col items-start justify-between bg-black ">
      <Nav />
      <Hero />
      <Games />
    </main>
  );
};

export default page;
