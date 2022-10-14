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
        opacity:[0.1 , 0.4, 0.4 , 0.8, 0.1 , 0.1],
        scale:[1, 2, 2 ,3,1],
        borderRadius:["20%","20%", "50%", "80%", "80%" ]
    }}
    transition={{
        duration:2
    }}

    >
        <div className='absolute border rounded-full h-[200px] w-[200px] animate-ping border-[#333333] mt-52 ' />
        <div className='absolute border rounded-full h-[300px] w-[300px]  border-[#333333] mt-52' />
        <div className='absolute border rounded-full h-[500px] w-[500px]  border-[#333333] mt-52' />
        <div className='absolute border rounded-full h-[650px] w-[650px]  border-[#f7ab0a] mt-52' />
        <div className='absolute border rounded-full h-[800px] w-[800px] animate-pulse  border-[#333333] mt-52 ' />
    </motion.div>
  )
}

export default BackgroundCircle