import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-4 md:px-36 min-h-svh md:flex-row-reverse md:justify-between">
      <div className="relative mt-4 md:mt-0">
        <div>
          <h1 className="text-6xl md:text-6xl font-bold md:hidden text-primary mt-8 mb-16">
            Good Food Us <br /> Good Mood
          </h1>
        </div>
        <img
          src="/green-salad.png"
          alt="Green Salad Tomato"
          className="w-full w- md:w-102 rounded-lg"
        />
        <div className="absolute bottom-1 left-1 right-1 bg-white bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg flex flex-col lg:flex-row">
          <img
            src="/green-salad-sm.png"
            alt="Green Salad Tomato"
            className="w-12 h-12 md:w-16 md:h-16 rounded-lg mr-5"
          />
          <div>
            <p className="text-gray-900 font-semibold text-base md:text-lg lg:text-xl">
              Green Salad Tomato
            </p>
            <span className="text-gray-600 text-xs md:text-sm lg:text-base">
              Tomato
            </span>
            <div className="text-yellow-400 mt-1 text-sm md:text-base lg:text-lg">
              ★★★★☆
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md md:text-left">
        <h1 className="hidden md:block text-4xl md:text-6xl font-bold text-primary mt-8 md:mt-0">
          Good Food Us <br /> Good Mood
        </h1>
        <p className="text-[#757575] mt-4 font-medium text-base md:text-lg">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
        <div className="mt-6 space-y-4 md:space-y-0 md:space-x-4">
          <button className="w-full md:w-auto bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:shadow-md">
            Daftar Sekarang
          </button>
          <button className="w-full md:w-auto text-black bg-[#F2F2F2] font-semibold py-3 px-6 rounded-xl hover:shadow-md">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
