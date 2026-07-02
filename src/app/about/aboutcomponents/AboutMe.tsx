import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { UserRound } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="h-full grid border grid-cols-12 gap-6 p-6 border-accent-green rounded-2xl min-w-0">
  {/* About Me Title */}
      <div className="col-span-12 inline-flex items-center gap-4 text-3xl">
        <UserRound className="scale-150 text-accent-green shrink-0" />
        <h1 className="text-primary whitespace-nowrap ">About Me</h1>
      </div>



      <h3 className="col-span-12 text-secondary">
        I&apos;m a passionate front-end developer who loves turning ideas into
        real products. I&apos;m constantly learning and exploring new
        technologies to solve real-world problems.
      </h3>



      <div className="row-span-3 col-span-12">
        <Image
          src="/signiture.png"
          width={150}
          height={150}
          alt="Picture of the sign"
          className="overflow-hidden "
        />
      </div>
      <button className="cursor-pointer max-lg:col-span-12 lg:col-start-7 lg:col-span-6 text-primary text-sm inline-flex w-full items-center justify-between border pl-4 border-accent-green rounded-2xl p-2">
  More About Me
  <ArrowRight className="scale-90 text-accent-green" />
</button>
    </div>
  );
}
