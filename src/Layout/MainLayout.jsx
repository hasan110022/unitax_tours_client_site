import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation()
    const path = location?.pathname == '/login' || '/register'
    
    return (
        <div className='max-w-[1900px]  mx-auto'>
            {
                path && <Navbar></Navbar>
            }
            
            <Outlet></Outlet>
            {
                path && <Footer></Footer>
            }

        </div>
    );
};

export default MainLayout;