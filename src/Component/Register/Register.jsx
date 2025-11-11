import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen px-1">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-4xl font-semibold text-center'>Sign Up</h1>
                    <form className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className='text-[14px] mt-2'>Already have an account <Link className='text-red-600' to={'/login'}>Login</Link></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;