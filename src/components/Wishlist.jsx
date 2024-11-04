import { useContext } from "react"
import { showContext } from "../Provider/ShowProvider";

const Wishlist = () => {

    const {wishlist} = useContext(showContext);
    console.log(wishlist);

    return (
        <div>
            
        </div>
    )
}

export default Wishlist
