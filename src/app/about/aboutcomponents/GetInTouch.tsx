import { AtSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type connection = {
  name: string;
  address: string;
  iconSrc: string;
  link: string;
};
const connections: connection[] = [
  {
    name: "Email",
    address: "amirmohkhosravi@gmail.com",
    iconSrc: "/contactLogo/gmail-icon.svg",
    link: "",
  },
  {
    name: "GitHub",
    address: "khosraviTech",
    iconSrc: "/toolLogo/github-icon.svg",
    link: "https://github.com/khosraviTech",
  },
  {
    name: "Linkdin",
    address: "Amir khosravi",
    iconSrc: "/contactLogo/linkedin-app-icon.svg",
    link: "https://linkedin.com/in/amir-khosravi-069594420",
  },
  {
    name: "Telegram",
    address: "Telegram address",
    iconSrc: "/contactLogo/telegram-icon.svg",
    link: "",
  },
  {
    name: "Bale",
    address: "@mohmmd_khosravi",
    iconSrc: "/contactLogo/Bale-green.svg",
    link: "",
  },
];
export default function GetInTouch() {
  return (
    <div className="h-full grid grid-cols-12 gap-6  border-2 shadow-xl p-6 rounded-2xl bg-bg-card">
      {/* title */}
      <div className=" col-span-4 text-3xl flex-col items-center  leading-tight mr-3 ">
        <span className=" space-y-3">
          <span className="inline-flex items-center gap-3">
            <AtSign className="scale-130  text-accent-green shrink-0 whitespace-nowrap" />
            <h1 className=" text-primary ">Get in Touch</h1>
          </span>

          <h3 className="text-secondary text-xl">
            Feel free to reach out for collaboration, networking, or just to say
            hello.
          </h3>
        </span>
      </div>




      {/* Connectino links */}
      <div className="col-span-8 flex flex-wrap gap-4">
        {connections.map((connection) => (
          <div
            key={connection.name}
            className=" border border-border rounded-2xl text-primary p-3"
          >
            <Link href={connection.link}>
              <div className="inline-flex items-center gap-2">
                <Image
                  src={connection.iconSrc}
                  width={30}
                  height={30}
                  alt="Picture of the Khosravi"
                  className=""
                />
                {/* name and addres flex-col */}
                <div className="flex flex-col items-center">
                  <span>{connection.name}</span>
                  <span className="text-secondary text-sm">
                    {connection.address}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
