import { Link, useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';

const Forgot = () => {
    const location = useLocation()
    const [email, setEmail] = useState("")
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setEmail(params.get("email") || "");
    },[location.search])

    const handleReset = (e) => {
        e.preventDefault();
        window.location.href = "https://mail.google.com"
    }
    return (
        <div className="hero bg-base-200 min-h-screen px-1">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-3xl font-semibold'>Forgot Password</h1>
                    <form onSubmit={handleReset} className="fieldset">
                        <label className="label">Email</label>
                        <input 
                        name='email' 
                        type="email" 
                        className="input" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                        <button className="btn btn-neutral mt-4">Reset Password</button>
                    </form>
                    <p className='text-[14px] mt-2'>Dont’t Have An Account ?<Link className='text-red-600' to={'/register'}> Sign Up</Link></p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Forgot;

