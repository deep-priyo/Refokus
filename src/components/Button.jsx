
import { IoIosReturnRight } from "react-icons/io";

const Button = ({name}) => {
    return (
        <div className="min-w-40 px-3 py-2 flex items-center justify-between bg-zinc-100 text-black rounded-full ">
            <span className='text-sm '>{name}</span>
            <IoIosReturnRight/>
        </div>
    )
}
export default Button
