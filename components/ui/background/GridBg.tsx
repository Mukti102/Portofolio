"use client";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div
      className={`w-full absolute dark:bg-secondary z-40 top-0 flex justify-center items-center h-full`}
    >
      <div
        className={`h-full  w-full  dark:bg-secondary bg-[#ffff] sm:dark:bg-grid-white/[0.2] dark:bg-grid-small-white/[0.2]  sm:bg-grid-black/[.1] bg-grid-small-black/[0.2] top-0 z-10 flex items-center justify-center `}
      >
        <div
          className={`mx-auto absolute blur-2xl opacity-75 w-full h-full flex flex-wrap justify-center -z-10`}
        >
          <div className="contentGradient"></div>
        </div>
        {/* Radial gradient for the container to give a faded look */}
        <div
          className={`absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-secondary bg-[#fff]  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`}
        ></div>
      </div>
    </div>
  );
}
