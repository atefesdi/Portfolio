import React, { useEffect, useRef, useState } from "react";
import { project } from "../../data/projectData";
import ExperienceCard from "./ExperienceCard";

type Props = {};
let projectCount = 4;

function Experience({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [itemsHeight, setItemsHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [lastScroll, setlastscroll] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("");
  const [topOfElement, setTopOfElement] = useState(0);
  const [translate, setTranslate] = useState("0px");

  useEffect(() => {
    const element = document.getElementById("slider");
    setItemsHeight(ref?.current.scrollWidth);
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
    console.log(element?.scrollWidth)

    const getSize = () => {
      if (ref.current) {
        setItemsHeight(ref.current?.scrollWidth);
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);

        console.log(itemsHeight)
      }
    };
    window.addEventListener("resize", getSize);
    return () => window.removeEventListener("resize", getSize);
  }, [itemsHeight]);

  useEffect(() => {
    const scrollHandler = () => {
      const element = document.getElementById("slider");
      const distanceYtop = element?.getBoundingClientRect().top;
      let currentScroll = window.scrollY;
      
      if (currentScroll > 0 && currentScroll < 30 && distanceYtop) {
        setTopOfElement(distanceYtop);
      }
      
      if (
        window.scrollY > topOfElement &&
        window.scrollY < itemsHeight + topOfElement - windowHeight &&
        element
        ) {
            console.log("first")
        setTranslate(`translate(-${window.scrollY - (topOfElement)}px,${0}px)`);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [
    lastScroll,
    setlastscroll,
    scrollDirection,
    setScrollDirection,
    setTopOfElement,
    topOfElement,
    translate,
    setTranslate
  ]);

  const stl = {
    height: `${itemsHeight}px`,
  };
  const styletransform ={
    transform :translate
  }


  return (
    <div
      style={stl}
      className=" h-screen  bg-[rgb(36,36,36)]  relative  max-w-full "
    >
      <div className="sticky overflow-auto top-10 flex flex-col  w-full items-center justify-center ">
        <h1 className=" uppercase tracking-[10px]  font-semibold text-xl md:text-3xl text-gray-500">
          experience
        </h1>

        <div
          ref={ref}
          id="slider"
          className="sticky flex flex-row top-40  h-screen w-full  scrollbar-hide "
          style={styletransform}
        >
          {project.map((item, index) => (
            <ExperienceCard
              key={index}
              src={item.src}
              explain={item.explain}
              gitHub={item.gitHub}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
