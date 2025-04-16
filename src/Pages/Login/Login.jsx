import React, { useContext, useState } from 'react';
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import lottieanimate from '../../assets/Animation - 1741286731198.json';
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {

  const {signInUser,signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
      Swal.fire("Login With Google success..!");
      navigate('/');
    })
    .catch(error =>{
      console.log(error);
    })
  }
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email,password)
    .then(result =>{
      console.log("sign in",result.user);
      Swal.fire({
        title: "Hurrahhh..!!Login Succesfull.!",
        icon: "success",
        draggable: true
      });
    })
    .catch(error =>{
      console.log(error);
    })
  }

  const [passwordVisible, setPasswordVisible] = useState(false); 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col md:mx-52 md:flex-row items-center p-4 space-y-8 md:space-y-0 md:space-x-8">
      {/* Lottie Animation */}
      <div className="w-full md:w-1/2 max-w-[400px] mb-8 md:mb-0">
        <Lottie animationData={lottieanimate} />
      </div>

      {/* Form Container */}
      <div  className="w-full md:w-1/2 border-2 p-5 rounded-xl shadow-xl flex flex-col items-center">
        {/* Google Login */}
        <div onClick={handleGoogleSignIn} className="shadow-xl mx-auto flex items-center gap-3 p-5 border-2 rounded-xl hover:bg-orange-400 transition-all duration-800 hover:cursor-pointer justify-center w-full mb-4">
          <FaGoogle size={24} />
          <span className="font-bold text-xl">Login With Google</span>
        </div>

        {/* OR Divider */}
        <div className="divider w-full mb-4">OR</div>

        {/* Email and Password Form */}
        <form onSubmit={handleLogin} className="w-full">
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
            className="w-full py-2 bg-red-500 font-bold text-yellow-300 rounded-xl hover:bg-slate-700 transition-all duration-300"
          >
            Login
          </button>

          <h1 className="text-center text-xl mt-4">
            Don't have an account..? Go to <Link to='/register'>
              <span className="font-mono font-bold">Register</span>
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
