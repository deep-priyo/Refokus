import React from 'react'
import Button from "./Button.jsx";


const Product = ({title,description,live,casee}) => {
    return (
        <div className="w-full py-20 ">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
               <h1 className='text-6xl capitalize font-semibold'>{title}</h1>
                <div className='details w-1/3'>
                    <p className="mb-10">{description}</p>
                    <div className="flex items-center gap-5">
                        {live && (<Button name={"Live Project"}/>)}
                        {casee && (<Button name={"Case Project"}/>)}
                </div>

            </div>
        </div>
        </div>
    )
}
export default Product
