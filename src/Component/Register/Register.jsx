import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleSignup = (event) => {
        event.preventDefault();
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(firstname, lastname, email, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen px-1">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-4xl font-semibold text-center'>Sign Up</h1>
                    <form onSubmit={handleSignup} className="fieldset">
                        <label className="label">First Name</label>
                        <input type="text" name='firstname' className="input" placeholder="First Name" />
                        <label className="label">Last Name</label>
                        <input type="text" name='lastname' className="input" placeholder="Last Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Sign Up</button>
                        <p className='text-[14px] mt-2'>Already have an account <Link className='text-red-600' to={'/login'}>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;