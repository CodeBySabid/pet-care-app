import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const name = event.target.email.value;
        const email = event.target.password.value;
        console.log(email, name)
    }
    return (
        <div className="hero bg-base-200 min-h-screen px-1">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-4xl font-semibold'>Login</h1>
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='text-[14px] mt-2'>Dont’t Have An Account ?<Link className='text-red-600' to={'/register'}> Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;