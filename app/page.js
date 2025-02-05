"use client";

import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Cylinder from "./components/3D/Cylinder";
import MouseFollower from "./components/MouseFollower";
import Loader from "./components/Loader";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Download } from "lucide-react";

const Page = () => {
  const type1Ref = useRef(null);
  const type2Ref = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const PlayStore = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30px"
      height="30px"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1"
        x1="1688.489"
        x2="1685.469"
        y1="-883.003"
        y2="-881.443"
        gradientTransform="matrix(11.64 0 0 22.55 -19615.32 19904.924)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#047ed6"></stop>
        <stop offset="1" stop-color="#50e6ff"></stop>
      </linearGradient>
      <path
        fill="url(#jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1)"
        fill-rule="evenodd"
        d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z"
        clip-rule="evenodd"
      ></path>
      <linearGradient
        id="jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2"
        x1="1645.286"
        x2="1642.929"
        y1="-897.055"
        y2="-897.055"
        gradientTransform="matrix(9.145 0 0 7.7 -15001.938 6931.316)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#ffda1c"></stop>
        <stop offset="1" stop-color="#feb705"></stop>
      </linearGradient>
      <path
        fill="url(#jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2)"
        fill-rule="evenodd"
        d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z"
        clip-rule="evenodd"
      ></path>
      <linearGradient
        id="jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3"
        x1="1722.978"
        x2="1720.622"
        y1="-889.412"
        y2="-886.355"
        gradientTransform="matrix(15.02 0 0 11.5775 -25848.943 10324.73)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#d9414f"></stop>
        <stop offset="1" stop-color="#8c193f"></stop>
      </linearGradient>
      <path
        fill="url(#jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3)"
        fill-rule="evenodd"
        d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561"
        clip-rule="evenodd"
      ></path>
      <linearGradient
        id="jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4"
        x1="1721.163"
        x2="1722.215"
        y1="-891.39"
        y2="-890.024"
        gradientTransform="matrix(15.02 0 0 11.5715 -25848.943 10307.886)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#33c481"></stop>
        <stop offset="1" stop-color="#61e3a7"></stop>
      </linearGradient>
      <path
        fill="url(#jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4)"
        fill-rule="evenodd"
        d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

  useEffect(() => {
    let typed1;
    if (type1Ref.current) {
      typed1 = new Typed(type1Ref.current, {
        strings: ["999 Studio"],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 500,
        backDelay: 1000,
        loop: true,
        showCursor: false,
      });
    }
    return () => {
      if (typed1) typed1.destroy();
    };
  }, [isLoading]);

  useEffect(() => {
    let typed2;
    if (type2Ref.current) {
      typed2 = new Typed(type2Ref.current, {
        strings: ["Unity", "Blender", "Sketch-Fab", "Core"],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 1000,
        backDelay: 1500,
        loop: true,
        showCursor: false,
      });
    }
    return () => {
      if (typed2) typed2.destroy();
    };
  }, [isLoading]);

  useEffect(() => {
    const handlePageLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) setIsMobile(true);
  }, []);

  return (
    <main className=" w-full h-auto ">
      {isMobile ? "" : <MouseFollower />}
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" w-full h-[max-content] flex flex-col items-center justify-center gap-4 ">
          <Nav />
          <div className="w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-start relative">
            <div className="z-40 px-28 absolute top-0 left-0 h-full w-full flex items-start justify-between gap-8">
              <div className="h-full w-[max-content] flex flex-col items-start justify-center gap-6">
                <h2 className="text-[1.2rem]">Team Name</h2>
                <h1
                  id="team_name"
                  className="text-[4rem] h-[10dvh]"
                  ref={type1Ref}
                ></h1>
                <p className="w-[25dvw] text-wrap text-[.8rem] font-[200]">
                  Venture into stunning realms, slay monsters, and conquer the
                  unknown—Unleash your power in Unity's masterpiece!
                </p>
                <div className="h-[max-content] w-[max-content] flex flex-col items-start justify-center gap-2">
                  <h2 className="text-[1.2rem]">Build using</h2>
                  <p className="text-[3rem] h-[10dvh]" ref={type2Ref}></p>
                </div>
              </div>
              <div className="h-full w-[max-content] flex flex-col items-start justify-center gap-3">
                <h2 className="text-[.9rem] text-zinc-300">Team size: 5</h2>
                <h2 className="text-[.9rem] text-zinc-300">
                  Build Investement: ₹ 00
                </h2>
                <button
                  type="button"
                  className=" gap-3 outline-none border border-zinc-700 bg-zinc-800 hover:border-zinc-600 hover:bg-zinc-700 px-4 py-2 rounded-md text-[.8rem] flex items-center justify-center "
                >
                  {PlayStore}
                  Download now
                </button>
              </div>
            </div>
            <Cylinder />
          </div>
          <Footer />
        </div>
      )}
    </main>
  );
};

export default Page;
