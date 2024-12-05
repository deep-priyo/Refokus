
import Card from "./Card.jsx";

const Cards = () => {
    return (
        <div className="w-full">
           <div className="max-w-screen-xl mx-auto py-20 flex gap-3">
               <Card width={"basis-1/3"} start={false} para={true} />
               <Card width={"basis-2/3"} start={true} para={false} hover={"hover:bg-violet-500 transition duration-600 ease-in-out"}/>
           </div>

        </div>
    )
}
export default Cards
