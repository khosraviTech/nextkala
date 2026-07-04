import { project } from "@/types/project";
import Image from "next/image";

const projects: project[] = [
  {
    title: "NEXTKALA",
    description:
      "A modern platform built with Next.js offering a fast and responsive shopping experience",
    tags: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "NextAuth",
    ],
    address: "http://localhost:3000/",
    image: "/projectImages/NEXTKALA.JPG",
    gitHubAddress: "https://github.com/khosraviTech/nextkala",
  },
  {
    title: "NEXTKALA",
    description:
      "A modern platform built with Next.js offering a fast and responsive shopping experience",
    tags: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "NextAuth",
    ],
    address: "http://localhost:3000/",
    image: "/projectImages/NEXTKALA.JPG",
    gitHubAddress: "https://github.com/khosraviTech/nextkala",
  },
  {
    title: "NEXTKALA",
    description:
      "A modern platform built with Next.js offering a fast and responsive shopping experience",
    tags: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "NextAuth",
    ],
    address: "http://localhost:3000/",
    image: "/projectImages/NEXTKALA.JPG",
    gitHubAddress: "https://github.com/khosraviTech/nextkala",
  },
];

export default function Projects() {
  return (
    <>
      <div className="border-2 border-accent-green rounded-3xl p-6 flex gap-8">

        {projects.map((project) => (
          
          <div key={project.title} className="text-primary">
            <Image
              src={project.image}
              width={500}
              height={500}
              alt="Picture of the project"
              className="rounded-3xl"
            />

            <h1>{project.title}</h1>

            <h2>{project.description}</h2>

            {project.tags.map((tag) => (
              <div key={tag}>{tag}</div>
            ))}

            <div>{project.address}</div>
            <div>{project.gitHubAddress}</div>
          </div>
        ))}
      </div>
    </>
  );
}
