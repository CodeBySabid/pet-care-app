import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';

const EditProfile = () => {
    const [showPassword, setShowPassword] = useState('')
    const [email, setEmail] = useState('')
    return (
        <div className="hero bg-base-200 min-h-screen px-1">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-4xl font-semibold'>Login</h1>
                    <form className="fieldset">
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input"
                            placeholder="Email"
                            />
                        <label className="label">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="input pr-0"
                                placeholder="Password"
                            />
                            <span
                                className="absolute z-10 right-7 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaEyeSlash size={20} />
                                ) : (
                                    <FaEye size={20} />
                                )}
                            </span>
                        </div>
                        <button className="btn w-[96%] btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default EditProfile;