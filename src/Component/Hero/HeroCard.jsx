import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const HeroCard = ({ petdatas }) => {
    const { serviceName, image, price, description, rating, serviceId } = petdatas
    // console.log(image)
    return (
        <div className="hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 h-full card rounded-xl w-96 max-lg:w-full max-md:w-96 max-sm:w-72 shadow-xl bg-white text-black">
            <img className='h-[220px] rounded-t-xl' src={image} alt="dd" />
            <div className="card-body">
                <h2 className="card-title text-xl">{serviceName}</h2>
                <p>{description}</p>
                <div className="flex justify-between items-center mt-4">
                    <h1 className='flex items-center gap-2 font-semibold text-[16px]'>Rating: <FaStar className='text-orange-400'></FaStar>{rating}</h1>
                    <h1 className='font-semibold text-[16px]'>Price: {price}K</h1>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/services/${serviceId}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;