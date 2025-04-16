import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import logo from '../../../assets/logounitax.png'
import './Navbar.css'

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        console.log("Successfully logged out");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "yEah.Succesfull log out in your website!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  //   https://i.ibb.co.com/9kvSfvs5/026f2348866fd24aea3c1431b6cdfd36.png
  // https://i.ibb.co.com/Mxsh2N89/5db924097f1c013ef92104ac72a72928.jpg

  const links = (
    <>
      <NavLink to='/'>
        <li><a>HOME</a></li>
      </NavLink>
      <NavLink to='/about'>
        <li><a>ABOUT US</a></li>
      </NavLink>

      <NavLink to='/gallery'>
        <li><a>GALLERY</a></li>
      </NavLink>
      <NavLink to='/destination'>
        <li><a>DESTINATION</a></li>
      </NavLink>
      <NavLink to="/packages">

      <li><a>PACKAGES</a></li>
      </NavLink>
      <NavLink to='/contact'>
        <li><a>CONTACT US</a></li>
      </NavLink>
    </>
  );

  const location = useLocation();

  const bgImages = {
    '/': 'https://i.ibb.co.com/9kvSfvs5/026f2348866fd24aea3c1431b6cdfd36.png',
    '/about': 'https://i.ibb.co.com/Mxsh2N89/5db924097f1c013ef92104ac72a72928.jpg',
    '/contact': 'https://i.ibb.co.com/Mxsh2N89/5db924097f1c013ef92104ac72a72928.jpg',
    '/gallery': 'https://i.ibb.co.com/9kvSfvs5/026f2348866fd24aea3c1431b6cdfd36.png',
  };
  const textcenter = {
    '/': 'Journey to explore world',
    '/about': 'ABOUT US',
    '/contact': 'CONTACT US',
    '/gallery': 'Gallery',
    '/destination': 'destination',
    '/contact': 'contact',
  };
  const defaulttext = 'Journey to explore world'
  const defaultBg = 'https://i.ibb.co.com/9kvSfvs5/026f2348866fd24aea3c1431b6cdfd36.png';
  const currentBg = bgImages[location.pathname] || defaultBg;
  const currenttext = textcenter[location.pathname] || defaulttext;

  return (
    <div className='relative'>

    <div style={{ backgroundImage: `url(${currentBg})` }} className="flex start top-0 z-20  shadow-sm h-[90vh] bg-cover w-full">
      <div className="absolute inset-0 h-[90vh]  bg-black bg-opacity-60"></div>
      <div className="flex items-center start top-0 z-20  shadow-sm h-[100px] bg-cover w-[90%] mx-auto ">
        <div className="navbar-start flex items-center text-white">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col font-bold max-sm:text-xs max-sm:flex-col md:text-[15px] md:flex md:text-black max-sm:text-black space-y-2 "
            >
              {links}
            </ul>
          </div>
          <Link to='/'>
            <img
              src={logo}
              alt="Logo"
              className="w-[200px] max-sm:w-[200px]"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold max-sm:text-xs max-sm:flex-col md:text-[15px] md:flex md:text-white max-sm:text-black ">{links}</ul>
        </div>
        <div className="navbar-end flex ">
          {/* If the user is logged in, display their info */}
          {user ? (
            <>
              {/* Display user's profile image and name */}
              <div className="flex space-x-2 mr-4">
                <img
                  src={user?.photoURL || "https://via.placeholder.com/40"} // fallback if no photoURL
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-black md:text-lg max-sm:text-xs font-medium">{user?.displayName}</span>
              </div>
              <button onClick={handleLogOut} className="btn text-white bg-stone-500">Log Out</button>
            </>
          ) : (
            <Link to="login">
              <button className=" bg-orange-600 text-white py-2 px-3 rounded-lg">Sign In</button>
            </Link>
          )}
        </div>


      </div>
      

    </div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-5xl uppercase w-[300px] leading-relaxed tracking-wide font-semibold">
  {currenttext}
</div>

    </div>
  );
};

export default Navbar;
