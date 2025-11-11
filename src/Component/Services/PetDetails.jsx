import React from 'react';
import AllData from '../Hooks/AllData';
import { Link, useParams } from 'react-router';

const PetDetails = () => {
    const { serviceId } = useParams();
    const { petdata } = AllData()
    console.log(petdata)
    const PateData = petdata.find(p => String(p.serviceId) === serviceId)
    const { serviceName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category } = PateData || {}
    return (
        <div className='w-full flex justify-center my-10 max-sm:my-5 px-5'>
            <div className='w-[1500px]'>
                <div className='flex w-full gap-7 max-sm:gap-2.5 max-md:flex-col max-md:items-center'>
                    <img className='max-lg:w-[40.5vw] rounded-xl w-[400px] h-[300px] max-lg:h-[35vw] max-md:w-[90%] max-md:h-[350px] max-sm:h-[49vw] max-sm:w-screen' src={image} alt="" />
                    <div className='w-full flex flex-col items-center gap-3 max-lg:gap-[1vw]'>
                        <h1 className='font-semibold text-3xl max-xl:text-[3vw] max-md:text-[4vw] max-sm:text-[5vw]'>{serviceName}</h1>
                        <div className='flex flex-col max-md:mb-[1vw] items-center max-lg:flex-col justify-between '>
                            <h1 className='text-2xl font-semibold max-xl:text-[2vw] max-md:text-[3.5vw]'>providerName : {providerName}</h1>
                            <p className='text-2xl max-md:text-[3.4vw] font-semibold max-xl:text-[2vw]'> providerEmail: <span className='hover:text-blue-700 cursor-pointer'>{providerEmail}</span></p>
                        </div>
                        <hr className='w-full text-gray-500 ' />
                        <div className='flex gap-5 max-sm:flex-col max-sm:gap-2'>
                            <div className='flex flex-col max-sm:flex-row max-sm:gap-[4vw] max-sm:justify-center items-center'>
                                <p className='font-semibold max-md:text-[2.5vw] max-sm:text-[4vw] text-xl max-lg:text-[2vw]'>Price</p>
                                <p className='font-semibold max-md:text-[2.5vw] max-sm:text-[4vw] text-xl max-lg:text-[2vw]'>{price}</p>
                            </div>
                            <div className='flex flex-col max-sm:flex-row max-sm:gap-[4vw] max-sm:justify-center items-center'>
                                <p className='font-semibold max-md:text-[2.5vw] max-sm:text-[4vw] text-xl max-lg:text-[2vw]'>Rating ⭐</p>
                                <p className='font-semibold max-md:text-[2.5vw] max-sm:text-[4vw] text-xl max-lg:text-[2vw]'>{rating}</p>
                            </div>
                            <div className='flex flex-col max-sm:flex-row max-sm:gap-[4vw] max-sm:justify-center items-center'>
                                <p className='font-semibold max-md:text-[2.5vw] max-sm:text-[4vw] text-xl max-lg:text-[2vw]'>SlotsAvailable</p>
                                <p className='font-semibold max-md:text-[2.5vw] max-sm:text-[4vw] text-xl max-lg:text-[2vw]'>{slotsAvailable}</p>
                            </div>
                            <div className='flex flex-col max-sm:flex-row max-sm:gap-[4vw] max-sm:justify-center items-center'>
                                <p className='font-semibold max-md:text-[2.5vw] max-sm:text-[4vw] text-xl max-lg:text-[2vw]'>Category</p>
                                <p className='font-semibold max-md:text-[2.5vw] max-sm:text-[4vw] text-xl max-lg:text-[2vw]'>{category}</p>
                            </div>
                        </div>
                        <p className='max-md:text-[2.7vw] text-center text-lg max-lg:text-[2vw] text-gray-600'>{description}</p>
                        <div className='flex justify-center w-full mt-2'>
                            <Link to={'/booknow'} className='btn border-none max-sm:w-[30vw] max-sm:text-[3.5vw] max-sm:h-[8vw] bg-green-500 text-white hover:text-gray-200 hover:bg-green-600 w-[20vw]'>Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;
