import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width, start, para,hover}) => {
    return (
        <div className={`${width} ${hover} relative bg-zinc-800 p-5 rounded-xl`}>
            <div className='w-full'>
                <div className='w-full text-sm text-zinc-500 flex justify-between items-center'>
                    {para && <h3 >Up Next: Culture</h3>}
                    {!para && <h3>Get in Touch</h3>}
                    <IoIosArrowRoundForward/>
                </div>
                {para && <h1 className='text-3xl font-medium mt-5'>Who we are</h1>}
                {!para && <h1 className='text-3xl font-medium mt-5'>Let's get to it, together.</h1>}
            </div>
            <div className='downelem w-full mt-60 '>
                {start && (<><h1 className="text-6xl font-semibold tracking-tight leading-none">Start a Project</h1>
                    <button className="rounded-full py-2 px-3 border-[1px] border-zinc-50 mt-5 ">Contact Us</button></>)}


                {para && (
                    <p className=" absolute bottom-5 text-sm text-zinc-700 font-medium ">Explore what drives our team</p>)}

            </div>
        </div>
    )
}
export default Card
