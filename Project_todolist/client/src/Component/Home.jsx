import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import DailyTarget from "./DailyTarget";
import { FaCalendarAlt, FaChartLine, FaClock, FaTasks } from "react-icons/fa"; // Import icons for new features

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col items-center justify-center text-center px-4 py-16">
        <motion.div
          className="max-w-2xl bg-white bg-opacity-30 rounded-lg p-8 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Stay Organized, Stay Productive!
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Join thousands of users in transforming the way they manage their
            tasks and boost their productivity with our powerful To-Do
            application.
          </p>
          <NavLink to="/DailyTarget">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
            >
              Get Started Now
            </motion.button>
          </NavLink>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-300">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Feature 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTasks className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              Manage Tasks Effortlessly
            </h3>
            <p className="text-gray-600">
              With our intuitive task management system, you can easily add,
              edit, and delete tasks on the go.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaClock className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Stay Focused</h3>
            <p className="text-gray-600">
              Keep track of your priorities and deadlines with our simple and
              effective task organizer.
            </p>
          </motion.div>

          {/* Feature 3: Yearly Target */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaChartLine className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Yearly Target</h3>
            <p className="text-gray-600">
              Plan and track your yearly goals effectively to ensure long-term
              success.
            </p>
          </motion.div>

          {/* Feature 4: Monthly Target */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCalendarAlt className="text-5xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Monthly Target</h3>
            <p className="text-gray-600">
              Set your monthly objectives and monitor your progress for
              short-term gains.
            </p>
          </motion.div>

          {/* Feature 5: Daily Target */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTasks className="text-5xl text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Daily Target</h3>
            <p className="text-gray-600">
              Manage your daily tasks and objectives to maintain steady
              progress.
            </p>
          </motion.div>

          {/* Feature 6 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTasks className="text-5xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Customizable Themes</h3>
            <p className="text-gray-600">
              Personalize your experience with our customizable themes to suit
              your style.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What Our Customers Say Section */}
      <div className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        <div className="py-5 px-32 ">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-xl text-gray-700 italic">
              "This app has completely changed the way I manage my daily tasks.
              It's simple, intuitive, and the real-time sync is a game-changer!"
            </p>
            <p className="mt-4 text-right font-semibold">- Alex D.</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left mb-4 md:mb-0">
              © 2024 To-Do App. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </a>
              <NavLink
                to="/contactus"
                className="text-gray-400 hover:text-white transition"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
