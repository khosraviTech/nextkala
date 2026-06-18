import { CodeXml } from "lucide-react";
import Image from "next/image";

type skill = {
  name: string;
  logoSrc: string;
  level: number;
};
const skills: skill[] = [
  { name: "HTML", logoSrc: "/skillLogo/html-icon.svg", level: 1 },
  { name: "CSS", logoSrc: "/skillLogo/css-icon.svg", level: 1 },
  { name: "JavaScript", logoSrc: "/skillLogo/javascript-icon.svg", level: 1 },
  { name: "TypeScript", logoSrc: "/skillLogo/typescript-icon.svg", level: 1 },
  { name: "React", logoSrc: "/skillLogo/react-icon.svg", level: 1 },
  { name: "Next.js", logoSrc: "/skillLogo/nextjs-icon.svg", level: 1 },
  {
    name: "Tailwind CSS",
    logoSrc: "/skillLogo/tailwind-css-icon.svg",
    level: 1,
  },
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
// type trait = {
//   name: string;
//   level: number
// };
// const professionalTraits: trait[] = [
//   { name: "Continuous Learning" ,level:80},
//   { name: "Continuous Learning" ,level:80}
// ];

export default function MySkills() {

  return (
    <div className="grid grid-rows-12 grid-cols-12 gap-6 p-6 border-amber-300 border ">
      {/*  My Skills Title */}
      <div className="row-start-1 row-end-2 col-start-1 col-end-3 inline-flex items-center gap-5 text-3xl">
        <CodeXml className="scale-150 text-accent-green shrink-0" />
        <h1 className="text-primary whitespace-nowrap">My Skills</h1>
      </div>

      {/* Front-end Section */}
      <h2 className="row-start-2 row-end-3 col-start-1 col-end-6 text-2xl text-accent-green ">Front-end</h2>
      <div className="row-start-3 row-end-12 col-start-1 col-end-6  flex flex-wrap items-center gap-6 mt-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center"
          >
            <Image
              src={skill.logoSrc}
              width={60}
              height={60}
              alt="skill image"
              className="p-2"
              
            />

            <h3 className="text-xl text-secondary">{skill.name}</h3>
          </div>
        ))}
      </div>

      {/* Divider line */}
      <div className=" row-start-2 row-end-12 col-start-6 col-end-6 flex justify-center mt-8">
        <div className="w-px h-70 bg-gray-500"></div>
      </div>

      {/* Tools */}
      <h2 className="row-start-2 row-end-3 col-start-7 col-end-12 text-2xl text-warning-orange">Tools</h2>
      <div className="row-start-3 row-end-12 col-start-8 col-end-12 flex flex-wrap items-center gap-6 mt-3 ">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center">
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
      {/* <div className=" row-start-2 row-end-12 col-start-6 col-end-7 flex justify-center mt-8">
        <div className="w-px h-70 bg-gray-500"></div>
      </div> */}

      {/* Other things... like personal values */}
    </div>
  );
}
