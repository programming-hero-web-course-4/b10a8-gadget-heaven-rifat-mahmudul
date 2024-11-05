import { useContext, useEffect } from "react"
import { showContext } from "../Provider/ShowProvider";
import ShowWishlist from "./ShowWishlist";

const Wishlist = () => {

    const {wishlist, setWishlist} = useContext(showContext);

    useEffect(() => {
        setWishlist(wishlist)
    }, [wishlist]);

    return (
            <div>
                <div className="max-w-[90%] xl:max-w-[1200px] mx-auto sm:flex items-center justify-between mt-8 mb-10">
                    <div>
                        <h1 className="font-bold text-2xl">Wishlist</h1>
                    </div>
                </div>
                <div>
                    {wishlist.map(product => <ShowWishlist key={product.product_id} product={product}></ShowWishlist>)}
                </div>
            </div>
    )
}

export default Wishlist
