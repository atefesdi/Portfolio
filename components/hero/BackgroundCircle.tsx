import React from 'react'
import {motion} from "framer-motion"



type Props = {}

function BackgroundCircle({}: Props) {
  return (
    <motion.div className=' relative flex items-center justify-center'
    initial={{
        opacity:0
    }}
    animate={{
        opacity:[0.1 , 0.2, 0.6 , 0.8, 0.2 , 0.3],
        scale:[1, 2, 2 ,3,1],
        borderRadius:["20%","20%", "50%", "80%", "80%" ]
    }}
    transition={{
        duration:2
    }}

    >
        <div className='absolute border rounded-full h-[100px] w-[100px] animate-ping border-[#333333] mt-52 ' />
        <div className='absolute border rounded-full h-[200px] w-[200px]  border-[#333333] mt-52' />
        <div className='absolute border rounded-full h-[400px] w-[400px]  border-[#333333] mt-52' />
        <div className='absolute border rounded-full h-[500px] w-[500px] animate-pulse border-[#f7ab0a] mt-52' />
        <div className='absolute border rounded-full h-[650px] w-[650px] animate-pulse  border-[#333333] mt-52 ' />
    </motion.div>
  )
}

export default BackgroundCircle