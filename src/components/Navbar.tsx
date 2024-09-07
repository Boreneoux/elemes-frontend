import React, { useState } from 'react';
import { Home, Gift, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center py-4 px-8 lg:px-32 bg-transparent">
        <a href="#">
          <img src="/elemes_logo.png" alt="Elemes Logo" className="w-48" />
        </a>

        <nav className="hidden lg:flex">
          <ul className="flex space-x-8 relative">
            <li className="relative">
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-primary transition-colors duration-300">
                Home
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-primary transition-colors duration-300">
                About
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-primary transition-colors duration-300">
                Promotions
              </a>
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                Hot
              </span>
            </li>
            <li className="relative">
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-primary transition-colors duration-300">
                Blogs
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-primary transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex space-x-4">
          <button className="text-black font-semibold py-2 px-4 hover:text-primary transition-colors duration-300">
            Masuk
          </button>
          <button className="bg-primary text-white font-semibold py-2 px-4 rounded-xl hover:bg-primary-dark transition-colors duration-300">
            Daftar Sekarang
          </button>
        </div>

        <button
          className="lg:hidden text-gray-700 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg lg:hidden">
        <ul className="flex justify-around py-2">
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-gray-700 hover:text-primary transition-colors duration-300">
              <Home size={24} />
              <span className="text-xs mt-1">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-gray-700 hover:text-primary transition-colors duration-300">
              <Gift size={24} />
              <span className="text-xs mt-1">Promotions</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-gray-700 hover:text-primary transition-colors duration-300">
              <Menu size={24} />
              <span className="text-xs mt-1">Others</span>
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <div
          className={`flex flex-col items-center justify-center h-full transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? 'transform translate-y-0'
              : 'transform -translate-y-full'
          }`}>
          <a
            href="#"
            className="text-gray-700 font-semibold py-2 hover:text-primary transition-colors duration-300">
            About
          </a>
          <a
            href="#"
            className="text-gray-700 font-semibold py-2 hover:text-primary transition-colors duration-300">
            Blogs
          </a>
          <a
            href="#"
            className="text-gray-700 font-semibold py-2 hover:text-primary transition-colors duration-300">
            Contact Us
          </a>
          <button className="text-black font-semibold py-2 px-4 hover:text-primary transition-colors duration-300">
            Masuk
          </button>
          <button className="bg-primary text-white font-semibold py-2 px-4 rounded-xl mt-2 hover:bg-primary-dark transition-colors duration-300">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
