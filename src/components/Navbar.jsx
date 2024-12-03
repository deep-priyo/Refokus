import Button from "./Button.jsx";


const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-6  flex items-center justify-between border-b-[1px] border-zinc-700">
            <div className="nleft flex items-center">
                <img
                    src="https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bddf6c495c16eebdb45576_Refokus-w.svg"
                    alt=""/>
                <div className="links flex gap-14 ml-20">
                    {["Home", "Work", "Culture", "", "News"].map((elem, index) => <a key={index}
                                                                                     className=" flex items-center text-sm gap-1"
                                                                                     href='#'>
                        {index === 3 && <span className="w-[2px] h-7 bg-zinc-700"></span>}
                        {index === 1 && <span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500  opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>}

                        {elem}</a>)}
                </div>
            </div>
            <Button name="Get Started"/>
        </div>
    )
}
export default Navbar
