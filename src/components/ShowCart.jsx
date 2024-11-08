/* eslint-disable react/prop-types */

import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { showContext } from "../Provider/ShowProvider";

const ShowCart = ({product}) => {

    const {handleDeleteItemCart} = useContext(showContext);
    const {product_image, product_title, price, description} = product;

    return (
        <div className="pb-10">
            
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto flex items-center justify-between bg-white p-4 rounded-xl">
                <div className="sm:flex items-center gap-8 mt-5">
                    <div className="bg-gray-300 p-4 rounded-lg">
                        <img className="h-[150px] sm:w-[200px] mx-auto" src={product_image} alt="" />
                    </div>

                    <div>
                        <h1 className="font-bold text-xl">{product_title}</h1>
                        <p className="text-gray-500 mt-3 mb-3">{description}</p>
                        <p className="font-semibold">Price : {price} $</p>
                    </div>
                </div>

                <button 
                onClick={() => handleDeleteItemCart(product)}
                className="text-red-500 text-4xl">
                    <MdDeleteForever></MdDeleteForever>
                </button>
            </div>
        </div>
    )
}

export default ShowCart
