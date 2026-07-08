import { project } from "@/types/project";
import { FolderClosed, MonitorPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects: project[] = [
  {
    title: "NEXTKALA",
    description:
      "A modern platform built with Next.js offering a fast and responsive shopping experience.",
    tags: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "NextAuth",
    ],
    address: "https://nextkala.vercel.app/",
    image: "/projectImages/NEXTKALA2.JPG",
    gitHubAddress: "https://github.com/khosraviTech/nextkala",
  },
  
];

export default function Projects() {
  return (
    <>
      <div className="border-2 shadow-xl rounded-3xl p-4 grid grid-cols-12 gap-6 bg-bg-card">
       
       
       
        <div className="col-span-12 inline-flex items-center gap-4 ml-2">
          <FolderClosed className="text-accent-green scale-150" />
          <h1 className="text-primary text-3xl"> Featured Projects</h1>
        </div>

        <div className=" col-span-12 flex items-center gap-4 p-0 m-0">
          {projects.map((project) => (
            <div
              key={project.title}
              className="grid grid-cols-12 text-primary bg-bg-card   rounded-3xl p-3 gap-2"
            >
              {/* project image */}
              <Image
                src={project.image}
                width={600}
                height={600}
                alt="Picture of the project"
                className=" col-span-12 rounded-2xl  pl-5 m-0"
              />
              {/* project title */}
              <h1 className="col-span-12 p-2 text-2xl font-semibold">
                {project.title}
              </h1>
              {/* project description */}
              <h2 className="col-span-12 p-2 font-medium">{project.description}</h2>

              {/* project tags */}
              <div className="col-span-12 p-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="border border-[#48acf0] bg-[#48acf0] rounded-2xl p-2 text-sm font-bold "
                  >
                    {tag}
                  </div>
                ))}
              </div>
              
              
              {/*project  demo Link */}
              <Link
                href={project.address}
                className=" hover:bg-[#57cc99] border-2 hover:border-[#57cc99]   col-span-6 rounded-xl inline-flex items-center gap-2 justify-between p-4 m-2"
              >
                Demo <MonitorPlay className="scale-120" />
              </Link>



              {/* project github link */}
              <Link
                href={project.gitHubAddress}
                className="hover:bg-[#57cc99] border-2 hover:border-[#57cc99] col-span-6 rounded-xl inline-flex items-center gap-2 justify-between p-4 m-2 "
              >
                GitHub
                <Image
                  src="/toolLogo/github-icon.svg"
                  width={30}
                  height={30}
                  alt="Picture of the project"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
