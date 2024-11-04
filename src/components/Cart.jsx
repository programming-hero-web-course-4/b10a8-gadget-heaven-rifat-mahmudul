import { useContext } from "react"
import { showContext } from "../Provider/ShowProvider"

const Cart = () => {

    const {cart} = useContext(showContext);

    console.log(cart);

    return (
        <div>
            
        </div>
    )
}

export default Cart
