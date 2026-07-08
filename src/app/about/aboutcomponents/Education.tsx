import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default function Education() {
  return (
    <div className="h-full grid grid-cols-6 border-2 shadow-xl rounded-2xl p-6 bg-bg-card">
      {/* title & icon */}
      <div className="col-span-12 mb-3 text-3xl inline-flex items-center gap-5 leading-tight">
        <GraduationCap className="scale-200 text-accent-green" />
        <h1 className="text-primary">Education</h1>
      </div>

      
      <div className="col-span-12 flex flex-col items-center gap-2">
        {/* Image & University info */}
        <Image
          src="/University_of_Tehran_logo.svg"
          width={200}
          height={200}
          alt="Picture of the Khosravi"
          className="object-cover"
        />
        <h1 className="text-primary text-2xl font-bold">دانشگاه تهران</h1>
        <h1 className="text-secondary text-2xl ">Tehran University</h1>
        <h1 className="text-accent-green text-3xl ">Computer Engineering</h1>
        
        {/* year  info */}
        <div className="text-3xl inline-flex items-center gap-2 leading-tight">
          <Calendar className="scale-100 text-secondary" />
          <h1 className="text-secondary text-2xl">2019-2023</h1>  
        </div>
      
      </div>

      
    </div>
  );
}
