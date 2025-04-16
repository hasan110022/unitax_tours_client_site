import React, { useContext, useEffect, useState, lazy, Suspense } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { FaChevronDown, FaList, FaOutdent } from 'react-icons/fa';
import { CiBoxList, CiGrid42, CiLocationOn, CiMoneyCheck1 } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Dashboard");
  const [openSubMenu, setOpenSubMenu] = useState(null);
  // const [role, isloading] = useRole()


  const toggleSubMenu = (name) => {
      setOpenSubMenu(openSubMenu === name ? null : name);
  };
  const DashboardListItem = ({text})=> <button className="w-full text-left px-4 py-2 rounded-md border-white">{text}</button>







  return (
    <div className="bg-white  py-4 ">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
         
          
       
          {/* <IoMdNotificationsOutline className='text-xl' /> */}
        </div>

        <div className="flex items-center gap-2">
          
          <div className="drawer flex md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="drawer-button"><FaList /></label>
            </div>
            <div className="drawer-side z-50">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
             
              <div  className='menu text-base-content bg-white  dark:text-white min-h-screen w-[70%] max-w-[280px] overflow-y-auto'>
              <div className="flex items-center justify-center pt-10">
                    <Link to="/" className="cursor-pointer">
                   
                    </Link>

                </div>

                    <>

                            <ul className=" my-10">
                                <NavLink to="/dashboard/superadmin" className="flex items-center gap-3 pl-4 py-2 w-"><CiGrid42 className="text-xl font-semibold" /> Dashboard</NavLink>
                      

                                {/* products */}
                                <li>
                          
                                    <button className="flex items-center justify-between w-full text-left px-4 py-2" onClick={() => toggleSubMenu("products")}>
                                        <span className="flex items-center gap-2"><IoBagHandleOutline  /> Products</span>
                                        <FaChevronDown className={`${openSubMenu === "products" ? "rotate-180" : ""} transition-transform`} />
                                    </button>
                                    {openSubMenu === "products" && (
                                        <ul className="mt-1 text-sm space-y-1 w-full px-4">
                                            <NavLink to="/dashboard/allPackages" className="block w-full  rounded-lg" ><DashboardListItem text={"All Products"}></DashboardListItem></NavLink>
                                            <NavLink className=" block w-full  rounded-lg" to="/dashboard/addPackages"><DashboardListItem text={"Add Products"}></DashboardListItem></NavLink>
                                            <NavLink className=" block w-full  rounded-lg" to="/dashboard/productsSetting"><DashboardListItem text={"Product setting"}></DashboardListItem></NavLink>
                                            
                                        </ul>
                                    )}
                                </li>



                            </ul>

                        </>
                    

                 


                    

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;