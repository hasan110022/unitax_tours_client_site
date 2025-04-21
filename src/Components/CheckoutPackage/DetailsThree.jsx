import React, { useRef, useState, useEffect } from 'react';
import { FaLock, FaEye } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';

const CheckoutPage = () => {
  const emailRef = useRef();
  const cardNumberRef = useRef();
  const expirationDateRef = useRef();
  const securityCodeRef = useRef();
  const cardholderNameRef = useRef();
  const countryRef = useRef();
  const fullNameRef = useRef();
  const streetAddressRef = useRef();
  const aptSuiteRef = useRef();
  const zipCodeRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();

  const [minutes, setMinutes] = useState(14);
  const [seconds, setSeconds] = useState(59);
  const [onlineCount, setOnlineCount] = useState(126);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);

  const handleSubmit = () => {
    const formData = {
      email: emailRef.current.value,
      cardNumber: cardNumberRef.current.value,
      expirationDate: expirationDateRef.current.value,
      securityCode: securityCodeRef.current.value,
      cardholderName: cardholderNameRef.current.value,
      country: countryRef.current.value,
      fullName: fullNameRef.current.value,
      streetAddress: streetAddressRef.current.value,
      aptSuite: aptSuiteRef.current.value,
      zipCode: zipCodeRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
    };

    console.log('Collected Form Data:', formData);
    alert('Check console for collected form data!');
  };

  return (
    <div className='lg:w-[1100px] mx-auto font-poppins'>
      <div>
        <img className='mx-auto w-52' src="https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-2886.jpg" alt="Order Countdown" />
      </div>

      <div className='justify-center md:text-3xl max-sm:text-xl mt-2 flex items-center'>
        <div className='flex items-center font-bold gap-2'>
          <h1>Your order is reserved for:</h1>
          <h2 className="text-2xl text-red-600 font-bold">
            {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h2>
        </div>
      </div>

      <div className='flex items-center justify-center mt-5 gap-5'>
        <FaLock />
        <h1 className='font-bold'>secure checkout</h1>
      </div>

      <div className="flex max-sm:flex-col max-sm:p-5 gap-6 mt-2 md:p-3">
        {/* Left Section */}
        <div className="flex-1">
          {/* Customer Info */}
          <div className="border-2 border-black p-6 rounded-lg shadow-md max-w-lg">
            <h1 className="text-2xl font-semibold text-start text-gray-800 mb-4">Customer Information</h1>
            <input ref={emailRef} type="email" placeholder="Enter your email" className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
            <p>To receive an email order confirmation</p>
          </div>

          {/* Payment Info */}
          <div className="border-2 border-black p-6 rounded-lg shadow-md max-w-lg mt-6">
            <h1 className="text-2xl font-semibold text-start text-gray-800 mb-1">Payment Information</h1>
            <p>All transactions are secure and encrypted.</p>

            <div className="flex items-center gap-2 mt-4">
              <input type="radio" />
              <h1 className="font-bold text-xl">Credit Card</h1>
            </div>

            <div className="mt-4">
              <div className="relative">
                <IoIosLock className="absolute left-3 top-4 text-gray-400" />
                <input ref={cardNumberRef} type="text" placeholder="Card Number" className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <p>Card Number is required</p>
            </div>

            <div className="flex gap-4 mt-4">
              <input ref={expirationDateRef} type="text" placeholder="Expiration Date" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <input ref={securityCodeRef} type="text" placeholder="Security Code" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <div className="mt-4">
              <input ref={cardholderNameRef} type="text" placeholder="Cardholder Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
          </div>

          {/* Shipping Info */}
          <div className="border-2 border-black p-6 rounded-lg shadow-md max-w-lg mt-6">
            <h1 className="text-2xl font-semibold text-start text-gray-800 mb-4">Shipping Information</h1>

            <select ref={countryRef} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="bd">Bangladesh</option>
              <option value="ca">Canada</option>
              <option value="in">India</option>
              <option value="uk">United Kingdom</option>
            </select>

            <input ref={fullNameRef} type="text" placeholder="Full Name*" className="w-full p-3 mt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input ref={streetAddressRef} type="text" placeholder="Street Address*" className="w-full p-3 mt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input ref={aptSuiteRef} type="text" placeholder="Apt/Suite/Other*" className="w-full p-3 mt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />

            <div className="flex gap-4 mt-3">
              <input ref={zipCodeRef} type="text" placeholder="Zip Code*" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <input ref={cityRef} type="text" placeholder="City*" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <input ref={stateRef} type="text" placeholder="State*" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
          </div>

          {/* Pay Button */}
          <div className='bg-yellow-300 text-black text-center p-3 rounded-xl border-blue-700 mt-6 border-2 cursor-pointer'>
            <button className='text-xl font-bold' onClick={handleSubmit}>Pay Now</button>
          </div>
        </div>

        {/* Right Section (Optional for summary visuals) */}
        <div className="flex-1 border-2 border-black border-opacity-20 p-3 rounded-lg shadow-md max-w-lg">
          <div className="text-center">
            <h1 className="text-purple-400 font-bold flex items-center justify-center gap-2"><FaEye /> {onlineCount} People are online now</h1>
            <img src="https://i.ibb.co.com/3mQDp9KN/Screenshot-2025-03-08-173242.png" alt="" />
            <h1 className='font-bold text-xl mt-4'>TODAY'S PRICE: $59</h1>
            <p className='text-sm'>Subtotal: $59.00</p>
            <p className='text-sm'>Shipping & Handling: $9.95</p>
            <p className='text-sm'>TOTAL: $68.95</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
