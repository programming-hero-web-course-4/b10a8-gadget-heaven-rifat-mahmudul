import Banner from "../components/Banner"
import BannerImage from "../components/BannerImage"
import Gadgets from "../components/Gadgets"

const Home = () => {

    return (
        <div className="bg-[#F7F7F7]">
            <Banner></Banner>
            <BannerImage></BannerImage>
            <Gadgets></Gadgets>
        </div>
    )
}

export default Home
