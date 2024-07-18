import { useState } from "react";

import contactUs from "../assets/contactUs.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact-container flex flex-col md:flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="contact-left md:w-1/2 mb-6 md:mb-0">
        <img src={contactUs} alt="Contact us" className="rounded-lg shadow-lg w-full h-full object-cover" />
      </div>
      <div className="contact-right md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
          />
          <textarea
            placeholder="Type your Message here..."
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
          {message && (
            <span className="block mt-4 text-green-500 text-center">{message}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;