import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col snap-center  transition-opacity opacity-60 hover:opacity-100
     duration-200 cursor-pointer justify-center items-center rounded-lg p-5 flex-shrink-0 
     mx-20 my-5 md:mx-10 w-[390px] md:w-[600px] bg-[#292929] ">
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
        src="work.jpg"
        className="w-[220px] p-2  h-[220px] rounded-full md:rounded-lg md:w-[400px] md:h-[450px] object-cover"
      />
      <div className="flex flex-row ">
        <SocialIcon className="mx-1" url="https://linkedin.com/" />
        <SocialIcon
          className="mx-1"
          url="https://github.com/"
          bgColor="white"
        />
        <SocialIcon className="mx-1" url="https://gitlab.com/" />
      </div>
      <ul className=" list-disc space-y-2 ">
        <li>Summery point</li>
        <li>Summery point</li>
        <li>Summery point</li>
        <li>Summery point</li>
      </ul>
    </article>
  );
}

export default ExperienceCard;
