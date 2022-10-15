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
        className="md:h-28 md:w-28 w-16 h-16 rounded-full"

        src={src}
      />
      <motion.div className=" absolute md:h-28 md:w-28 w-16 h-16  border-[#3333]/90 bg-[#3333]/80 rounded-full flex justify-center items-center top-0 group-hover:opacity-90 opacity-0 ">
         <p className=" text-white text-3xl font-bold ">{percentage}</p>
      </motion.div>
    </div>
  );
}

export default Skill;
