import { CodeXml } from "lucide-react";
import Image from "next/image";

type skill = {
  name: string;
  logoSrc: string;
};
const skills: skill[] = [
  { name: "HTML", logoSrc: "/skillLogo/html-icon.svg" },
  { name: "CSS", logoSrc: "/skillLogo/css-icon.svg" },
  { name: "JavaScript", logoSrc: "/skillLogo/javascript-icon.svg" },
  { name: "TypeScript", logoSrc: "/skillLogo/typescript-icon.svg" },
  { name: "React", logoSrc: "/skillLogo/react-icon.svg" },
  { name: "Next.js", logoSrc: "/skillLogo/nextjs-icon.svg" },
  { name: "Tailwind CSS", logoSrc: "/skillLogo/tailwind-css-icon.svg" },
];

type tool = {
  name: string;
  logoSrc: string;
};
const tools: tool[] = [
  { name: "Git", logoSrc: "/toolLogo/git-icon.svg" },
  { name: "GitHub", logoSrc: "/toolLogo/github-white-icon.svg" },
  { name: "VS Code", logoSrc: "/toolLogo/vsCode-icon.svg" },
  { name: "Ubuntu", logoSrc: "/toolLogo/Ubuntu-color-icon.svg" },
  { name: "Redux ToolKit", logoSrc: "/toolLogo/redux-icon.svg" },
];

export default function MySkills() {
  return (
    <div className="p-6">
      {/*  My Skills Title */}
      <div className="row-start-1 row-end-2 col-start-1 col-end-3 inline-flex items-center gap-5 text-3xl">
        <CodeXml className="scale-150 text-accent-green shrink-0" />
        <h1 className="text-primary whitespace-nowrap">My Skills</h1>
      </div>

      {/* Front-end Section */}
      <div className="flex flex-wrap items-center gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center flex-wrap">
            <Image
              src={skill.logoSrc}
              width={60}
              height={60}
              alt="an image"
              className="p-2"
            />

            <h3 className="text-xl text-secondary">{skill.name}</h3>
          </div>
        ))}
      </div>

      {/* Divider line */}
      <div className=" row-start-2 row-end-12 col-start-6 col-end-7 flex justify-center mt-8">
        <div className="w-px h-70 bg-gray-500"></div>
      </div>

      {/* Tools */}

     <div className="flex flex-wrap items-center gap-6">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center flex-wrap">
            <Image
              src={tool.logoSrc}
              width={60}
              height={60}
              alt="an image"
              className="p-2"
            />

            <h3 className="text-xl text-secondary">{tool.name}</h3>
          </div>
        ))}
      </div>

      {/* Divider line */}
      <div className=" row-start-2 row-end-12 col-start-6 col-end-7 flex justify-center mt-8">
        <div className="w-px h-70 bg-gray-500"></div>
      </div>

      {/* Other Skills */}
    </div>
  );
}
