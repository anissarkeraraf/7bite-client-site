import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase.config";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password');
            console.log(email, password);

            const result = await signIn(email, password);
            console.log(result.user);
            e.target.reset();
            navigate('/');
            toast.success('Login successful');

        } catch (error) {
            console.error(error);
            toast.error('Login failed');
        }
    };

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
        <div className="mt-16">
            <Helmet>
                <title>Login | 7Bite</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-center">Please Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                                    required />
                                <span className="absolute left-72 top-4" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                Sign In
                            </button>
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
                    <p className="my-4 text-xs font-light text-center text-gray-400">
                        Don't have an account? <Link to='/register' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
