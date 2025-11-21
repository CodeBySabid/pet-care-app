import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Link } from 'react-router';

const MyProfile = () => {
    const { user } = use(AuthContext);
    return (
        <div data-aos="fade-down" className="w-full my-5 max-sm:w-[98%]  max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg bg-base-200 relative">
            <div className="h-28 border-b-2 border-b-slate-700 bg-[#352f4b]"></div>
            <div className="w-full bg-transparent p-4 absolute left-7 top-27 max-sm:top-23 flex items-center justify-end ">
                <div className="relative w-full flex items-center gap-3">
                    <div className="absolute left-0 avatar">
                        <div className="w-24 rounded-full border-4 border-black ">
                            <img className='z-20' src={user.photoURL} alt="User Avatar" />
                        </div>
                    </div>
                </div>
                <Link to={'/editprofile'} className="absolute max-sm:relative max-sm:left-[-7%] max-sm:top-8 top-10 left-[70%] btn btn-primary btn-sm">
                    Edit User Profile
                </Link>
            </div>
            <div className='rounded-b-2xl h-auto pb-14 max-sm:pt-24 px-12 pt-16 text-white bg-black flex flex-col gap-2'>
                <div className='text-xl'>
                    <h1>Name</h1>
                    <h1>{user.displayName}</h1>
                </div>
                <hr className='text-gray-600' />
                <div className='text-xl'>
                    <h1>Email</h1>
                    <h1>{user.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;