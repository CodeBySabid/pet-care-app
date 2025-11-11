import React from 'react';
import AllData from '../Hooks/AllData';
import ServicesData from './ServicesData';

const Services = () => {
    const { petdata } = AllData();
    console.log(petdata);
    return (
        <div className='w-full flex justify-center'>
            <div className='grid grid-cols-3 place-content-center max-xl:grid-cols-2 max-sm:grid-cols-1'>
                {
                    petdata.map(petcard => (<ServicesData key={petcard.serviceId} petcard={petcard}></ServicesData>))
                }
            </div>
        </div>
    );
};

export default Services;