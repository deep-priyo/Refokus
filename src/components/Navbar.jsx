

const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-6 font-satoshi_variable flex items-center">
            <img src="https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bddf6c495c16eebdb45576_Refokus-w.svg" alt=""/>
            <div className="links flex gap-14 ml-20">
                {["Home","Work","Culture"].map((elem,index)=><a key={index} className="flex items-center text-sm gap-1" href='#'>
                    {index === 1 && <span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500  opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>}

                    {elem}</a>)}
            </div>
        </div>
    )
}
export default Navbar
