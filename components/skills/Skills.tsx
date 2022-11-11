import React from "react";
import { skillArr } from "../../data/skillsIcons";
import Skill from "./Skill";


type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-screen  bg-[rgb(36,36,36)] relative flex flex-col justify-center items-center ">
      <h1 className="  absolute md:top-28 top-20 uppercase tracking-[10px] font-semibold text-xl md:text-3xl text-gray-500">
        skills
      </h1>
      <h3 className=" absolute md:top-44 top-28 uppercase tracking-[2px] md:font-semibold font-thin m-5 mb-8 md:text-lg text-center text-xs text-gray-500 ">
        Hover over skill for currency profienciency
      </h3>

      <div className="grid md:grid-cols-4 grid-cols-3 gap-4 ">
      {skillArr.map((item , index)=> <Skill key={index} directionLeft={item.directionLeft} src={item.src} percentage={item.percentage} />)}

      </div>
    </div>
  );
}

export default Skills;
