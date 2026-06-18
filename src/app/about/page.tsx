import AboutMe from "./aboutcomponents/AboutMe";
import GetInTouch from "./aboutcomponents/GetInTouch";
import CurrentFocus from "./aboutcomponents/CurrentFocus";
import Education from "./aboutcomponents/Education";
import MySkills from "./aboutcomponents/MySkills";
import Title from "./aboutcomponents/Title";

export default function About() {
  return (
    <div className="grid grid-cols-12 gap-6 bg-bg-dark ">
  <div className="col-span-8">
    <Title />
  </div>

  <div className="col-span-4">
    <Education />
  </div>

  <div className="col-span-4">
    <AboutMe />
  </div>

  <div className="col-span-8 ">
    <CurrentFocus />
  </div>

  <div className="col-span-12">
    <MySkills />
  </div>

  <div className="col-span-12">
    <GetInTouch />
  </div>
</div>
    // <div className=" grid grid-rows-12 grid-cols-12 bg-bg-dark border-2 border-pink-500">

    //   <div className="row-start-1 row-end-4 col-start-1 col-end-8">
    //     <Title />
    //   </div>

    //   <div className="row-start-1 row-end-4 col-start-8 col-end-12">
    //     <Education />
    //   </div>



    //   <div className="row-start-4 row-end-7 col-start-1 col-end-4">
    //     <AboutMe />
    //   </div>

    //   <div className="row-start-4 row-end-7 col-start-4 col-end-12">
    //     <CurrentFocus />
    //   </div>



    //   <div className="row-start-7 row-end-10 col-start-1 col-end-12">
    //     <MySkills />
    //   </div>

    //   <div className="row-start-10 row-end-12 col-start-1 col-end-12">
    //     <GetInTouch />
    //   </div>
    // </div>
  );
}
