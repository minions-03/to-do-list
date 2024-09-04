import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // New state for phone number
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isActive, setIsActive] = useState('');

  const handleFocus = (field) => {
    setIsActive(field);
  };

  const handleBlur = () => {
    setIsActive('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: phone, // Include phone number in template parameters
      message: message,
    };

    emailjs
      .send('service_cd2cx0w', 'template_c6sujlg', templateParams, 'TQZOKkWgnvBeZYINX')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setPhone(''); // Clear phone field after submission
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="min-h-screen  flex flex-col bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300">
      <Navbar />
      <div className="flex-grow flex items-center justify-center mt-6">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg px-8 py-5 max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className={`mb-4 ${isActive === 'name' ? 'border-blue-500' : ''}`}>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className={`border rounded-lg p-2 w-full ${isActive === 'name' ? 'border-blue-500' : 'border-gray-300'}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                required
              />
            </div>
            <div className={`mb-4 ${isActive === 'email' ? 'border-blue-500' : ''}`}>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className={`border rounded-lg p-2 w-full ${isActive === 'email' ? 'border-blue-500' : 'border-gray-300'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
              />
            </div>
            {/* New phone input field */}
            <div className={`mb-4 ${isActive === 'phone' ? 'border-blue-500' : ''}`}>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className={`border rounded-lg p-2 w-full ${isActive === 'phone' ? 'border-blue-500' : 'border-gray-300'}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                required
              />
            </div>
            <div className={`mb-4 ${isActive === 'message' ? 'border-blue-500' : ''}`}>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className={`border rounded-lg p-2 w-full resize-none ${isActive === 'message' ? 'border-blue-500' : 'border-gray-300'}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition-colors "
            >
              Submit
            </button>
          </form>
          {status && <p className="mt-1 text-center">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
