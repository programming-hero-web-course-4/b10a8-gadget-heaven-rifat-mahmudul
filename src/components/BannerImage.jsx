import Image from "../assets/banner.jpg"

const BannerImage = () => {
    return (
        <div className="max-w-[80%] xl:max-w-[1000px] mx-auto h-[400px] -mt-32 p-4 bg-[#ffffff4e] rounded-xl border-2 border-white">
            <img className="h-full w-full rounded-xl"  src={Image} alt="" />
        </div>
    )
}

export default BannerImage
