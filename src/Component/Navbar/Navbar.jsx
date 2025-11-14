import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { IoMdMenu } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";
import image from '../../assets/animal-care-pet91179.logowik.com.webp'
import { AuthContext } from '../provider/AuthContext';


const Navbar = () => {
    const { user, googleSinOut } = use(AuthContext);

    const handleSignOut = () => {
        googleSinOut()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }

    // console.log(user.displayName)
    const [open, setOpen] = useState(false);
    const links = <>
        <NavLink className={({ isActive }) =>
            isActive ? 'inline-block underline text-blue-600 bg-clip-text font-semibold' : 'text-black'
        } to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'inline-block underline text-blue-600 bg-clip-text font-semibold' : 'text-black'
        } to={'/services'}>Services</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'inline-block underline text-blue-600 bg-clip-text font-semibold' : 'text-black'
        } to={'/myprofile'}>My Profile</NavLink>
    </>
    return (
        <div>
            <nav className="bg-white w-full">
                <div className="w-full px-4 py-3 flex items-center justify-between">
                    <NavLink className="flex text-gradient-to-r from-[#632EE3] to-[#9F62F2] items-center gap-3 max-sm:gap-2 text-2xl text-black font-bold max-sm:text-xl" to={'/'}><img className='w-14 h-11 max-sm:w-9 max-sm:h-9' src={image} /><span className='inline-block bg-clip-text'>Pet Care</span></NavLink>
                    <div className="hidden lg:flex items-center space-x-6 text-black">
                        {links}
                    </div>
                    <NavLink to={'/login'} className="hidden lg:flex btn btn-semibold bg-green-400 px-9 py-6 text-xl border rounded-2xl text-gray-50 hover:text-black hover:bg-green-500"> Login </NavLink>
                    <div className="lg:hidden text-black">
                        <button onClick={() => setOpen(!open)}>
                            {open ? <HiXMark size={28} /> : <IoMdMenu size={28} />}
                        </button>
                    </div>
                </div>
                {open && (
                    <div className="lg:hidden text-black bg-white shadow-lg px-6 py-4 space-y-4 flex flex-col text-center">
                        <h1>{user && user.displayName}</h1>
                        {links}
                        <Link to={'/login'} className="w-full btn font-semibold bg-green-400 text-gray-50 hover:text-black hover:bg-green-500 border rounded-2xl py-1 px-2.5text-xl">{
                            user ? <>
                            <img src={user.photoURL} alt="" />
                            <button onClick={handleSignOut}>Log Out</button>
                            </> : <>
                            <button>Login</button>
                            </>
                        }</Link>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;