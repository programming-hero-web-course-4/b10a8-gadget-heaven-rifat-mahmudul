import Image from "../assets/banner.jpg"

const BannerImage = () => {
    return (
        <div className="max-w-[80%] xl:max-w-[1000px] mx-auto h-[400px] -mt-32">
            <img className="h-full w-full rounded-xl"  src={Image} alt="" />
        </div>
    )
}

export default BannerImage
