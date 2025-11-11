import React from 'react';

const BookNow = () => {
    const handleBooknow = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen px-1">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-4xl font-semibold'>Book Now</h1>
                    <form onSubmit={handleBooknow} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNow;