
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./dashboardsidebar";
import DashboardHeader from "./dashboardheader";
import DashboardFooter from "./DashboardFooter";

// Lazy load components

const DashboardLayout = () => {

    return (
        <div className="flex">

            <div className="hidden md:flex">
                {/* Suspense with a fallback loading UI */}
                <Suspense fallback={<div>Loading Sidebar...</div>}>
                    <DashboardSideBar />
                </Suspense>
            </div>

            <div className="bg-[#FAFAFA] w-full">
                <Suspense fallback={<div>Loading Header...</div>}>
                    <DashboardHeader />
                </Suspense>

                <div className="min-h-[85vh]">
                    {/* Outlet remains as is */}
                    <Outlet />
                </div>

                <Suspense fallback={<div>Loading Footer...</div>}>
                    <DashboardFooter />
                </Suspense>
            </div>

        </div>
    );
};

export default DashboardLayout;