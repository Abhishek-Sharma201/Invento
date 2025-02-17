"use client";

import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Link from "next/link";
import MouseFollower from "@/app/components/MouseFollower";
import { Loader } from "lucide-react";
import Nav from "@/app/components/Nav";
import TrueFocus from "@/app/components/bits/TrueFocus";
import CountUp from "@/app/components/bits/CountUp";
import ShinyText from "@/app/components/bits/ShinyText";
import Resources from "@/app/components/Resources";
import Footer from "@/app/components/Footer";
import { AvatarData } from "@/app/utils/constants";

const Page = () => {
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
        <stop offset="0" stopColor="#047ed6"></stop>
        <stop offset="1" stopColor="#50e6ff"></stop>
      </linearGradient>
      <path
        fill="url(#jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1)"
        fillRule="evenodd"
        d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z"
        clipRule="evenodd"
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
        <stop offset="0" stopColor="#ffda1c"></stop>
        <stop offset="1" stopColor="#feb705"></stop>
      </linearGradient>
      <path
        fill="url(#jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2)"
        fillRule="evenodd"
        d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z"
        clipRule="evenodd"
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
        <stop offset="0" stopColor="#d9414f"></stop>
        <stop offset="1" stopColor="#8c193f"></stop>
      </linearGradient>
      <path
        fill="url(#jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3)"
        fillRule="evenodd"
        d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561"
        clipRule="evenodd"
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
        <stop offset="0" stopColor="#33c481"></stop>
        <stop offset="1" stopColor="#61e3a7"></stop>
      </linearGradient>
      <path
        fill="url(#jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4)"
        fillRule="evenodd"
        d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  useEffect(() => {
    let typed2;
    if (type2Ref.current) {
      typed2 = new Typed(type2Ref.current, {
        strings: AvatarData.buildUsing,
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 1000,
        backDelay: 1500,
        loop: true,
        showCursor: false,
        // fadeOut: true
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
    <main className="w-full h-auto bg-black ">
      {isMobile ? "" : <MouseFollower />}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
          <Nav />
          <div
            className={`w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-start relative `}
            style={{
              background: `url(${AvatarData.images.main}) center center`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="z-40 px-4 lg:px-28 mt-28 lg:mt-60 h-[max-content] w-full flex flex-col items-start lg:flex-row lg:items-start justify-between gap-8">
              <div className="h-full w-full lg:w-[max-content] flex flex-col items-start justify-center gap-4 lg:gap-6 left">
                <h2 className="text-base lg:text-[1.2rem]">Game Name</h2>
                <TrueFocus
                  sentence={AvatarData.name}
                  manualMode={false}
                  blurAmount={5}
                  borderColor="blue"
                  animationDuration={1}
                  pauseBetweenAnimations={0.4}
                />
                <p className="w-full lg:w-[25dvw] text-sm lg:text-[.8rem] font-[200]">
                  {AvatarData.desc}
                </p>
                <div className="w-full lg:w-[max-content] flex flex-col items-start justify-center gap-2">
                  <h2 className="text-base lg:text-[1.2rem]">Build using</h2>
                  <p
                    className="text-2xl lg:text-[3rem] h-[10dvh] lg:mt-6 "
                    ref={type2Ref}
                  ></p>
                </div>
              </div>
              <div className="h-full w-full lg:w-[max-content] flex flex-col items-start justify-center gap-3">
                {/* <h2 className="text-sm lg:text-[.9rem] text-zinc-100">
                  Team size: 5
                </h2> */}
                {/* <h2 className="text-sm lg:text-[.9rem] text-zinc-100">
                  Build Investment: ₹
                  <CountUp
                    from={0}
                    to={AvatarData.buildInvestement}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </h2> */}
                <Link
                  href="/feedback"
                  className="feedback w-full lg:w-auto gap-3 outline-none border border-zinc-300/6 hover:border-zinc-600 hover:bg-zinc-700 px-4 py-2 rounded-md text-sm lg:text-[.8rem]  flex items-center justify-center"
                >
                  Feedback
                </Link>
                <Link
                  href={AvatarData.downloadLink}
                  className="download w-full lg:w-auto gap-3 outline-none border border-zinc-300/6 hover:border-zinc-600 hover:bg-zinc-700 px-4 py-2 rounded-md text-sm lg:text-[.8rem] flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="SVGID_1__mVIL3VQMOa5H_gr1"
                      x1="39.386"
                      x2="8.59"
                      y1="8.505"
                      y2="39.3"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".014" stop-color="#fe6d60"></stop>
                      <stop offset=".046" stop-color="#fe766a"></stop>
                      <stop offset=".208" stop-color="#fea097"></stop>
                      <stop offset=".37" stop-color="#ffc2bd"></stop>
                      <stop offset=".532" stop-color="#ffddda"></stop>
                      <stop offset=".692" stop-color="#fff0ee"></stop>
                      <stop offset=".849" stop-color="#fffbfb"></stop>
                      <stop offset="1" stop-color="#fff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#SVGID_1__mVIL3VQMOa5H_gr1)"
                      d="M38.028,7.349c-5.151-0.192-8.724-0.225-14.047-0.225C18.66,7.124,11.402,7.212,9.937,7.349	C8.279,8.395,5.031,12.556,5,13.602v1.732c0,1.686,1.14,3.206,2.462,3.824c-0.07,1.171-0.111,2.256-0.127,3.124v0.007	c-0.004,0.686-0.006,1.248-0.01,2.03c0.034,4.063-0.379,13.164,1.684,15.4c3.196,0.793,9.078,1.154,14.98,1.156h0	c5.901-0.002,11.783-0.363,14.98-1.154c2.063-2.237,1.651-11.338,1.684-15.399c-0.003-0.782-0.006-1.345-0.009-2.03v-0.007	c-0.017-0.866-0.057-1.95-0.128-3.12C41.848,18.554,43,17.029,43,15.334v-1.732C42.967,12.556,39.684,8.395,38.028,7.349z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#e02f24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="3"
                      d="M13.084,7.223c-1.507,0.031-2.654,0.069-3.147,0.112l0,0C8.279,8.319,5.031,12.234,5,13.218v1.629	c0,2.065,1.93,3.879,3.682,3.879c2.104,0,3.857-1.585,3.857-3.655c0,2.069,1.693,3.655,3.797,3.655c2.104,0,3.742-1.585,3.742-3.655	c0,2.069,1.799,3.655,3.903,3.655h0.038c2.104,0,3.905-1.585,3.905-3.655c0,2.069,1.638,3.655,3.741,3.655s3.797-1.585,3.797-3.655	c0,2.069,1.753,3.655,3.857,3.655c1.751,0,3.681-1.814,3.681-3.879v-1.629c-0.033-0.984-3.316-4.899-4.972-5.883	c-5.151-0.181-8.724-0.212-14.047-0.211c-1.65,0-3.487,0.008-5.279,0.023"
                    ></path>
                    <path
                      fill="none"
                      stroke="#e02f24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="3"
                      d="M18.706,40.78c1.71,0.064,3.496,0.096,5.284,0.097h0.001c5.901-0.002,11.783-0.341,14.98-1.085	c2.063-2.104,1.651-10.666,1.684-14.487c-0.001-0.208-0.002-0.399-0.003-0.581"
                    ></path>
                    <path
                      fill="none"
                      stroke="#e02f24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="3"
                      d="M7.609,18.553c-0.174,1.821-0.249,3.561-0.274,4.831v0.007c-0.004,0.645-0.006,1.174-0.009,1.91	C7.36,29.123,6.947,37.685,9.01,39.789c0.703,0.164,1.537,0.309,2.472,0.434"
                    ></path>
                    <path
                      fill="#e02f24"
                      d="M35.163,32.232l-1.47-5.268c-1.367-3.839-3.328-3.839-3.819-3.839v0.001h-0.003	c-1.038,0.003-1.959,0-3.102,1.246c-0.9-0.094-1.839-0.142-2.78-0.141h-0.001c-0.941-0.001-1.88,0.046-2.78,0.14	c-1.141-1.247-2.066-1.245-3.104-1.247c-0.49,0-2.45,0.001-3.818,3.84l-1.468,5.268c-1.088,3.917,0.348,4.014,2.14,4.017	c2.658-0.099,4.129-2.029,4.129-3.959c1.47,0.241,3.187,0.362,4.903,0.362h0.001c1.716,0,3.433-0.12,4.904-0.362	c0,1.929,1.471,3.861,4.129,3.959C34.815,36.247,36.252,36.151,35.163,32.232z M25.624,29.363v1.888c0,0.08-3.281,0.08-3.281,0	v-1.888l-1.872,0.078c0.535-0.973,3.513-3.707,3.515-3.71v-0.001h0l0,0v0.001c0,0,2.98,2.737,3.515,3.71L25.624,29.363z"
                    ></path>
                  </svg>
                  <ShinyText
                    text="Download now"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </main>
  );
};

export default Page;
