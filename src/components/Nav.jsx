import { NavLink } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Nav = () => {
    return (
        <header className="max-w-[90%] xl:max-w-[1200px] mx-auto bg-purple-600 mt-6">
            <div className="flex justify-between items-center text-white py-5 border border-red-500">
                <div>
                    <h1 className="text-3xl font-bold flex gap-0"><span>Gadget</span> <span className="text-black">Heaven</span></h1>
                </div>

                <div>
                    <nav>
                        <ul className="flex gap-8 font-semibold text-xl">
                            <NavLink>Home</NavLink>
                            <NavLink>Statistics</NavLink>
                            <NavLink>Dashboard</NavLink>
                        </ul>
                    </nav>
                </div>

                <div className="flex gap-5 text-black font-bold">
                    <div className="bg-white h-8 w-8 flex items-center justify-center rounded-full">
                        <div>
                            <IoCartOutline className="mx-auto text-xl" />
                        </div>
                    </div>

                    <div className="bg-white h-8 w-8 flex items-center justify-center rounded-full">
                        <div>
                            <MdOutlineFavoriteBorder className="mx-auto text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav
