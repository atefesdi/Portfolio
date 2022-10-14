import React from "react";
import { motion } from "framer-motion";

type Props = {directionLeft? : boolean , src:string , percentage:string};

function Skill({directionLeft , src , percentage }: Props) {



  return (
    <div className=" group relative cursor-pointer rounded-full">
      <motion.img 
         initial={{
            x: directionLeft ? -200 : 200,
            opacity:0
        }}
        whileInView={{
          x:0,
            opacity:1
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="h-28 w-28 rounded-full"

        src={src}
      />
      <div className=" absolute h-28 w-28 border-orange-900 bg-orange-900 rounded-full flex justify-center items-center top-0 group-hover:opacity-90 opacity-0 ">
         <p className="text-white text-3xl font-bold">{percentage}</p>
      </div>
    </div>
  );
}

export default Skill;
