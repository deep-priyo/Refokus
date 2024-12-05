import { useState } from 'react';
import Button from "./Button.jsx";

const Product = ({ title, description, live, casee, mover, count }) => {
    const [buttonVisibility, setButtonVisibility] = useState(false);

    return (
        <div className="w-full py-20 h-[23rem]">
            <div
                className="max-w-screen-xl mx-auto flex items-center justify-between"
                onMouseEnter={() => {
                    setButtonVisibility(true);
                    mover(count);
                }}
                onMouseLeave={() => setButtonVisibility(false)}
            >
                <h1 className="text-6xl capitalize font-semibold">{title}</h1>
                <div className="details w-1/3">
                    <p className="mb-10">{description}</p>
                    <div className="flex items-center gap-5">
                        {live && (
                            <div
                                className={`transition-opacity duration-500 ${
                                    buttonVisibility ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <Button name={"Live Project"} />
                            </div>
                        )}
                        {casee && (
                            <div
                                className={`transition-opacity duration-500 ${
                                    buttonVisibility ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <Button name={"Case Project"} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
