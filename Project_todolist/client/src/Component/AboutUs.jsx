// AboutUs.jsx
import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import ContactUs from './ContactUs';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold font-serif text-white mb-6 md:text-5xl">
            About Us
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            Discover how our tool is designed for ambitious individuals who are striving to achieve their greatest goals.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg md:shadow-xl mx-auto max-w-4xl">
          <section className="mb-8">
            <h2 className="text-3xl font-semibold font-serif mb-4 text-gray-800">Our Story</h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              This project began as a solo endeavor with a vision to create a powerful tool for highly ambitious individuals. 
              We understand the challenges of managing time and tasks effectively, especially when striving for significant achievements.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our To-Do application is designed to help you stay on top of your goals with ease. It allows you to plan your entire year, 
              break down tasks into monthly and daily goals, and ensure that every day contributes to reaching your big dreams.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold font-serif mb-4 text-gray-800">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Our mission is to empower you to achieve your most ambitious goals by providing a comprehensive tool for task management. 
              We believe that every moment counts when working towards greatness, and our application is designed to help you make the most of your time.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              From yearly planning to daily tasks, we strive to support your journey with an intuitive and efficient system that adapts to your unique needs. 
              Our commitment is to help you stay organized and motivated as you tackle your most important objectives.
            </p>
          </section>

          <section>
           
            <NavLink 
                to="/contactus" 
                className="text-3xl font-serif font-semibold mb-4 text-gray-800 hover:text-blue-700 hover:underline"
              >
                Contact Us
              </NavLink>
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              We’re here to support you on your path to success. Whether you have questions, need assistance, or want to share your feedback, 
              don’t hesitate to reach out. Your input is invaluable as we continue to enhance our application to better serve ambitious individuals like you.
            </p>
           
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
