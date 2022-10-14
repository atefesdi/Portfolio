import React from "react";
import { PhoneIcon , MapPinIcon } from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center ">
      <h1 className=" absolute top-28 uppercase tracking-[20px] font-semibold text-3xl text-gray-500 ">
        contact me
      </h1>
      <div className=" displayIcon space-x-2 mb-5">
      <PhoneIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse "/>
      <p>09375297004</p>
      </div>

      <div className=" displayIcon space-x-2 mb-5">
        <MapPinIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse "/>
        <p>Tehran, St.Sattar khan</p>
      </div>

      <form className="w-[650px] flex flex-col  gap-3">
        <div className="flex flex-row w-full gap-3">
          <input type="text" placeholder="Name" className="contactInput " />
          <input type="email" placeholder="Email" className="contactInput " />
        </div>
        <textarea
          placeholder="message"
          className="contactInput w-full h-[200px]"
        />
        <button className="w-full h-[60px] bg-[#f7ab0a]/70 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
