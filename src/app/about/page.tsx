import AboutMe from "./aboutcomponents/AboutMe";
import GetInTouch from "./aboutcomponents/GetInTouch";
import CurrentFocus from "./aboutcomponents/CurrentFocus";
import Education from "./aboutcomponents/Education";
import MySkills from "./aboutcomponents/MySkills";
import Title from "./aboutcomponents/Title";

export default function About() {
  return (
    <>
      <div className="bg-bg-dark">
        <Title />
        <Education />
        <AboutMe />
        <CurrentFocus />
        <MySkills />
        <GetInTouch />
      </div>
    </>
  );
}
