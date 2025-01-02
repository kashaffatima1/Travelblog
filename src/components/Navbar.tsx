"use client";
import React, { useState } from 'react';
import "../../public/images/logoblog.jpg";
import Work from './Work';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-pink-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-10 w-9" src="/images/logoblog.jpg" alt="Logo" />
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
            <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
            <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
          <div className="sm:hidden bg-black text-gray-400">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="flex justify-center mb-4">
            </div>
            <a href="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a>
            <a href="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
