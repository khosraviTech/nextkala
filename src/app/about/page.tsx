import AboutMe from "./aboutcomponents/AboutMe";
import CurrentFocus from "./aboutcomponents/CurrentFocus";
import Title from "./aboutcomponents/Title";

export default function About() {
  return (
    <>
      <div className="bg-bg-dark">
        <Title />
        <AboutMe/>
        <CurrentFocus/>
      </div>
    </>
  );
}
