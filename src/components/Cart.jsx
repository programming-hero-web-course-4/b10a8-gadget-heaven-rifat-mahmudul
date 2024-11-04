import { useContext } from "react"
import { showContext } from "../Provider/ShowProvider"
import ShowCart from "./ShowCart";

const Cart = () => {

    const {cart} = useContext(showContext);
    const totalCost = cart.reduce((total, product) => total + product.price, 0);

    return (
        <>
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto sm:flex items-center justify-between mt-8 mb-10">
                    <div>
                        <h1 className="font-bold text-2xl">Cart</h1>
                    </div>

                    <div className="flex gap-8 items-center">
                        <h1 className="font-bold text-2xl">Total Cost : {totalCost}</h1>
                        <div className="flex gap-8">
                            <button className="py-2 px-5 border border-purple-600 text-center font-bold rounded-3xl text-purple-600">Sort by Price</button>
                            <button className="py-2 px-5 bg-purple-600 text-white text-center font-bold rounded-3xl">Purchase</button>
                        </div>
                    </div>
            </div>
            <div>
                {cart.map(product => <ShowCart key={product.product_id} product={product}></ShowCart>)}
            </div>
        </>
    )
}

export default Cart
