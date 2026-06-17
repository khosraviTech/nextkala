import { Target } from "lucide-react";
import { Wallet, ChartColumn, ShoppingCart, Brain } from "lucide-react";
import { ReactNode } from "react";
type CurrentLearning = {
  name: string;
};
const Currentlearnings: CurrentLearning[] = [
  { name: "Next.js" },
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "Redux Toolkit" },
  { name: "RTK Query" },
  { name: "TypeScript" },
  { name: "JavaScript" },
];
type FutureIntrest = {
  name: string;
  iconSrc: ReactNode;
};
const FutureIntrests: FutureIntrest[] = [
  {
    name: "Future Interests",
    iconSrc: <Wallet className=" text-accent-green" />,
  },
  {
    name: "Data Analysis",
    iconSrc: <ChartColumn className=" text-accent-green" />,
  },
  {
    name: "E-commerce",
    iconSrc: <ShoppingCart className=" text-accent-green" />,
  },
  {
    name: "Artificial Intelligences",
    iconSrc: <Brain className=" text-accent-green" />,
  },
];

export default function CurrentFocus() {
  return (
    <div className="h-100 border border-purple-500 grid grid-rows-12 grid-cols-12 p-6 gap-6 ">
      {/* title of section */}
      <div className="row-start-1 row-end-2 col-start-1 col-end-12 inline-flex items-center gap-5 text-3xl ">
        <Target className="scale-150 text-accent-green shrink-0" />
        <h1 className="text-accent-green">Current Focus</h1>
      </div>

      {/* Currently Learning */}

      <div className="row-start-2 row-end-3 col-start-1 col-end-6">
        <h2 className="text-accent-green text-2xl mb-4 mt-3">
          Currently Learning
        </h2>

        <ul className="list-disc pl-6 marker:text-accent-green text-xl space-y-3">
          {Currentlearnings.map((laerned) => (
            <li key={laerned.name} className=" text-primary">
              {laerned.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Divider line */}
      <div className=" row-start-2 row-end-12 col-start-6 col-end-7 flex justify-center mt-8">
        <div className="w-px h-70 bg-gray-500"></div>
      </div>
      {/* Future Interests  */}
      <div className="row-start-2 row-end-3 col-start-7 col-end-12 ">
        <h2 className="text-accent-green text-2xl mb-4 mt-3">
          Future Interests
        </h2>

        <ul className=" text-xl space-y-13">
          {FutureIntrests.map((FutureIntrest) => (
            <li
              key={FutureIntrest.name}
              className=" text-primary flex items-center gap-2"
            >
              {FutureIntrest.iconSrc} {FutureIntrest.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
