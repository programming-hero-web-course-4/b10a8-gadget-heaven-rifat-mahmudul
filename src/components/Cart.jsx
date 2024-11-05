import { useContext, useEffect, useState } from "react"
import { showContext } from "../Provider/ShowProvider"
import ShowCart from "./ShowCart";
import { useNavigate } from "react-router-dom";
import modalImage from '../assets/Group.png'

const Cart = () => {

    const {cart, setCart} = useContext(showContext);
    const totalCost = cart.reduce((total, product) => total + product.price, 0);
    const [sortedCart, setSortedCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setSortedCart(cart)
    }, [cart]);

    const handleSortByPrice = () => {
        const sortedProducts = [...sortedCart].sort((a, b) => b.price - a.price);
        setSortedCart(sortedProducts);
    };

    const handlePurchase = () => {
        setIsModalOpen(true);
        setCart([]);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate("/");
    };

    return (
        <>
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto sm:flex items-center justify-between mt-8 mb-10">
                    <div>
                        <h1 className="font-bold text-2xl">Cart</h1>
                    </div>

                    <div className="flex gap-8 items-center">
                        <h1 className="font-bold text-2xl">Total Cost : {totalCost}</h1>
                        <div className="flex gap-8">
                            <button 
                            onClick={handleSortByPrice} 
                            className="py-2 px-5 border border-purple-600 text-center font-bold rounded-3xl text-purple-600">
                                Sort by Price
                            </button>

                            <button
                            onClick={handlePurchase}
                            disabled={totalCost === 0}
                            className={`py-2 px-5 text-center font-bold rounded-3xl ${
                                totalCost === 0 ? "bg-gray-400 text-white" : "bg-purple-600 text-white"
                            }`}
                        >
                            Purchase
                        </button>
                        </div>
                    </div>
            </div>
            <div>
                {sortedCart.map(product => (
                    <ShowCart key={product.product_id} product={product} />
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-md text-center">
                        <img className="mx-auto mb-4" src={modalImage} alt="" />
                        <h2 className="text-2xl font-bold mb-4">Payment Successfully 🥰</h2>
                        <p>Thanks for purchasing.</p>
                        <button
                            onClick={closeModal}
                            className="mt-6 py-2 px-5 bg-purple-600 text-white font-bold rounded-3xl"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}

export default Cart
