import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <div className="h-screen  relative overflow-hidden max-w-full mx-auto flex flex-col md:flex-row items-center justify-center ">
      <h1 className=" absolute md:top-28 top-20 uppercase tracking-[10px] font-semibold text-xl md:text-3xl text-gray-500">
        experience
      </h1>

      <div className=" space-x-8 p-10 mb-10 mt-20 m-10 flex overflow-y-hidden  no-scrollbar  flex-nowrap hover:overflow-x-scroll relative w-full snap-x snap-mandatory ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}

export default Experience;