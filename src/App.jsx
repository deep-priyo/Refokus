import Navbar from "./components/Navbar.jsx";
import Work from "./components/Work.jsx";
import Stripes from "./components/Stripes.jsx";
import Products from "./components/Products.jsx";
import Marquees from "./components/Marquees.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";



const App = () => {
    return (
        <div className="w-full h-full bg-zinc-900 font-satoshi text-white">
            <Navbar />
            <Work/>
            <Stripes/>
            <Products/>
            <Marquees/>
            <Cards/>
            <Footer/>
        </div>
    )
}
export default App
