import AboutMe from "./aboutcomponents/AboutMe";
import GetInTouch from "./aboutcomponents/GetInTouch";
import CurrentFocus from "./aboutcomponents/CurrentFocus";
import Education from "./aboutcomponents/Education";
import MySkills from "./aboutcomponents/MySkills";
import Title from "./aboutcomponents/Title";

export default function About() {
  return (
    <div className="grid  lg:grid-cols-12  lg:gap-6 gap-5  bg-bg-dark p-6">
  <div className=" col-span-1    lg:col-span-8">
    <Title />
  </div>

  <div className=" col-span-1   lg:col-span-4">
    <Education />
  </div>

  <div className=" col-span-1   lg:col-span-4">
    <AboutMe />
  </div>

  <div className=" col-span-1   lg:col-span-8 ">
    <CurrentFocus />
  </div>

  <div className=" col-span-1  lg:col-span-12">
    <MySkills />
  </div>

  <div className=" col-span-1  lg:col-span-12">
    <GetInTouch />
  </div>
</div>
   
  );
}
