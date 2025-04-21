import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FaTachometerAlt, FaShoppingCart, FaBox, FaUsers, FaStore, FaMoneyBillWave, FaChartBar, FaBullhorn, FaCog, FaUser, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { CiGrid42 } from "react-icons/ci";
import { NavLink } from "react-router";
import { IoBagHandleOutline } from "react-icons/io5";
import logo from "../assets/logounitax.png"



const DashboardSideBar = () => {
    const [active, setActive] = useState("Dashboard");
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const DashboardListItem = ({text})=> <button className="w-full text-left px-4 py-2 rounded-md border-white">{text}</button>



    const toggleSubMenu = (name) => {
        setOpenSubMenu(openSubMenu === name ? null : name);
    };
    return (
        <div className={`md:w-[250px]  h-screen flex flex-col gap-2 overflow-y-scroll border-r  overflow-x-hidden sticky top-0 `}>

            <div>
                <div className="flex items-center justify-center pt-10">
                    <Link to="/" className="cursor-pointer"> <Link to='/'>
                                            <img
                                              src={logo}
                                              alt="Logo"
                                              className="w-[200px] bg-indigo-800 rounded-lg max-sm:w-[200px]"
                                            />
                                          </Link></Link>

                </div>

                <div>

                   <>

                            <ul className=" my-10">
                               
                                <NavLink to="/dashboard/superAdmin" className="flex items-center gap-3 pl-4 py-2 w-"><CiGrid42 className="text-xl font-semibold" /> Dashboard</NavLink>

                                <NavLink to="/dashboard/allPackages" className=" py-2 rounded-lg" ><DashboardListItem text={"All Products"}></DashboardListItem></NavLink>
                                <NavLink className=" py-2 rounded-lg" to="/dashboard/addPackages"><DashboardListItem text={"Add Products"}></DashboardListItem></NavLink>
                                {/* <NavLink className=" py-2 rounded-lg" to="/dashboard/allBookings"><DashboardListItem text={"All Bookings"}></DashboardListItem></NavLink> */}



                            </ul>

                        </>
                    

                 













                </div>









            </div>

        </div>
    );
};

export default DashboardSideBar;