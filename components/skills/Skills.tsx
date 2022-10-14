import React from "react";
import { skillArr } from "../../data/skillsIcons";
import Skill from "./Skill";


type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center ">
      <h1 className=" absolute top-28 uppercase tracking-[20px] font-semibold text-3xl text-gray-500 ">
        skills
      </h1>
      <h3 className=" absolute top-44 uppercase tracking-[7px] font-semibold text-sm text-gray-500 ">
        Hover over skill for currency profienciency
      </h3>

      <div className="grid grid-cols-4 gap-4 ">
      {skillArr.map((item , index)=> <Skill key={index} directionLeft={item.directionLeft} src={item.src} percentage={item.percentage} />)}

      </div>
    </div>
  );
}

export default Skills;
