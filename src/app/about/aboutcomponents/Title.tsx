import React from "react";
import Image from 'next/image'

export default function Title() {
  return (
    <>
     <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-2 border-blue-950 shadow-lg">
  <Image
    src="/khosravi_cap.jpg"
    width={100}
    height={100}
    alt="Picture of the Khosravi"
    className="object-cover w-full h-full"
  />
</div>
      <h1>Amir Mohammad</h1>
      <h1>Khosravi</h1>
      <h3><span>|</span> Front-End Developer</h3>
      <h4>I build modern and scalable web applications with a focus on usability and performance.</h4>

      <button>Download CV </button>
      <button>Contact Me </button>
    </>
  );
}
