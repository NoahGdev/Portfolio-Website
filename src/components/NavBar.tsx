'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ButtonLink } from './Scroller';

const Navbar: React.FC = () => {

  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full bg-transparent z-50 mnhdr h-auto transition-all ${scrolling ? 'blur-background' : ''} ${mobileMenuOpen ? 'h-24 blur-background' : ''}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-gray-800 text-white">
          iNoah
        </Link>
        <div className="hidden md:flex space-x-6">
          <ButtonLink className="text-lg font-medium text-gray-800 text-white hover:text-gray-300" buttonText='Home' elementId='hero'/>
          <ButtonLink className="text-lg font-medium text-gray-800 text-white hover:text-gray-300" buttonText='Previous Work' elementId='previouswork'/>
          <ButtonLink className="text-lg font-medium text-gray-800 text-white hover:text-gray-300" buttonText='Contact' elementId='contact'/>
        </div>
        <div className="flex space-x-4">
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6 text-gray-800 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <Link href="https://github.com/NoahGdev" target='_blank' className="hidden md:flex">
            <img src="/github-mark-white.svg" alt="" className='GitHub' />
          </Link>
        </div>
      </nav>
      <div className={`md:hidden ${mobileMenuOpen ? 'flex' : 'hidden'} justify-between mt-4 mb-6 ml-5`}>
        <div className="flex flex-col space-y-4">
          <ButtonLink className="text-left text-lg font-medium text-gray-800 text-white hover:text-gray-200 hover:text-gray-400" buttonText='Home' elementId='hero'/>
          <ButtonLink className="text-left text-lg font-medium text-gray-800 text-white hover:text-gray-200 hover:text-gray-400" buttonText='Previous Work' elementId='previouswork'/>
          <ButtonLink className="text-left text-lg font-medium text-gray-800 text-white hover:text-gray-200 hover:text-gray-400" buttonText='Contact' elementId='contact'/>
        </div>
        <Link href="https://github.com/NoahGdev" target='_blank' className="text-lg font-medium text-gray-800:text-white hover:text-gray-900 hover:text-gray-300 flex items-center mt-20 mr-4">
          <img src="/github-mark-white.svg" alt="" className='GitHub' />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
