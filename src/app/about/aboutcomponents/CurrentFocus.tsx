import { Target, Wallet, ChartColumn, ShoppingCart, Brain } from "lucide-react";
import { ReactNode } from "react";

type CurrentLearning = {
  name: string;
};

const currentLearnings: CurrentLearning[] = [
  { name: "Next.js" },
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "Redux Toolkit" },
  { name: "RTK Query" },
  { name: "TypeScript" },
  { name: "JavaScript" },
];

type FutureInterest = {
  name: string;
  icon: ReactNode;
};

const futureInterests: FutureInterest[] = [
  {
    name: "Finance",
    icon: <Wallet className="text-accent-green" />,
  },
  {
    name: "Data Analysis",
    icon: <ChartColumn className="text-accent-green" />,
  },
  {
    name: "E-commerce",
    icon: <ShoppingCart className="text-accent-green" />,
  },
  {
    name: "Artificial Intelligence",
    icon: <Brain className="text-accent-green" />,
  },
];

export default function CurrentFocus() {
  return (
    <div className="h-full border-2 shadow-xl rounded-2xl p-6 grid grid-cols-12 gap-6 bg-bg-card">
      {/* Title */}
      <div className="col-span-12 flex items-center gap-4">
        <Target className= "scale-150 text-accent-green"  />

        <h1 className="text-3xl ">
          Current Focus
        </h1>
      </div>

      {/* Currently Learning */}
      <div className="col-span-5">
        <h2 className="text-accent-green text-2xl mb-6">
          Currently Learning
        </h2>

        <ul className="list-disc pl-6 marker:text-accent-green space-y-3 font-medium">
          {currentLearnings.map((item) => (
            <li key={item.name} className="text-primary text-lg">
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="col-span-1 flex justify-center">
        <div className="w-px  bg-gray-500 self-stretch" />
      </div>

      {/* Future Interests */}
      <div className="col-span-6">
        <h2 className="text-accent-green text-2xl mb-6">
          Future Interests
        </h2>

        <ul className="space-y-13 font-medium">
          {futureInterests.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 text-primary text-lg"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}