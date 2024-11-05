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

        if(isExist){
            toast.error('The item Already Add Wishlist')
        }

        else{
            setWishlist([...wishlist, product]);
            toast.success('This item successfully added on wishlist');
        }
    };

    const handleDeleteItemCart = (product) => {
        const remaining = cart.filter(p => p.product_id !== product.product_id);
        setCart(remaining);
        toast.error('This item successfully deleted');
    }
    const handleDeleteItemWishlist = (product) => {
        const remaining = wishlist.filter(p => p.product_id !== product.product_id);
        setWishlist(remaining);
        toast.error('This item successfully deleted');
    }

    const show = {
        handleCart,
        handleWishlist,
        cart,
        setCart,
        wishlist,
        setWishlist,
        handleDeleteItemCart,
        handleDeleteItemWishlist
    }

    return (
        <showContext.Provider value={show} >
            {children}
        </showContext.Provider>
    )
}

export default ShowProvider
