const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 lg:px-32 bg-transparent">
      <a href="#">
        <img src="/elemes_logo.png" alt="Elemes Logo" className="w-24" />
      </a>

      <nav className="hidden lg:flex">
        <ul className="flex space-x-8 relative">
          <li className="relative">
            <a
              href="#"
              className="text-gray-700 font-semibold hover:text-primary">
              Home
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="text-gray-700 font-semibold hover:text-primary">
              About
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="text-gray-700 font-semibold hover:text-primary">
              Promotions
            </a>
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Hot
            </span>
          </li>
          <li className="relative">
            <a
              href="#"
              className="text-gray-700 font-semibold hover:text-primary">
              Blogs
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="text-gray-700 font-semibold hover:text-primary">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex space-x-4">
        <button className="hidden lg:block text-black font-semibold py-2 px-4 hover:text-primary">
          Masuk
        </button>
        <button className="bg-primary text-white font-semibold py-2 px-4 rounded-xl">
          Daftar Sekarang
        </button>
      </div>
    </header>
  );
};

export default Navbar;
