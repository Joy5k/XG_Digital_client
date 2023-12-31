import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
    return (
        <div>
            
<nav className="bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b text-teal-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-center font-bold">
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"><span className='text-blue-700 font-bold'>XG.</span>Digital</span>
  </Link>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full w-[139px] text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Start Project</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
                    </div>

                    <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex  gap-4">
      <li>
           <Link to="" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 font-medium hover:text-blue-600 hover:font-bold " aria-current="page">Home</Link>
        </li>
      
      <li>
           <Link to="/about" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 font-medium  hover:text-blue-600 hover:font-bold " aria-current="page">About us</Link>
        </li>
      <li>
           <Link to="" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 font-medium  hover:text-blue-600 hover:font-bold " aria-current="page">Services</Link>
        </li>
      <li>
           <Link to="" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 font-medium  hover:text-blue-600 hover:font-bold " aria-current="page">Projects</Link>
        </li>
      <li>
           <Link to="" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 font-medium hover:text-blue-600 hover:font-bold " aria-current="page">Blog</Link>
        </li>
      <li>
           <Link to="" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 font-medium hover:text-blue-600 hover:font-bold " aria-current="page">Contact</Link>
        </li>
     
    </ul>
  </div>
  </div>
</nav>

        </div>
    );
};

export default Navbar;