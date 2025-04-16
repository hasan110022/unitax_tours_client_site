import React, { useContext, useState } from 'react';
import { BiPhoneCall, BiPhotoAlbum } from 'react-icons/bi';
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import lootieData from '../../assets/Animation - 1741274998425.json'
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Register = () => {
    const axiosPublic = useAxiosPublic()

    const { createUser,signInWithGoogle } = useContext(AuthContext);



    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const mobile = form.mobile.value;
        const photo = form.photo.value;
        const userdata={email, password, mobile, photo}

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                axiosPublic.post(`/users/${data?.email}`, userdata)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Registar Succesfull.!",
                            icon: "success",
                            draggable: true
                        });
                    }

                })
               
            })
            .catch(err => {
                if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
                    Swal.fire({
                        title: "email-already-in-use , Please Login",
                        icon: "error",
                        draggable: true
                    });
                    navigate('/login')
                } else {
                    toast.error(err.message)
                }

            })
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
          console.log(result.user);
          const userData = {
            userName: result.user?.displayName,
            email: result.user?.email,
            photo: result.user?.photoURL,
            role: "customer"
        }
          Swal.fire("Login With Google success..!");
          navigate('/');
          axiosPublic.post(`/users/${res.user?.email}`, userData)
          .then(res => {
              navigate(from, { replace: true });
          })


  
        })
        .catch(error =>{
          console.log(error);
        })
      }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen p-4 space-x-auto">

            {/* Lottie Animation */}
            <div className="w-full sm:w-[500px] flex justify-center mb-8 sm:mb-0">
                <Lottie className='w-[700px]' animationData={lootieData}></Lottie>
            </div>

            {/* Email and Password Form */}
            <div className="w-full sm:w-[500px] border-2 md:p-5 max-sm:p-5 rounded-xl">
                <form onSubmit={handleRegister}>
                    {/* Email Field */}
                    <div className="mb-4 relative">
                        <label htmlFor="email" className="block text-lg font-medium">Email</label>
                        <div className="flex items-center border-2 border-gray-300 rounded-xl p-2 focus-within:ring-2 focus-within:ring-blue-500">
                            <FaEnvelope className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 bg-transparent focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    {/* Photo URL Field */}
                    <div className="mb-4 relative">
                        <label htmlFor="photo" className="block text-lg font-medium">Photo</label>
                        <div className="flex items-center border-2 border-gray-300 rounded-xl p-2 focus-within:ring-2 focus-within:ring-blue-500">
                            <BiPhotoAlbum className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                id="photo"
                                name="photo"
                                className="w-full p-2 bg-transparent focus:outline-none"
                                placeholder="Enter photo URL"
                                required
                            />
                        </div>
                    </div>

                    {/* Phone Field */}
                    <div className="mb-4 relative">
                        <label htmlFor="mobile" className="block text-lg font-medium">Mobile</label>
                        <div className="flex items-center border-2 border-gray-300 rounded-xl p-2 focus-within:ring-2 focus-within:ring-blue-500">
                            <BiPhoneCall className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                className="w-full p-2 bg-transparent focus:outline-none"
                                placeholder="Enter your mobile number"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-lg font-medium">Password</label>
                        <div className="flex items-center border-2 border-gray-300 rounded-xl p-2 focus-within:ring-2 focus-within:ring-blue-500">
                            <FaLock className="text-gray-500 mr-2" />
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full p-2 bg-transparent focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                            {/* Password visibility toggle icon */}
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="ml-2"
                            >
                                {passwordVisible ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-orange-500 font-bold text-white rounded-xl hover:bg-slate-700 md:p-3 transition-all duration-300"
                    >
                        Register
                    </button>

                    <h1 className='text-center text-xl mt-4'>Already have an account? <Link to='/login'><span className='font-mono font-bold'>Login</span></Link></h1>
                     <div onClick={handleGoogleSignIn} className="shadow-xl mx-auto flex items-center gap-3 p-5 border-2 rounded-xl hover:bg-orange-400 transition-all duration-800 hover:cursor-pointer justify-center w-full mb-4">
                              <FaGoogle size={24} />
                              <span className="font-bold text-xl">Login With Google</span>
                            </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
