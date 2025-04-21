import moment from 'moment/moment';
import React, { useEffect, useRef } from 'react';
import { IoBagHandleOutline, IoCalendar } from "react-icons/io5";
import { Link } from 'react-router';
import { IoIosArrowForward } from 'react-icons/io';
import { FaArrowUp } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { useState } from "react";


import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import AllPackages from './allPackages/AllPackages';
import TrendingPackeages from '../../../Components/TrendingPackeages/TrendingPackeages';


const SuperAdminDashboard = () => {
    const [selected, setSelected] = useState("Monthly");
    const formattedDate = moment().format("dddd, MMMM Do YYYY");
      const [loadingStates, setLoadingStates] = useState([1, 1, 1]);
        const [targetPercentages, setTargetPercentages] = useState([78, 55, 30]);
        const [isInView, setIsInView] = useState(false);
    
        const loadingSectionRef = useRef(null);
    
        useEffect(() => {
            // Create an intersection observer to detect when the loading section comes into view
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                },
                {
                    threshold: 0.5, // Trigger when 50% of the section is in view
                }
            );
    
            if (loadingSectionRef.current) {
                observer.observe(loadingSectionRef.current);
            }
    
            return () => {
                if (loadingSectionRef.current) {
                    observer.unobserve(loadingSectionRef.current);
                }
            };
        }, []);
    
        useEffect(() => {
            if (isInView) {
                // Animate progress for each card only when the section is in view
                const intervals = targetPercentages.map((target, index) => {
                    const interval = setInterval(() => {
                        setLoadingStates((prevStates) => {
                            const newStates = [...prevStates];
                            if (newStates[index] < target) {
                                newStates[index] += 1; // Increment percentage
                            } else {
                                clearInterval(interval);
                            }
                            return newStates;
                        });
                    }, 40);
    
                    return interval;
                });
    
                return () => intervals.forEach(clearInterval);
            }
        }, [isInView, targetPercentages]);
    
        const borderColors = ['purple', 'green', 'blue'];
    
    
        const descriptions = ['VACATIONS', 'HONEYMOON', 'MUSICAL EVENTS'];

    const axiosSecure = useAxiosSecure()
    const { data: adminState, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['adminstate'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get('/adminstate');
                return res.data;
            } catch (err) {
                console.error("Error fetching categories:", err);
                throw err;
            }
        },
    });
    // console.log(adminState)
    const { totalpendingOrders, totalOrders, totalOrderprice, totalOrderpendingPrice, totalOrdercancelledPrice, totalOrderDeviverdprice, totalOrderDeviverd, totalCanceledorders } = adminState || {}
    const data = [
        { id: 0, value: totalpendingOrders, label: 'Pending Orders' },
        { id: 1, value: totalOrderDeviverd, label: 'Delivered Orders' },
        { id: 2, value: totalCanceledorders, label: 'Canceled Orders' },
    ];

    const COLORS = ['#018635', '#56AF2C', '#D91656'];



    return (
        <div className='roboto-font w-[95%] m-auto'>
            <div className='flex justify-between font-semibold'>

                <div>
                    <p className='text-2xl font-semibold'>Overview</p>
                    <p className='flex items-center'><Link to="/">Home</Link><IoIosArrowForward /><span>Dashboard</span></p>
                </div>
                <p className='flex items-center gap-2 text-lg'><IoCalendar  />{formattedDate}</p>
            </div>

            {/* order states */}


            <div
                    ref={loadingSectionRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {loadingStates.map((state, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <div className="relative w-32 h-32 rounded-full bg-transparent flex items-center justify-center mb-4">
                                <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                                <div
                                    className="absolute inset-0 rounded-full border-8"
                                    style={{
                                        borderColor: borderColors[index],
                                        clipPath: `inset(0 ${100 - state}% 0 0)`,
                                    }}
                                ></div>
                                <p className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
                                    {state}%
                                </p>
                            </div>
                            <p className="text-center font-bold text-gray-700 text-xl">{descriptions[index]}</p> {/* Description for each card */}
                        </div>
                    ))}
                </div>

            <div>

            </div>
            <div className='md:flex py-5'>

                {/* <ResponsiveContainer width={"100%"} height={300} >
                    <LineChart data={orders} margin={{ top: 20 }} accessibilityLayer>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />



                        <Line
                            type="basis"
                            dataKey="totalPrice"
                            stroke="#56AF2C"
                            activeDot={{ r: 1 }}
                            strokeWidth={5}
                        ></Line>
                        <Line type="monotone" dataKey="" stroke="#82ca9d"></Line>
                    </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer width={"100%"} height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="label"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                        >
                            {orders?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer> */}
            </div>
            {/* <AllPackages></AllPackages> */}
            <TrendingPackeages></TrendingPackeages>

          



        </div>
    );
};

export default SuperAdminDashboard;