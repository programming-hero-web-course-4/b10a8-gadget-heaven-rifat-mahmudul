/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import toast from "react-hot-toast";

export const showContext = createContext();

const ShowProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const handleCart = (product) => {

        const isExist = cart.find(p => p.product_id == product.product_id);

        if(isExist){
            toast.error('The item Already Added on Cart')
        }

        else{
            setCart([...cart, product]);
        toast.success('This item successfully added on Cart');
        }
    }

    const handleWishlist = (product) => {

        const isExist = wishlist.find(p => p.product_id == product.product_id);
        const isExist2 = cart.find(p => p.product_id == product.product_id);

        if(isExist){
            toast.error('The item Already Add Wishlist')
        }

        else if(isExist2){
            toast.error('The item Already Added on Cart')
        }

        else{
            setWishlist([...wishlist, product]);
            toast.success('This item successfully added on wishlist');
        }
    }

    const show = {
        handleCart,
        handleWishlist,
        cart,
        wishlist
    }

    return (
        <showContext.Provider value={show} >
            {children}
        </showContext.Provider>
    )
}

export default ShowProvider
