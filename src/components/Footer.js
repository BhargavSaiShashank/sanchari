import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">KR0355 Travel Marketplace</h3>
            <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 