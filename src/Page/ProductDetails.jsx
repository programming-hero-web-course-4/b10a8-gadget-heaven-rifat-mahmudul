import { useLoaderData, useParams } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { showContext } from "../Provider/ShowProvider";

const ProductDetails = () => {

    const {handleCart, handleWishlist, wishlist} = useContext(showContext);

    const data = useLoaderData();
    const {product_id} = useParams();
    const product = data.find(p => p.product_id == product_id);
    
    const {product_image, product_title, price, description, Specification, rating, availability} = product;

    const addCart = (product) => {
        handleCart(product);
    }

    const addWishlist = (product) => {
        handleWishlist(product);
    }

    return (
        <section className=" mt-5 pb-16 bg-[#F7F7F7]">
            <div className="bg-purple-600">
                <div className="text-white text-center pb-32 max-w-[90%] xl:max-w-[1200px] mx-auto">
                    <h1 className="sm:text-5xl text-3xl font-bold sm:max-w-[80%] mx-auto pt-5">Product Details</h1>
                    <p className="mt-6 mb-4 sm:max-w-xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>

            <div className="max-w-[80%] xl:max-w-[1000px] mx-auto sm:flex gap-10 items-center border border-gray-200 p-5 rounded-xl -mt-28 bg-white">
                <div className="bg-gray-300 p-10 rounded-lg shadow-lg">
                    <img className="mx-auto rounded-lg sm:w-[300px] sm:h-[300px]" src={product_image} alt="" />
                </div>

                <div className="mt-5 sm:mt-0">
                    <h1 className="font-bold text-2xl">{product_title}</h1>
                    <p className="mt-3 mb-3 font-semibold">price : {price} $</p>
                    {
                        availability ? <button className="px-5 py-2 rounded-3xl border border-purple-600 text-purple-600 font-bold mb-3 bg-purple-200">In Stock</button> : <button className="px-5 py-2 rounded-3xl border border-purple-600 text-purple-600 font-bold mb-3 bg-purple-200">Stock Out</button>
                    }
                    <p className="text-gray-500 mb-3">{description}</p>
                    <p className="flex flex-col"> 
                        <span className="text-xl font-bold">Specification :</span> 
                        <span className="mt-3 text-gray-500">1. {Specification[0]}</span>
                        <span className="mt-1 text-gray-500">2. {Specification[1]}</span>
                        <span className="mt-1 text-gray-500">3. {Specification[2]}</span>
                        <span className="mt-1 text-gray-500">4. {Specification[3]}</span>
                    </p>
                    <div className="mt-3">
                        <span className="font-bold">Rating :</span>
                        <div className="flex items-center gap-3">
                            <ReactStars
                            count={5}
                            value={rating}
                            size={24}
                            activeColor="#ffd700"
                            />
                            <div className="rounded-full bg-gray-300 text-center p-3">
                                {rating}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex gap-5 items-center">
                        <button
                        onClick={()=>addCart(product)}
                        className="bg-purple-600 py-2 px-5 rounded-3xl flex items-center gap-3 text-white font-bold">
                            Add To Card 
                            <IoCartOutline></IoCartOutline>
                        </button>

                        <button 
                        onClick={()=>addWishlist(product)}
                        disabled = {wishlist.length > 0}
                        className={`py-2 px-5 text-center font-bold rounded-3xl ${
                            wishlist.length > 0 ? "bg-gray-400 text-white" : "bg-purple-600 text-white"
                        }`}>
                            <div>
                                <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
