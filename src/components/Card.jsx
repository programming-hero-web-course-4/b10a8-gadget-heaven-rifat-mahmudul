/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Card = ({item}) => {

    const {product_id, product_image, product_title, price} = item;

    return (
        <div className="p-4 border border-gray-300 shadow-lg rounded-lg hover:scale-105 duration-800">
            <img className="w-full h-[200px] rounded-lg mx-auto" src={product_image} alt="" />
            <h1 className="mt-4 mb-4 font-bold text-2xl">{product_title}</h1>
            <p className="text-gray-500 font-bold text-xl">price : {price} tk</p>
            <NavLink to={`/cardDetails/${product_id}`}>
                <button className="py-2 px-5 border border-pink-500 text-purple-600 font-bold rounded-3xl mt-4">View Details</button>
            </NavLink>
        </div>
    )
}

export default Card
