import React, {useState} from 'react'
import Product from "./Product.jsx";
import {motion} from "motion/react";
import arqitel from "../assets/Videos/arqitel.mp4";
import ttr from "../assets/Videos/ttr.mp4";
import yir from "../assets/Videos/yir.mp4";
import yahoo from "../assets/Videos/yahoo.mp4";
import rainfall from "../assets/Videos/rainfall.mp4";

const Products = () => {
    const products=[
        {
            title: "Arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: false,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
        {
            title: "Rainfall",
            description:
                "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            case: true,
        },
    ]
    const [position, setPosition] = useState(23);
    const mover= (val)=>{
        setPosition(val*23)
    }
    return (
        <div className="mt-32 relative">
            {products.map((val, i) => (
                <Product key={i} title={val.title} description={val.description} live={val.live} casee={val.case} mover={mover} count={i}/>
            ))}
            <div className='absolute top-0 w-full h-full  pointer-events-none'>
                <motion.div initial={{y: position, x: "-50%"}}
                            animate={{y: position + `rem`, x: "-50%"}}
                            transition={{ease: [0.76, 0, 0.24, 1] , duration: 0.5}}
                            className='window w-[32rem] h-[23rem]  left-[44%] absolute   overflow-hidden'>
                    <motion.div animate={{y: -position + `rem`}}
                                transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
                                className='w-full h-full '>
                        <video
                            className="absolute object-cover rounded-3xl"
                            autoPlay
                            muted
                            loop
                            src={arqitel}
                        ></video>
                    </motion.div>
                    <motion.div animate={{y: -position + `rem`}}
                                transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
                                className='w-full h-full '>
                        <video
                            className="absolute object-cover rounded-3xl"
                            autoPlay
                            muted
                            loop
                            src={ttr}
                        ></video>
                    </motion.div>
                    <motion.div animate={{y: -position + `rem`}}
                                transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
                                className='w-full h-full '>
                        <video
                            className="absolute object-cover rounded-3xl"
                            autoPlay
                            muted
                            loop
                            src={yir}
                        ></video>
                    </motion.div>
                    <motion.div animate={{y: -position + `rem`}}
                                transition={{ease: [0.76, 0, 0.24, 1], duration: 0.6}}
                                className='w-full h-full '>
                        <video
                            className="absolute object-cover rounded-3xl"
                            autoPlay
                            muted
                            loop
                            src={yahoo}
                        ></video>
                    </motion.div>
                    <motion.div animate={{y: -position + `rem`}}
                                transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
                                className='w-full h-full '>
                        <video
                            className="absolute object-cover rounded-3xl"
                            autoPlay
                            muted
                            loop
                            src={rainfall}
                        ></video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
export default Products
