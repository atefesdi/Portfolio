import React from "react";
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion"

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-between items-center sticky top-0 max-w-5xl mx-auto z-20 p-5">
      <motion.div className="flex flex-row items-center"
       initial={{
        x: -500,
        opacity:0,
        scale:.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      >
      <SocialIcon url="https://twitter.com/"  fgColor="gray" bgColor="transparent"/>
      <SocialIcon url="https://linkedin.com/" fgColor="gray" bgColor="transparent"/>
      <SocialIcon url="https://github.com/" fgColor="gray" bgColor="transparent" />

      </motion.div>

      <motion.div className="flex items-center"
      initial={{
        x: 500,
        opacity:0,
        scale:.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }} 
      transition={{
        duration:1.5,
      }}
      >
        <SocialIcon network="email" className=" cursor-pointer" fgColor="gray" bgColor="transparent" />
        <p className=" uppercase hidden md:inline-flex text-gray-400">Get In Touch</p>
      </motion.div>
    </header>
  );
}
