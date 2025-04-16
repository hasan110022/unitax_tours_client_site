import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Gallery from "../Pages/Gallery/Gallery";
import AddTour from "../Components/AddOption/AddTour";
import PackeagesDetails from "../Components/TrendingPackeages/PackeagesDetails";
import TourPlan from "../Components/TrendingPackeages/TourPlan";
import ContactUs from "../Pages/ContactUs/ContactUs";
import CardDetails from "../Components/CheckoutPackage/CardDetails";
import DetailsTwo from "../Components/CheckoutPackage/DetailsTwo";
import DetailsThree from "../Components/CheckoutPackage/DetailsThree";
import Destination from "../Components/Destination/Destination";
import DestinationForm from "../Components/DestinationForm/DestinationForm";
import NavDestinate from "../Pages/NavDestinate/NavDestinate";
import PrivateRoutes from "./PrivateRoutes";
import Pakages from "../Pages/Packages/Pakages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader:()=>fetch('http://localhost:5000/tour')
            },

            {
                path:'/destination',
                element:
                // <PrivateRoutes>
                <NavDestinate></NavDestinate>,
                // </PrivateRoutes>,
                loader:()=>fetch('http://localhost:3000/destination')
               

            },
            {
                path:'/about',
                element:
                // <PrivateRoutes>
                    <About></About>
                    // </PrivateRoutes>
                    ,
            },
            {
                path:'/cardone',
                element:
                // <PrivateRoutes>
                    <CardDetails></CardDetails>
                    // {/* </PrivateRoutes> */}
            },
            {
                path:'/cardtwo',
                element:
                // <PrivateRoutes>
                    <DetailsTwo></DetailsTwo>
                    // {/* </PrivateRoutes> */}
            },
            {
                path:'/cardthree',
                element:
                // <PrivateRoutes>
                    <DetailsThree></DetailsThree>
                    // </PrivateRoutes>
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/packages',
                element:<Pakages></Pakages>
            },
            {
                path:'/gallery',
                element:
                // <PrivateRoutes>
                    <Gallery></Gallery>
                // </PrivateRoutes>
            },
            {
                path:'/tour/:id',
                element:
                // <PrivateRoutes>
                    <PackeagesDetails></PackeagesDetails>
                    // </PrivateRoutes>
                    ,
                loader:({params})=>fetch(`http://localhost:3000/tour/${params.id}`)
            },
            {
                path:'tab',
                element:<TourPlan></TourPlan>,
              
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addTour',
                element:<AddTour></AddTour>
            },
            
        ]
    },
]);