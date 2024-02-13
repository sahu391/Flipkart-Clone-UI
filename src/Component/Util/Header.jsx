import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isThreeDotsDropdownOpen, setIsThreeDotsDropdownOpen] = useState(false);

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
    setIsThreeDotsDropdownOpen(false); // Close three dots dropdown when login dropdown opens
  };

  const toggleThreeDotsDropdown = () => {
    setIsThreeDotsDropdownOpen(!isThreeDotsDropdownOpen);
    setIsLoginDropdownOpen(false); // Close login dropdown when three dots dropdown opens
  };

  
  
  return (
    <header className="bg-gray-800 py-4 container mx-auto 
    rounded-lg shadow-xl z-10"  style={{ width: '95%' }}>
      <nav className="container mx-auto flex items-center justify-between " >

      <div className="ml-4"></div>
        <Link to="/" className="flex items-center text-white">
          <img src="/src/image/fkheaderlogo_exploreplus-44005d.svg" alt="logo" className="h-15" />
          <span className="text-xl font-semibold"></span>
        </Link>
        


          {/* Search bar */}
          <div className="flex items-center relative">
              <i className="fas fa-search absolute left-0 ml-3 text-gray-400"></i> {/* Search icon */}
              <input
                type="text"
                placeholder='Search for Products,Brands and more..... '
                style={{ width: '800px' }}
                className="px-3 py-1 rounded-md border border-gray-500 pl-10" // Add pl-10 class for left padding to accommodate the icon
              />
            </div>


        {/* Link block */}
        <div className="flex items-center space-x-4 text-white">


          {/* Login dropdown */}
          <div className="relative">
            <button onClick={toggleLoginDropdown} className="hover:text-gray-300 flex items-center">
              <i className="fas fa-user"></i>Login
              <i className="fas fa-caret-down ml-1"></i>
            </button>

            {isLoginDropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-64 bg-white border rounded-lg shadow-xl z-10">
               <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
               <span>New Customer? </span>
               <span className="ml-4"></span> 
              <button className="text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-md">Signup</button>
               </Link>
               <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                  <i className="fas fa-user-circle mr-2"></i>My Profile
                </Link>
                <Link to="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                  <i className="fas fa-shopping-bag mr-2"></i>Orders
                </Link>
                <Link to="/wishlist" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                  <i className="fas fa-heart mr-2"></i>Wishlist
                </Link>
              </div>
            )}
          </div>
          <div className="ml-4"></div>

          

          {/* Become a seller option */}
          <Link to="/become-seller" className="hover:text-gray-300">
            <i className="fas fa-store"></i>Become a Seller
          </Link>
          <div className="ml-4"></div>


          {/* Cart */}
          <Link to="/cart" className="hover:text-gray-300">
            <i className="fas fa-shopping-cart"></i>Cart
          </Link>
          <div className="ml-4"></div>


          {/* more options */}
          {/* <span style={{ fontWeight: 'bold' }}>⋮</span>
          <div className="ml-4"></div> */}


           <div className="relative">
            <button onClick={toggleThreeDotsDropdown } className="hover:text-gray-300 flex items-center">
              <span style={{ fontWeight: 'bold', fontSize: '20px', }}>⋮</span>
            </button>
            {isThreeDotsDropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl z-10">
                <Link to="/notification-preference" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center" style={{ width: '190px' }}>
                  <i className="fas fa-bell mr-2"></i>Notification Preference
                </Link>
                <Link to="/customer-care" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                  <i className="fas fa-headset mr-2"></i>24x7 Customer Care
                </Link>
                <Link to="/advertize" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                  <i className="fas fa-ad mr-2"></i>Advertize
                </Link>
                <Link to="/download-app" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                  <i className="fas fa-download mr-2"></i>Download App
                </Link>
              </div>
            )}
          </div>

         
          
          <div className="ml-4"></div>


  

        </div>
      </nav>
    </header>
  );
}

export default Header;
