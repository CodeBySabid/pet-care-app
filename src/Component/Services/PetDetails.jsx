import React from 'react';
import AllData from '../Hooks/AllData';
import { Link, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const PetDetails = () => {
    const { serviceId } = useParams();
    const { petdata } = AllData()
    const PateData = petdata.find(p => String(p.serviceId) === serviceId)
    const { serviceName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category } = PateData || {}
    const handleBooknow = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (!password && !email) {
            toast.error("Please fill in all field!")
        }
        else if (!email) {
            toast.error("Enter Your Email")
        }
        else if (!password) {
            toast.error("Enter Your Password")
        }
        else { 
            toast.success("Successfully Book!");
             event.target.reset();
        }
    }
    return (
        <div className='w-full flex flex-col items-center my-10 max-sm:my-5 px-5'>
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
                    </div>
                </div>
            </div>
            <div className="hero bg-white mt-6 py-20  px-1">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-center text-4xl font-semibold'>Book Now</h1>
                        <form onSubmit={handleBooknow} className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <button className="btn w-[96%] btn-neutral mt-4">Book Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default PetDetails;
