"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Title() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6 p-6 border-2 shadow-xl rounded-2xl bg-bg-card">
      {/* Image */}
      <div className="grid-cols-1  lg:col-span-5 flex items-center justify-center">
        <div className="w-75 h-75 rounded-full overflow-hidden border shadow-lg">
          <Image
            src="/Khosravi_cap.jpg"
            width={300}
            height={300}
            alt="Picture of Amir Mohammad Khosravi"
            className=""
          />
        </div>
      </div>

      {/* Content */}
      <div className="grid-cols-1 lg:col-span-7 flex flex-col justify-center gap-4">
        <h3 className="text-xl text-accent-green">👋 Hi, I&apos;m</h3>

        <h1 className="text-6xl text-primary leading-tight xl:whitespace-nowrap">
          Amir Mohammad
        </h1>

        <h1 className="text-6xl text-warning-orange leading-tight">Khosravi</h1>

        <h3 className="text-2xl text-accent-green font-medium inline-flex leading-0 items-center gap-4">
          {/* <span className="font-bold text-[#57cc99] ">|</span>  */}
          <Image
            src="/skillLogo/3d-modeling-icon.svg"
            width={20}
            height={20}
            alt="Picture of Front-end"
            className="scale-150"
          />
          Front-End Developer
        </h3>

        <p className="text-xl text-secondary font-medium">
          I build modern and scalable web applications with a focus on usability
          and performance.
        </p>

        <div className="flex gap-4 pt-2">
          <button className="cursor-pointer flex-1 inline-flex items-center justify-between p-4 text-xl bg-warning-orange text-black rounded-full">
            Download CV
            <Download />
          </button>

          <button
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}
            className=" cursor-pointer flex-1 inline-flex items-center justify-between p-4 text-xl border-2 border-accent-green rounded-full text-secondary"
          >
            Contact Me
            <ArrowRight className="text-accent-green" />
          </button>
        </div>
      </div>
    </div>
  );
}
