import Image from "next/image";

export default function About() {
  const my_img =
    "https://avatars.githubusercontent.com/u/209061346?s=400&u=bc6f9cc322cd95d7ee6beb96a334f1d8ff16dbd2&v=4";
  return (
    <div>
      <div>
        {/* title & image */}
        <div className="flex gap-3">

          <div className="flex-1">
            <h1>Frontend Developer</h1>
            <h2>Amir Mohammad khosravi</h2>
          </div>

          <div className="flex-1">
            <Image
              src={my_img}
              alt="this is the picture of AmirMohammad Khosravi"
              className=" border-4 border-b-black "
              width={50}
              height={50}
            />
          </div>
          
        </div>
{/* description */}
        <div className="border-2 border-amber-950 shadow-2xl">
          <p>
            I built this e-commerce project to strengthen my frontend
            development skills with Next.js and TypeScript. The project focuses
            on real-world patterns such as API handling with RTK Query, reusable
            component design, and strong type safety. It also includes product
            listing, UI state management, and integration with a mock backend
            API. This project represents my ability to turn API data into a
            functional and structured user interface using modern frontend
            practices.
          </p>
        </div>
        <div>
          call me:(+98) 09917786089
        </div>
      </div>
    </div>
  );
}
