import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Title() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6 p-6 border-2 border-blue-500 rounded-2xl">
      {/* Image */}
      <div className="grid-cols-1  lg:col-span-5 flex items-center justify-center">
        <div className="w-75 h-75 rounded-full overflow-hidden border-2 border-blue-950 shadow-lg">
          <Image
            src="/khosravi_cap.jpg"
            width={300}
            height={300}
            alt="Picture of Amir Mohammad Khosravi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="grid-cols-1 lg:col-span-7 flex flex-col justify-center gap-4">
        <h3 className="text-xl text-accent-green">
          👋 Hi, I&apos;m
        </h3>

        <h1 className="text-6xl text-primary leading-tight xl:whitespace-nowrap">
          Amir Mohammad
        </h1>

        <h1 className="text-6xl text-warning-orange leading-tight">
          Khosravi
        </h1>

        <h3 className="text-2xl text-accent-green">
          <span className="font-bold text-warning-orange">|</span>{" "}
          Front-End Developer
        </h3>

        <p className="text-xl text-secondary">
          I build modern and scalable web applications with a focus on
          usability and performance.
        </p>

        <div className="flex gap-4 pt-2">
          <button className="flex-1 inline-flex items-center justify-between p-4 text-xl bg-warning-orange text-black rounded-full">
            Download CV
            <Download />
          </button>

          <button className="flex-1 inline-flex items-center justify-between p-4 text-xl bg-bg-dark border-2 border-accent-green rounded-full text-secondary">
            Contact Me
            <ArrowRight className="text-accent-green" />
          </button>
        </div>

        
      </div>
    </div>
  );
}