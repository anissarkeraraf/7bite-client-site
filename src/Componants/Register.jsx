import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../firebase.config';

const Register = () => {

    const googleProvider = new GoogleAuthProvider();
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        if (password.length < 6) {
            toast.error('Password should be at least 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upercase character')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should have at least one lowercase character')
            return;
        }
        else {
            toast.success('User register successfully');
        }
        createUser(email, password)

            .then(() => {

                reset();
                navigate('/');

            })

            .catch(error => {
                console.log(error)
                toast.error('Register failed')
            })
    }

    const handleGoogleSign = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                navigate('/');
                toast.success("Login successful");
            })
            .catch(error => {
                console.error(error); // Log the error for debugging
                toast.error("Login failed");
            })
    }


    return (
        <div className='mt-32'>
            <div className="hero min-h-screen">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-center">Please Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> PhotoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required
                                {...register("photoURL", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <div className="flex relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                    {...register("password", { required: true })}
                                />
                                <span className="absolute left-72 top-4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
                        <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                            or login with Social Media
                        </span>
                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                    </div>
                    <div className="flex items-center mt-6 -mx-2">
                        <button onClick={() => handleGoogleSign()} type="button" className="flex items-center justify-center w-10/12 px-6 py-2 mx-auto text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                            <FaGoogle />
                            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                        </button>
                    </div>

                    <p className="text-center">Already have an account? Please <Link to='/login' className="btn btn-link">Login</Link></p>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;