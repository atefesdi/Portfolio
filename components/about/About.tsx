import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen relative flex flex-col  items-center justify-center">
      <h1 className="absolute top-28 uppercase tracking-[20px] font-semibold text-3xl text-gray-500 ">
        about
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center  mt-24">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once:true
         }}
          transition={{
            duration: 1,
          }}
          
        >
          <Image
            src={"/about.jpg"}
            width="400px"
            height="400px"
            className="w-52 h-52 object-cover flex-shrink-0 rounded-full md:rounded-lg "
          />
        </motion.div>
        <motion.div className="w-[500px] md:w-[600px] pl-10"
         initial={{ opacity: 0, x: 200 }}
         whileInView={{
           opacity: 1,
           x: 0,
         }}
         viewport={{
            once:true
         }}
         transition={{
           duration: 1.2,
         }}
        >
          <h1 className="md:mb-10 my-5 text-4xl font-semibold">
            Here is a little background
          </h1>
          <p className="md:text-xl text-md leading-2  md:leading-9">
            Passionate junior front-end developer working with HTML, CSS,
            JavaScript, Reactjs, Redux, and Typescript aiming for personal and
            professional growth. Experienced in blending the art of design with
            skill of programming to deliver an immersive and engaging user
            experience through efficient website development, proactive feature
            optimization, and relentless debugging. Adept at contributing to a
            highly collaborative work environment and finding solutions to
            probelms.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
