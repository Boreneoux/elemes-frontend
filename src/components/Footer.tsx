import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-lighter py-12 mt-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 flex flex-col items-start md:items-start">
            <Image
              src="/elemes_logo.png"
              alt="Elemes.id"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
              <br />
              Kecamatan Setiabudi, Kota Jakarta Selatan,
              <br />
              Daerah Khusus Ibukota Jakarta 12950
            </p>
            <div className="flex space-x-4">
              <Mail className="icon-wrapper w-8 h-8 md:w-10 md:h-10 text-primary cursor-pointer" />
              <Phone className="icon-wrapper w-8 h-8 md:w-10 md:h-10 text-primary cursor-pointer" />
              <Instagram className="icon-wrapper w-8 h-8 md:w-10 md:h-10 text-primary cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Cupcake', 'Pizza', 'Kebab', 'Salmon', 'Dougnut'].map(item => (
                <li
                  key={item}
                  className="text-gray-600 hover:text-primary cursor-pointer text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              {['About Us', 'FAQ', 'Report Problem'].map(item => (
                <li
                  key={item}
                  className="text-gray-600 hover:text-primary cursor-pointer text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get now free 50% discount for all products on your first order
            </p>
            <div className="flex flex-col md:flex-row mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-t-md md:rounded-l-md border-2 border-primary focus:outline-none"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-b-md md:rounded-r-md hover:bg-primary transition duration-300">
                SEND
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-600">
                  elemesid@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-600">0888 1111 2222</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
