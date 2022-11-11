import { motion } from "framer-motion";
import React, { useEffect, useRef  , useState} from "react";
import { SocialIcon } from "react-social-icons";

type Props = {
  src:string;
  explain:string;
  gitHub:string;
};

function ExperienceCard({src,explain,gitHub }: Props) {
 

 
  return (
    <article   id="cart" className=" flex flex-col snap-center  transition-opacity opacity-60 hover:opacity-100
     duration-200  justify-center items-center rounded-lg p-5 flex-shrink-0 
     mx-20  md:mx-10 w-[80%] m-10 h-[70%] bg-[#292929] ">
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src={src}
        className="w-[400px] p-2  h-[400px] rounded-full md:rounded-lg md:w-[680px] md:h-[400px] object-cover"
      />
      <div  className="flex flex-row ">
        
        <SocialIcon
          className="mx-1"
          url="https://github.com/"
          bgColor="white"
        />
        
      </div>
      
    </article>
  );
}

export default ExperienceCard;
