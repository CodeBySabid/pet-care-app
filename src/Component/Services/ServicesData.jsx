import React from 'react';
import { Link } from 'react-router';

const ServicesData = ({ petcard }) => {
    const { serviceName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category, serviceId } = petcard;
    return (
        <div className="flex justify-center items-center p-4">
            <div className="card w-full max-w-sm bg-base-100 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 h-full">
                <figure>
                    <img
                        src={image}
                        alt={serviceName}
                        className="w-full h-56 object-cover"
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-lg font-bold text-gray-800">
                        {serviceName}
                    </h2>
                    <p className="text-sm text-gray-500">
                        by <span className="font-semibold">{providerName}</span>
                    </p>
                    <p className="text-sm text-gray-500 font-semibold">{providerEmail}
                    </p>
                    <p className="text-gray-600 text-sm">{description}</p>

                    <div className="mt-3 space-y-1 text-sm">
                        <p>
                            <span className="font-semibold">Category:</span>{" "}
                            {category}
                        </p>
                        <p>
                            <span className="font-semibold">Price:</span> ${price}
                        </p>
                        <p>
                            <span className="font-semibold">Rating:</span> ⭐ {rating}
                        </p>
                        <p>
                            <span className="font-semibold">Slots Available:</span>{" "}
                            {slotsAvailable}
                        </p>
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <Link to={`/services/${serviceId}`} className="btn btn-error text-white hover:opacity-90 transition">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesData;