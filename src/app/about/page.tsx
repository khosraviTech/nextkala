import AboutMe from "./aboutcomponents/AboutMe";
import Title from "./aboutcomponents/Title";

export default function About() {
  return (
    <>
      <div className="bg-bg-dark">
        <Title />
        <AboutMe/>
      </div>
    </>
  );
}
