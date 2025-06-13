import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const subMenuItems = [
  {
    id: 1,
    title: 'School Series',
    url: '#',
  },
  {
    id: 2,
    title: 'College Series',
    url: '#',
  },
  {
    id: 3,
    title: 'Printed Stationaries',
    url: '#',
  },
  {
    id: 4,
    title: 'Paper Product',
    url: '#',
  },
  {
    id: 5,
    title: 'General Items',
    url: '#',
  },
];
const Header = () => {
  return (
    <header className="border-b">
      <div className=" bg-[#262626] text-white py-3 px-6 xl:px-0 text-sm">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between">
          <div>
            <a href="tel:+919039826267" className="hover:text-red-600 pr-3 mr-3 border-r border-r-white">
              <FontAwesomeIcon icon={['fas', 'phone']} className="mr-2 text-sm" />+91 - 9039 826 267
            </a>
            <a href="mailto:info@gargprakashan.com" className="hover:text-red-600">
              <FontAwesomeIcon icon={['fas', 'envelope']} className="mr-2 text-sm" />info@gargprakashan.com
            </a>
          </div>
          <div className="social-links">
            <a href="#" className="hover:text-red-600">
              <FontAwesomeIcon icon={['fab', 'facebook']} className="text-base pr-2 mr-2 border-r border-r-white" />
            </a>
            <a href="#" className="hover:text-red-600">
              <FontAwesomeIcon icon={['fab', 'x-twitter']} className="text-base pr-2 mr-2 border-r border-r-white" />
            </a>
            <a href="#" className="hover:text-red-600">
              <FontAwesomeIcon icon={['fab', 'instagram']} className="text-base pr-2 mr-2 border-r border-r-white" />
            </a>
            <a href="#" className="hover:text-red-600">
              <FontAwesomeIcon icon={['fab', 'youtube']} className="text-base" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto px-6 py-0 flex items-center justify-between xl:px-0">
        <div className="text-2xl font-bold text-red-600 flex items-center">
          <img src={new URL("../assets/images/logo.png", import.meta.url).href} alt="Garg Prakashan" className="w-full max-w-[150px]" />
        </div>
        <nav className="flex space-x-6 text-base font-medium">
          <ul className="menu list-none p-0 m-0 flex space-x-6 items-center">
            <li>
              <a href="#" className="hover:text-red-600 py-11">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 py-11">About Us</a>
            </li>
            <li className="relative group hover:text-red-600">
              <a href="#" className="hover:text-red-600 flex items-center py-11">Our Products<FontAwesomeIcon icon={['fas', 'chevron-down']} className="text-xs ml-2" /></a>
              <div className="absolute left-8 bottom-0 hidden group-hover:block shadow-md">
                <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-brand-blue mx-auto"></div>
              </div>
              <ul
                className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-52 p-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
                          transition-all duration-300 ease-in-out z-50 border-2 border-brand-blue overflow-hidden"
              >
                {subMenuItems.map(item => (
                  <li key={item.id} className="border-b border-b-grey-200">
                    <a
                      href={item.url}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-red transition duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 py-11">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 py-11">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={['fas', 'phone-volume']} className="text-lg p-3 rounded-full bg-red-200" />
          <div className="text-right">
            <div className="text-brand-red font-bold text-lg text-left">
              <a href="tel:+919039826267">+91 - 9039 826 267</a>
            </div>
            <div className="text-gray-500 text-xs text-left">24/7 Support Center</div>
          </div>
        </div>
      </div>
      <div className="bg-brand-red -mb-[1px]">
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-4 gap-6 xl:px-0">
          <div className="col-span-1">
            <div className="bg-red-600 text-white px-6 py-3.5 text-md font-semibold flex items-center justify-between border border-red-600">
              <span><FontAwesomeIcon icon={['fas', 'list']} className="mr-2 text-lg"/>Categories</span>
              <span className="text-xl"><FontAwesomeIcon icon={['fas', 'chevron-up']} className="mr-2 text-sm"/></span>
            </div>
          </div>
          <div className="col-span-3 flex items-center grid grid-cols-3">
            <div className="flex items-center w-full bg-white rounded-full overflow-hidden col-span-2">
              <input type="text" className="px-4 py-2.5 w-full outline-none text-sm" placeholder="Search products..." />
              <button className="px-4 py-2"><FontAwesomeIcon icon={['fas', 'search']} /></button>
            </div>
            <div className="text-right">
              <a href="#" className="ml-4 text-white underline font-semibold text-sm">
                <FontAwesomeIcon icon={['fas', 'location-dot']} className="text-lg mr-2"/>Find a Book Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;