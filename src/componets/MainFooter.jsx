import React from 'react'

function MainFooter() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 w-full py-10 mt-10">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Logo / About */}
    <div>
      <h2 className="text-2xl font-bold text-white">MyWebsite</h2>
      <p className="mt-3 text-gray-500">
        Building modern web experiences with style and simplicity.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li className="cursor-pointer relative hover:text-blue-500 hover:font-bold transition-all duration-300
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
          after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300">
          Home
        </li>
        <li className="cursor-pointer relative hover:text-blue-500 hover:font-bold transition-all duration-300
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
          after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300">
          About
        </li>
        <li className="cursor-pointer relative hover:text-blue-500 hover:font-bold transition-all duration-300
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
          after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300">
          Services
        </li>
        <li className="cursor-pointer relative hover:text-blue-500 hover:font-bold transition-all duration-300
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
          after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300">
          Contact
        </li>
      </ul>
    </div>

    {/* Social Links */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
      <div className="flex gap-4">
        <a href="#" className="hover:text-blue-500 transition">Facebook</a>
        <a href="#" className="hover:text-blue-500 transition">Twitter</a>
        <a href="#" className="hover:text-blue-500 transition">Instagram</a>
      </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} MyWebsite. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default MainFooter
