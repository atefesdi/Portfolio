import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Atefe",
      "Girl-Who-Loves-Coffee.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex overflow-hidden flex-col space-y-8 h-screen justify-center items-center  ">
      <BackgroundCircle />

      <Image
        src={"/atefe.jpg"}
        width="200px"
        height="200px"
        className="rounded-full relative "
      />
      <span className="uppercase text-gray-500 tracking-[15px] relative">
        frontend engineer
      </span>
      <h1 className="relative font-semibold text-5xl lg:text-6xl ">
        <span>{text}</span>
        <Cursor cursorColor="#f7ab0a" />
      </h1>
      <div className=" z-30 ">
        <Link href="#about">
          <button className="heroBtn">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroBtn">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroBtn">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroBtn">Projects</button>
        </Link>
      </div>
    </div>
  );
}
