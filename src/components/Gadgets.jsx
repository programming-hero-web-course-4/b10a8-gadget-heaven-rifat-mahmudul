/* eslint-disable react/prop-types */
import AllGadgets from "./AllGadgets"
import Categories from "./Categories"

const Gadgets = () => {

    return (
        <div className="mt-16 max-w-[90%] xl:max-w-[1200px] mx-auto">
            <h1 className="text-center sm:text-4xl text-xl font-bold">Explore Cutting-Edge Gadgets</h1>

            <div className="sm:flex gap-10 mt-10">
                <Categories></Categories>
                <div>
                    <AllGadgets></AllGadgets> 
                </div>
            </div>
        </div>
    )
}

export default Gadgets
