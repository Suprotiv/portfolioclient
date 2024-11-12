import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState({
    backgroundColor: 'bg-transparent',
    padding: 'py-3',
    textColor: 'text-white', // Start with white text for transparent background
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const[isScrolled,setIsScrolled]=useState(false);

  useEffect(() => {
    if (menuOpen) {
     if (window.scrollY >= 80) {
      setIsScrolled(true);
      setNavbarClass({
        backgroundColor: 'bg-black',
        padding: 'py-1 md:py-0',
        textColor: 'text-white',
      });
    } else if (window.scrollY <= 80 ) {
      setIsScrolled(false);
      setNavbarClass({
        backgroundColor: 'bg-transparent',
        padding: 'py-1 md:py-0',
        textColor: 'text-white',
      });
    }
    }
  }, [menuOpen]);

  // Function to handle scroll event
  const changeNavbarOnScroll = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
      setNavbarClass({
        backgroundColor: 'bg-black',
        padding: 'py-1 md:py-0',
        textColor: 'text-white',
      });
    } else if (window.scrollY <= 80 && !menuOpen) {
      setIsScrolled(false);
      setNavbarClass({
        backgroundColor: 'bg-transparent',
        padding: 'py-3',
        textColor: 'text-white',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarOnScroll);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', changeNavbarOnScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`${navbarClass.backgroundColor} fixed w-full z-30 top-0 left-0 transition-all duration-300 ${navbarClass.padding}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link to='/'>
          <h1 className={`text-2xl relative font-semibold px-2 z-50    left-2 ${navbarClass.textColor}`}>
            RickYz
          </h1>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center z-50 p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none   dark:text-gray-400 "
          aria-controls="navbar-sticky"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        
        <div
          ref={menuRef} // Attach ref here for outside click detection
          className={`${menuOpen ? 'fixed top-0 z-30 animate-slideDown' : 'hidden'} w-full md:flex md:w-auto md:order-1 transition-all duration-100`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 pt-[7vh] md:pt-4 rounded-b-xl relative z-30 bg-black  border border-black md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-transparent md:border-0">
            <li className=" animate-fadeInTopToBottom md:animate-none">
              <Link to='/'>
                <span className={`block py-2 px-3 text-md rounded ${navbarClass.textColor} md:hover:text-[#1fd1ff] md:p-0 md:dark:hover:text-[#1fd1ff] transition-all duration-500`}>
                  Home
                </span>
              </Link>
            </li>
            <li className="animate-fadeInTopToBottom md:animate-none">
              <Link to='/portfolio'>
                <span className={`block py-2 px-3 text-md rounded ${navbarClass.textColor} md:hover:text-[#1fd1ff] md:p-0 md:dark:hover:text-[#1fd1ff] transition-all duration-500`}>
                  Portfolio
                </span>
              </Link>
            </li>
            <li className="animate-fadeInTopToBottom md:animate-none">
              <Link to='/services'>
              <span className={`block py-2 px-3 text-md rounded ${navbarClass.textColor} md:hover:text-[#1fd1ff] md:p-0 md:dark:hover:text-[#1fd1ff] transition-all duration-500`}>
                Services
              </span>
              </Link>
            </li>
            <li className="animate-fadeInTopToBottom md:animate-none">
              <span className={`block py-2 px-3 text-md rounded ${navbarClass.textColor} md:hover:text-[#1fd1ff] md:p-0 md:dark:hover:text-[#1fd1ff] transition-all duration-500`}>
                Contact
              </span>
            </li>
            <li className="animate-fadeInTopToBottom md:animate-none">
              <Link to='/about'>
              <span className={`block py-2 px-3 text-md rounded ${navbarClass.textColor} md:hover:text-[#1fd1ff] md:p-0 md:dark:hover:text-[#1fd1ff] transition-all duration-500`}>
                About
              </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
     {/* Conditionally rendered background overlay with smoother transitions */}
     {menuOpen && (
        <div className="fixed inset-0 backdrop-blur-md z-0  animate-fadeInMedium transition-opacity duration-300"></div>
      )}
    </nav>
  );
};

export default Navbar;
