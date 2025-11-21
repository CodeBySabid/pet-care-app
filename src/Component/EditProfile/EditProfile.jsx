import { updateProfile } from 'firebase/auth';
import React, { use } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthContext';
import { useNavigate } from 'react-router';

const EditProfile = () => {
    const { user } = use(AuthContext)
    const navigate = useNavigate();
    const handleUpdateProfile = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        if (!name) {
            toast.error("Please fill in the email field!");
            return;
        }
        if (!photoURL) {
            toast.error("Please fill in the photoURL field!");
            return;
        }

        try {
            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            });
            navigate("/myprofile");
            window.location.reload();
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen px-1">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-4xl font-semibold'>Update Profile</h1>
                    <form onSubmit={handleUpdateProfile} className="fieldset">
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input"
                            placeholder="Email"
                            defaultValue={user.email}
                        />
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name='name'
                            className="input"
                            placeholder="Name"
                            defaultValue={user.displayName}
                            />
                        <label className="label">Photo-URL</label>
                        <input type="url" name='photoURL' className="input" placeholder="Photo-URL" />
                        <button className="btn w-[96%] btn-neutral mt-4">Update Profile</button>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default EditProfile;