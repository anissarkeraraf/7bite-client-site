import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";


const Login = () => {
    return (
        <div>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center">Do not have an account? Please <Link to='/register' className="btn btn-link">Register</Link></p>
                    <div class="flex items-center">
                        <div class="flex-1 border-t-2 border-gray-200"></div>
                        <span class="px-3 text-gray-500 bg-white">or</span>
                        <div class="flex-1 border-t-2 border-gray-200"></div>
                    </div>

                    {/* <div className="ml-8 mb-2 mt-2">
                        <button onClick={() => handleGoogleSign()} className="btn bg-[#E75854] mx-autl px-10 w-[320px]"><FaGoogle className="text-4xl"></FaGoogle></button>
                    </div> */}

                </div>

            </div>
        </div>
    );
};

export default Login;