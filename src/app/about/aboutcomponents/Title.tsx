import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Download } from "lucide-react";

export default function Title() {
  return (
    <>
      <div>
        {/* image  */}
        <div className="w-75 h-75 rounded-full overflow-hidden border-2 border-blue-950 shadow-lg">
          <Image
            src="/khosravi_cap.jpg"
            width={100}
            height={100}
            alt="Picture of the Khosravi"
            className="object-cover w-full h-full"
          />
        </div>

        {/* text & btn */}
        <h3 className="text-xl text-accent-green">👋 Hi, I&apos;m</h3>
        <h1 className="text-6xl text-primary">Amir Mohammad</h1>
        <h1 className="text-6xl text-warning-orange">Khosravi</h1>
        <h3 className="text-2xl text-accent-green">
          <span className="text-2xl text-warning-orange">|</span> Front-End
          Developer
        </h3>
        <h3 className="text-xl text-secondary">
          I build modern and scalable web applications with a focus on usability
          and performance.
        </h3>

        <button className="inline-flex p-4 text-3xl bg-warning-orange text-black border-2 rounded-full text-center ">
          Download CV <Download />{" "}
        </button>
        <button className="inline-flex p-4 text-3xl bg-bg-dark border-accent-green border-2 rounded-full text-center  text-secondary">
          Contact Me <ArrowRight className="text-accent-green" />
        </button>
      </div>
    </>
  );
}
