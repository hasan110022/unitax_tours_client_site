import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

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

  const links = (
    <div className="font-bold max-sm:text-xs max-sm:flex-col md:text-[15px] md:flex md:text-black max-sm:text-black ">
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
      <li><a>PACKAGES</a></li>
      <NavLink to='/contact'>
        <li><a>CONTACT US</a></li>
      </NavLink>
    </div>
  );

  return (
    <div className="navbar sticky top-0 z-20 bg-base-100 shadow-sm border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/'>
          <img
            src="https://i.ibb.co.com/nsXDGwRz/Screenshot-2025-03-06-161149.png"
            alt="Logo"
            className="w-[300px] max-sm:w-[200px]"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center">
        {/* If the user is logged in, display their info */}
        {user ? (
          <>
            {/* Display user's profile image and name */}
            <div className="flex items-center space-x-2 mr-4">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"} // fallback if no photoURL
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-black md:text-lg max-sm:text-xs font-medium">{user.displayName}</span>
            </div>
            <button onClick={handleLogOut} className="btn text-white bg-stone-500">Log Out</button>
          </>
        ) : (
          <Link to="login">
            <button className="btn bg-orange-500">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
