import errorImage from '../assets/error.webp'


const Error = () => {
    return (
        <div className='flex items-center justify-center h-[100vh] max-w-[90%] xl:max-w-[1000px] mx-auto'>
            <div>
                <img className='w-full h-[500px]' src={errorImage} alt="" />
            </div>
        </div>
    )
}

export default Error
