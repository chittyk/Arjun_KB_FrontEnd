import React from "react";

function main_nav() {
  return (
    <>
      <nav className="w-full bg-gray-900 text-white flex items-center justify-between px-6 py-3 rounded-b-xl drop-shadow-lg ">
        <div className="text-2xl font-bold tracking-wide  hover:text-blue-500 cursor-pointer ">
          Zkrptor
        </div>
        <ul className=" md:flex gap-8 text-lg hidden  ">
          <li
            className="relative cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:text-blue-600 hover:font-bold
  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 
  after:transition-all after:duration-300 after:ease-in-out 
  hover:after:w-full hover:after:left-0"
          >
            Home
          </li>

          <li className="relative cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:text-blue-600 hover:font-bold
  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 
  after:transition-all after:duration-300 after:ease-in-out 
  hover:after:w-full hover:after:left-0">About</li>
          <li className="relative cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:text-blue-600 hover:font-bold
  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 
  after:transition-all after:duration-300 after:ease-in-out 
  hover:after:w-full hover:after:left-0">Services</li>
          <li className="relative cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:text-blue-600 hover:font-bold
  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 
  after:transition-all after:duration-300 after:ease-in-out 
  hover:after:w-full hover:after:left-0">Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default main_nav;
