import { Link, NavLink, useLocation } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { useContext } from "react";
import { showContext } from "../Provider/ShowProvider";

const Nav = () => {

    const location = useLocation();

    const {cart, wishlist} = useContext(showContext);

    return (
        <div className={`pt-2 px-2 ${location.pathname == '/' ? `border-t border-r border-l border-gray-300 rounded-t-xl` : ''} max-w-[90%] xl:max-w-[1200px] mx-auto mt-6`}>
            <header className="">
                    <div className={`flex ${location.pathname == '/' ? `bg-purple-600 rounded-t-xl` : `bg-[#F7F7F7] text-purple-600 pb-5`}  justify-between items-center pt-5 sm:px-10 px-4 rounded-t-xl`}>
                        <div>
                            <Link to='/' className="sm:text-3xl text-xl font-bold flex gap-0"><span>Gadget</span> <span className="text-black">Heaven</span></Link>
                        </div>

                        <div className="hidden lg:block">
                            <nav>
                                <ul className="flex gap-8 font-semibold text-xl">
                                    <NavLink className={({isActive}) => `${isActive ? 'text-white bg-black py-2 px-5 rounded-lg' : 'py-2 px-5 rounded-lg'}`} to='/'>Home</NavLink>
                                    <NavLink className={({isActive}) => `${isActive ? 'text-white bg-black py-2 px-5 rounded-lg' : 'py-2 px-5 rounded-lg'}`} to='/statistics'>Statistics</NavLink>
                                    <NavLink className={({isActive}) => `${isActive ? 'text-white bg-black py-2 px-5 rounded-lg' : 'py-2 px-5 rounded-lg'}`} to='/dashboard'>Dashboard</NavLink>
                                </ul>
                            </nav>
                        </div>

                        <div className="gap-5 text-black font-bold hidden lg:flex">
                            <div className="bg-white h-8 w-8 flex items-center justify-center rounded-full relative">
                                <button>
                                    <IoCartOutline className="mx-auto text-xl" />
                                </button>

                                {
                                    cart.length > 0 && 
                                    <div className="h-5 w-5 rounded-full bg-red-500 text-white font-bold absolute -top-2 -right-2 flex items-center justify-center">
                                        <h1 className="text-center">{cart.length}</h1>
                                    </div>
                                }
                            </div>

                            <div className="bg-white h-8 w-8 flex items-center justify-center rounded-full relative">
                                <button>
                                    <MdOutlineFavoriteBorder className="mx-auto text-xl" />
                                </button>

                                {
                                    wishlist.length > 0 && 
                                    <div className="h-5 w-5 rounded-full bg-red-500 text-white font-bold absolute -top-2 -right-2 flex items-center justify-center">
                                        <h1 className="text-center">{wishlist.length}</h1>
                                    </div>
                                }
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
