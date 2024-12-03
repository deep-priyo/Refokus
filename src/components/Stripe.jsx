

const Stripe = ({imgUrl,num}) => {
    return (
        <div className="w-[16.66%] px-4 py-5 border-t-[1.2px] border-b-[1.2px]  border-r-[1.2px] border-zinc-600 flex justify-between items-center">
            <span><img src={imgUrl} alt="stripe image"/></span>
            <span className="font-semibold">{num}</span>
        </div>
    )
}
export default Stripe
