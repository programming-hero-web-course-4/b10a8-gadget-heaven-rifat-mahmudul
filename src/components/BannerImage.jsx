import bannerImage from "../assets/banner.jpg"

const BannerImage = () => {
    return (
        <div className="max-w-[80%] xl:max-w-[1000px] mx-auto h-[400px] -mt-32">
            <img className="h-full w-full"  src={bannerImage} alt="" />
        </div>
    )
}

export default BannerImage
