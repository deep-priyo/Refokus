import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width, start, para,hover}) => {
    return (
        <div className={`${width} ${hover} relative bg-zinc-800 p-5 rounded-xl`}>
            <div className='w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h3>one heading</h3>
                    <IoIosArrowRoundForward/>
                </div>
                <h1 className='text-3xl font-medium mt-5'>whateva heading</h1>
            </div>
            <div className='downelem w-full mt-60 '>
                {start && (<><h1 className="text-6xl font-semibold tracking-tight leading-none">Start a Project</h1>
                    <button className="rounded-full py-2 px-3 border-[1px] border-zinc-50 mt-5 ">Contact Us</button></>)}


                {para && (
                    <p className=" absolute bottom-5 text-sm text-zinc-700 font-medium ">lorem lorem lkorem fjdshf
                        hdsjfh hdfj dsf</p>)}

            </div>
        </div>
    )
}
export default Card
