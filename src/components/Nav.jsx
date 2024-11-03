import { NavLink, useLocation } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

const Nav = () => {

    const location = useLocation();

    return (
        <div className={`pt-2 px-2 ${location.pathname == '/' ? `border-t border-r border-l border-gray-300 rounded-t-xl rounded-r-xl` : ''} max-w-[90%] xl:max-w-[1200px] mx-auto mt-6`}>
            <header className="">
                    <div className={`flex ${location.pathname == '/' ? `bg-purple-600 rounded-t-xl` : `bg-white text-black`}  justify-between items-center text-white pt-5 sm:px-10 px-4 rounded-t-xl`}>
                        <div>
                            <h1 className="sm:text-3xl text-xl font-bold flex gap-0"><span>Gadget</span> <span className="text-black">Heaven</span></h1>
                        </div>

                        <div className="hidden lg:block">
                            <nav>
                                <ul className="flex gap-8 font-semibold text-xl">
                                    <NavLink className={({isActive}) => `${isActive ? 'text-black' : ''}`} to='/'>Home</NavLink>
                                    <NavLink className={({isActive}) => `${isActive ? 'text-purple-600' : ''}`} to='/statistics'>Statistics</NavLink>
                                    <NavLink className={({isActive}) => `${isActive ? 'text-purple-600' : ''}`} to='/dashboard'>Dashboard</NavLink>
                                </ul>
                            </nav>
                        </div>

                        <div className="gap-5 text-black font-bold hidden lg:flex">
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

                        <div className="sm:text-3xl text-xl font-bold lg:hidden">
                            <RiMenu3Fill />
                        </div>
                    </div>
                </header>
        </div>
    )
}

export default Nav
