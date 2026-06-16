import { Target } from "lucide-react";
import { Wallet, ChartColumn, ShoppingCart, Brain } from "lucide-react";
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
        <h2 className="text-accent-green text-2xl mb-4 mt-3">Currently Learning</h2>
        <ul className="list-disc pl-6 marker:text-accent-green text-xl space-y-3">
          <li className="text-primary">Next.js</li>
          <li className="text-primary">React</li>
          <li className="text-primary">Tailwind CSS</li>
          <li className="text-primary">Redux Toolkit</li>
          <li className="text-primary">RTK Query</li>
          <li className="text-primary">TypeScript</li>
          <li className="text-primary">JavaScript</li>
        </ul>
      </div>

{/* Divider line */}
<div className=" row-start-2 row-end-12 col-start-6 col-end-7 flex justify-center mt-8">
  <div className="w-px h-70 bg-gray-500"></div>
</div>
      {/* Future Interests  */}
      <div className="row-start-2 row-end-3 col-start-7 col-end-12 ">
        <h2 className="text-accent-green text-2xl mb-4 mt-3">Future Interests</h2>

        <ul className="text-xl space-y-13">
          <li className=" text-primary flex items-center">
            <Wallet className=" text-accent-green" />
            Financial Management
          </li>

          <li className=" text-primary flex items-center">
            <ChartColumn className=" text-accent-green" />
            Data Analysis
          </li>

          <li className="text-primary flex items-center">
            <ShoppingCart className=" text-accent-green" />
            E-commerce
          </li>

          <li className="text-primary flex items-center">
            <Brain className=" text-accent-green" />
            Artificial Intelligence
          </li>
        </ul>
      </div>
    </div>
  );
}
