import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { UserRound } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="h-112 grid  border-2 grid-rows-12 grid-cols-12 gap-2 p-6 border-red-500 ">
  
      <div className="row-start-1 row-end-2 col-start-1 col-end-3 inline-flex gap-2">
        <UserRound className="scale-90 text-accent-green shrink-0" />
        <h1 className="text-primary">AboutMe</h1>
      </div>



      <h3 className="row-start-3 row-end-6 col-start-1 col-end-11 text-secondary">
        I&apos;m a passionate front-end developer who loves turning ideas into
        real products. I&apos;m constantly learning and exploring new
        technologies to solve real-world problems.
      </h3>



      <div className="row-start-8 row-end-11 col-start-1 col-end-4">
        <Image
          src="/signiture.png"
          width={100}
          height={100}
          alt="Picture of the sign"
          className="overflow-hidden "
        />
      </div>
      <button className="row-start-10 row-end-12 col-start-6 col-end-11 text-primary text-sm inline-flex gap-2 border pl-4 border-accent-green rounded-2xl p-2 ">
        More About Me <ArrowRight className=" scale-90 text-accent-green" />
      </button>
    </div>
  );
}
