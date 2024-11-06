import gadgetsImage from '../assets/gadgets.webp'
import img1 from '../assets/ceo1.jpg'
import img2 from '../assets/ceo2.jpg'
import { Helmet } from 'react-helmet-async'

const AboutUs = () => {
    return (
        
            <section className="bg-[#F7F7F7] pb-16">
                <Helmet>
                <title>Gadget Heaven || About Us</title>
                </Helmet>
                <div className="bg-purple-600 pt-5 pb-40">
                    <div className="text-white text-center">
                        <h1 className="sm:text-5xl text-3xl font-bold sm:max-w-[80%] mx-auto">About Us</h1>
                        <p className="mt-6 mb-4 sm:max-w-xl mx-auto">Welcome to GadgetHeaven, your one-stop destination for the latest tech gadgets and electronics.
                        We strive to provide the best products at affordable prices with unparalleled customer service.</p>
                    </div>
                </div>

                <div className='max-w-[90%] xl:max-w-[1200px] mx-auto h-[400px] p-4 rounded-xl bg-[#ffffff63] border border-white -mt-32'>
                    <img className='w-full h-full rounded-xl' src={gadgetsImage} alt="" />
                </div>


                <div className="bg-[#F7F7F7] pt-12 max-w-[90%] xl:max-w-[1200px] mx-auto">

                    {/* Mission & Vision */}
                    <section className="bg-white p-8 shadow-md rounded-lg mb-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
                        <p className="text-gray-600 mb-4 xl:max-w-3xl mx-auto">
                        Our mission is to bring innovation to your doorstep and make high-quality technology accessible to everyone.
                        We envision a world where technology connects people, simplifies lives, and inspires creativity.
                        </p>
                    </section>

                    {/* Our Journey */}
                    <section className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Journey</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                        Founded in 2020, GadgetHeaven started as a small tech store with a big dream. Over the years, we’ve grown into
                        a well-respected gadget provider with thousands of happy customers worldwide.
                        </p>
                    </section>

                    {/* Meet the Team */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Meet the Team</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md w-72 hover:scale-105 transition">
                            <img
                            src={img1}
                            alt="John Doe"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 text-center">John Doe</h3>
                            <p className="text-gray-600 text-center">CEO & Founder</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md w-72 hover:scale-105 transition">
                            <img
                            src={img2}
                            alt="Jane Smith"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 text-center">Jane Smith</h3>
                            <p className="text-gray-600 text-center">CTO & Co-Founder</p>
                        </div>
                        {/* Add more team members as needed */}
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <section className="bg-blue-50 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Why Choose Us?</h2>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto">
                        At GadgetHeaven, we prioritize customer satisfaction, top-notch quality, and competitive prices.
                        Our commitment to innovation and excellence makes us a leader in the gadget industry.
                        </p>
                    </section>
                </div>
            </section>
            
    )
}

export default AboutUs
