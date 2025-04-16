import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
    return (
        <motion.div
            className="bg-gradient-to-br from-purple-300 via-blue-300 to-indigo-400 min-h-screen flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Banner Section */}
            <motion.div
                className="relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src="https://img.freepik.com/free-vector/travel-facebook-post-with-plane-drawing_23-2149350885.jpg"
                    alt="Travel Banner"
                    className="w-full h-[300px] object-cover"
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end items-center text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Let’s Make Your Dream Journey Happen!
                    </h1>
                    <p className="text-lg text-white">
                        Explore breathtaking destinations with our tailored tour plans.
                    </p>
                </motion.div>
            </motion.div>

            {/* Main Form Section */}
            <motion.div
                className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl mx-auto mt-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="text-3xl font-bold text-center text-gray-800 mb-6"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Us
                </motion.h2>
                <motion.p
                    className="text-center text-gray-600 mb-8"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Have questions? Reach out and let us make your travel plans seamless!
                </motion.p>
                <form className="space-y-6">
                    {/* Name Field */}
                    <motion.div
                        className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50 shadow-sm"
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <FaUser className="text-blue-500 text-lg mr-3" />
                        <input
                            type="text"
                            className="flex-1 p-2 focus:outline-none bg-transparent"
                            placeholder="Your Name"
                        />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                        className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50 shadow-sm"
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <FaEnvelope className="text-blue-500 text-lg mr-3" />
                        <input
                            type="email"
                            className="flex-1 p-2 focus:outline-none bg-transparent"
                            placeholder="Your Email"
                        />
                    </motion.div>

                    {/* Phone Field */}
                    <motion.div
                        className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50 shadow-sm"
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <FaPhone className="text-blue-500 text-lg mr-3" />
                        <input
                            type="tel"
                            className="flex-1 p-2 focus:outline-none bg-transparent"
                            placeholder="Your Phone"
                        />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                        className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50 shadow-sm"
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <FaCommentDots className="text-blue-500 text-lg mr-3" />
                        <textarea
                            className="flex-1 p-2 focus:outline-none bg-transparent"
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaPaperPlane className="text-lg" />
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default ContactUs;
