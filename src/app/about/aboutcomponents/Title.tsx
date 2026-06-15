import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Download } from "lucide-react";

export default function Title() {
  return (
    <>
      <div className=" grid grid-cols-12 grid-rows-7 gap-3 p-6 border-blue-500 border-2">
        {/* image  */}
        <div className=" row-start-2 row-end-12 col-start-1 col-end-6 w-75 h-75 rounded-full overflow-hidden border-2 border-blue-950 shadow-lg">
          <Image
            src="/khosravi_cap.jpg"
            width={100}
            height={100}
            alt="Picture of the Khosravi"
            className="object-cover w-full h-full"
          />
        </div>

        {/* text */}
        <h3 className="row-start-1 row-end-2 col-start-6 col-end-8 text-xl text-accent-green">
          👋 Hi, I&apos;m
        </h3>
        <h1 className="row-start-2 row-end-3 col-start-6 col-end-12 text-6xl text-primary leading-tight whitespace-nowrap">
          Amir Mohammad
        </h1>
        <h1 className="row-start-3 row-end-4 col-start-6 col-end-12 text-6xl text-warning-orange">
          Khosravi
        </h1>
        <h3 className="row-start-4 row-end-5 col-start-6 col-end-12 text-2xl text-accent-green">
          <span className="font-bold text-2xl text-warning-orange">|</span>{" "}
          Front-End Developer
        </h3>
        <h3 className=" row-start-5 row-end-6 col-start-6 col-end-12 text-xl text-secondary">
          I build modern and scalable web applications with a focus on usability
          and performance.
        </h3>
        {/* btn */}
        <button className="mt-3 row-start-6 row-end-7 col-start-6 col-end-9 inline-flex items-center  gap-2 leading-tight p-4 text-xl bg-warning-orange text-black border-2 rounded-full text-center ">
          Download CV <Download />{" "}
        </button>
        <button className=" mt-3 row-start-6 row-end-7 col-start-9 col-end-12 inline-flex  items-center  gap-5 leading-tight p-4 text-xl bg-bg-dark border-accent-green border-2 rounded-full text-center  text-secondary">
          Contact Me <ArrowRight className=" scale-100 text-accent-green" />
        </button>
      </div>
    </>
  );
}
