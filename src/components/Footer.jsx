
const Footer = () => {
    return (
        <div className="max-w-[90%] lg:max-w-6xl mt-10 mx-auto">
            <div className="border-b border-dotted border-gray-500 text-center pb-6">
                <h1 className="font-bold text-3xl">Gadget Heaven</h1>
                <p className="mt-2 text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <div className="sm:flex justify-around items-start pt-6 pb-10">
                <div>
                    <h3 className="font-bold text-2xl">Services</h3>
                    <div className="flex flex-col mt-3 text-gray-500 font-semibold">
                        <a href="">Product Support</a>
                        <a href="">Order Tracking</a>
                        <a href="">Shipping & Delivery</a>
                        <a href="">Returns</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-2xl">Company</h3>
                    <div className="flex flex-col mt-3 text-gray-500 font-semibold">
                        <a href="">About Us</a>
                        <a href="">Careers</a>
                        <a href="">Contact</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-2xl">Legal</h3>
                    <div className="flex flex-col mt-3 text-gray-500 font-semibold">
                        <a href="">Terms of Service</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
