import React from 'react';
import HeroSlider from '../Hero/HeroSlider';
import AllData from '../Hooks/AllData';
import HeroCard from '../Hero/HeroCard';
import WinterCare from '../Hero/WinterCare';

const Home = () => {
    const { petdata } = AllData();
    const Petedata = petdata.slice(0, 6)
    // const Alldata = petdata;
    return (
        <div>
            <HeroSlider></HeroSlider>
            <div className='w-full flex flex-col items-center'>
                <h1 className='font-semibold text-[3vw] max-md:text-[4vw] max-sm:text-[5vw] my-9'>Popular Winter Care Services</h1>
                <div className='grid grid-cols-3 max-xl:grid-cols-2 gap-15 max-lg:px-5 max-sm:px-1 max-lg:gap-5 max-md:grid-cols-1 px-20'>
                    {
                        Petedata.map(petdatas => (<HeroCard key={petdatas.serviceId} petdatas={petdatas}></HeroCard>))
                    }
                </div>
            </div>
            <WinterCare></WinterCare>
        </div>
    );
};

export default Home;