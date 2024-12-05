import { IoIosReturnRight } from "react-icons/io";
import { motion } from "framer-motion";

const Button = ({ name }) => {
    return (
        <motion.div
            className="w-40 px-3 py-2 flex items-center justify-between bg-zinc-100 text-black rounded-full font-satoshi_variable"
            whileHover={{
                rotateX: 360,
                transition: { duration: 0.8, ease: "easeInOut" },
            }}
        >
            <motion.span
                initial={{ y: 0 }}
                whileHover={{
                    y: 20, // Fall back
                    opacity: 0,
                    transition: { duration: 0.3 },
                }}
                animate={{
                    y: 0, // Moves back
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.5 },
                }}
                className="text-sm"
            >
                {name}
            </motion.span>
            <motion.div
                initial={{ y: 0 }}
                whileHover={{
                    y: 20,
                    opacity: 0,
                    transition: { duration: 0.3 },
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.5 },
                }}
            >
                <IoIosReturnRight />
            </motion.div>
        </motion.div>
    );
};

export default Button;
