import React from "react";
import { Inter } from "next/font/google";
import TextPressure from "./bits/TextPressure";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className=" h-[max-content] lg:h-[10dvh] w-full flex flex-col lg:flex-row items-center justify-between px-3 lg:px-8 gap-3 ">
      <p className=" text-[.5rem] font-[300] lg:text-[.7rem] ">
        Note: This is a{" "}
        <span className=" text-[.5rem] font-[400] lg:text-[.7rem] text-yellow-400 ">
          BETA
        </span>{" "}
        version of the Game.
      </p>
      <div className=" flex items-center justify-center gap-4 ">
        <Link
          href={"https://www.youtube.com/@999-Gaming-Studio"}
          className=" border-b-0 hover:border-b-2 border-yellow-500 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
        </Link>
        <Link
          href={"https://www.instagram.com/the.999.studio/"}
          className=" border-b-0 hover:border-b-2 border-yellow-500 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fd5"></stop>
              <stop offset=".328" stop-color="#ff543f"></stop>
              <stop offset=".348" stop-color="#fc5245"></stop>
              <stop offset=".504" stop-color="#e64771"></stop>
              <stop offset=".643" stop-color="#d53e91"></stop>
              <stop offset=".761" stop-color="#cc39a4"></stop>
              <stop offset=".841" stop-color="#c837ab"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#4168c9"></stop>
              <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            ></path>
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            ></path>
          </svg>
        </Link>
        <Link
          href={"https://discord.gg/Aw9dzuxN"}
          className=" border-b-0 hover:border-b-2 border-yellow-500 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#8c9eff"
              d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"
            ></path>
          </svg>
        </Link>
        <Link
          href={"https://t.me/the999studio"}
          className=" border-b-0 hover:border-b-2 border-yellow-500 "
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
              id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1"
              x1="9.858"
              x2="38.142"
              y1="9.858"
              y2="38.142"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#33bef0"></stop>
              <stop offset="1" stop-color="#0a85d9"></stop>
            </linearGradient>
            <path
              fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)"
              d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
            ></path>
            <path
              d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z"
              opacity=".05"
            ></path>
            <path
              d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z"
              opacity=".07"
            ></path>
            <path
              fill="#fff"
              d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"
            ></path>
          </svg>
        </Link>
        <Link
          href={"https://999studio.itch.io/"}
          className=" border-b-0 hover:border-b-2 border-yellow-500 "
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
        </Link>
      </div>
      <h2
        id="team_name"
        className=" text-[.6rem] lg:text-[.9rem] h-auto w-auto gap-1 flex items-center justify-center "
      >
        <span className={`${inter.className}`}>&copy;</span>
        <TextPressure
          text="999   Studio"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
        <span className={`${inter.className}`}>{new Date().getFullYear()}</span>
      </h2>
    </div>
  );
};

export default Footer;
