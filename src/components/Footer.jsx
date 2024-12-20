import React from "react";
import { FaInstagram, FaYoutube, FaBehance, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[10vh] pb-[5vh]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
        <Link
            to="https://www.youtube.com/@rounakchowdhury13"
            target="_blank"
            className="bg-white text-black rounded-full p-2 hover:bg-gray-300 transition-all duration-300"
          >
            <FaYoutube size={20} />
          </Link>
          <Link
            to="https://www.behance.net/rounakchowdhury2"
            target="_blank"
            className="bg-white text-black rounded-full p-2 hover:bg-gray-300 transition-all duration-300"
          >
            <FaBehance size={20} />
          </Link>
          <Link
            to="https://www.instagram.com/rounakviz/"
            target="_blank"
            className="bg-white text-black rounded-full p-2 hover:bg-gray-300 transition-all duration-300"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/rounak-chowdhury-b44a79268/"
            target="_blank"
            className="bg-white text-black rounded-full p-2 hover:bg-gray-300 transition-all duration-300"
          >
            <FaLinkedin size={20} />
          </Link>
         
        
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <Link to="/" className="hover:text-[#1fd1ff] text-xs md:text-base transition-all duration-300">
            Home
          </Link>
          <Link to="/portfolio" className="hover:text-[#1fd1ff] text-xs md:text-base transition-all duration-300">
            Work
          </Link>
          <Link to="/about" className="hover:text-[#1fd1ff] text-xs md:text-base transition-all duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#1fd1ff] text-xs md:text-base transition-all duration-300">
            Contact Me
          </Link>
          <Link to="/services" className="hover:text-[#1fd1ff] text-xs md:text-base transition-all duration-300">
            My Services 
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm">
          <Link to='mailto:suprotiv3@gmail.com'>
          <p>Copyright &copy; 2024; Developed by <span className="text-white">Suprotiv</span></p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
