import React from "react";
import { PhoneIcon , MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
  name: string,
  message : string,
};


type Props = {};

function Contact({}: Props) {

  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);



  return (
    <div className="h-screen relative flex flex-col justify-center items-center ">
      <h1 className="absolute md:top-28 top-20 uppercase tracking-[5px] font-semibold text-xl md:text-3xl text-gray-500 ">
        contact me
      </h1>
      <div className=" displayIcon space-x-2 mb-5">
        <MapPinIcon className="md:h-7 md:w-7 h-5 w-5  text-[#f7ab0a] animate-pulse "/>
        <p className="md:text-2xl text-sm">Tehran, St.Sattar khan</p>
      </div>

      <div className=" displayIcon space-x-2 mb-5">
      <PhoneIcon className="md:h-7 md:w-7 h-5 w-5 text-[#f7ab0a] animate-pulse "/>
      <p className="md:text-2xl text-sm">09375297004</p>
      </div>

      
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-[650px] w-[350px] flex flex-col mt-10 gap-3">
        <div className="flex flex-col md:flex-row w-full gap-3">
          <input {...register("name")}  type="text" placeholder="Name" className="contactInput h-[40px] w-full" />
          <input {...register("email")} type="email" placeholder="Email" className="contactInput  h-[40px] w-full " />
        </div>
        <textarea
        {...register("message")}
          placeholder="message"
          className="contactInput w-full md:h-[200px] h-150"
        />
        <button className="w-full h-[60px] bg-[#f7ab0a]/70 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
