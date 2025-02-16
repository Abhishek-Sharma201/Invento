import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Team from "./components/Team";

const page = () => {
  return (
    <main className=" h-full w-full flex flex-col items-start justify-between bg-black ">
      <Nav />
      <Hero />
      <Team />
    </main>
  );
};

export default page;
