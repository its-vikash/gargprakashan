// File: src/components/HomePage.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaPhoneAlt, FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { FiBookOpen } from 'react-icons/fi';
import { categories } from '../data/categories';

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Top Banner */}
      <div className="bg-black text-white text-sm text-center py-2">
        Buy one, get one 50% off books for all ages. <a href="#" className="underline">See All Offers</a>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center text-red-700 text-xl font-bold">
          <FiBookOpen className="mr-2 text-2xl" /> Garg Prakashan
        </div>
        <div className="space-x-6 hidden lg:flex">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Vendors</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-600">
            <FaPhoneAlt className="mr-2 text-red-600" />
            <span className="font-semibold text-red-600">+91 98765 43210</span>
            <span className="ml-2">24/7 Support</span>
          </div>
          <FaUser className="text-lg" />
          <FaHeart className="text-lg" />
          <div className="relative">
            <FaShoppingCart className="text-lg" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">0</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-red-500 px-6 py-4 flex items-center">
        <button className="bg-red-700 text-white px-4 py-2 rounded-l text-sm font-semibold">Categories</button>
        <input type="text" placeholder="Search products..." className="w-full px-4 py-2 outline-none" />
        <button className="bg-white text-red-500 px-4 py-2 rounded-r">
          <IoSearchOutline size={20} />
        </button>
        <a href="#" className="ml-4 text-white underline font-medium">Find a Book Store</a>
      </div>

      {/* Main Section */}
      <div className="flex">
        {/* Categories Sidebar */}
        <div className="w-1/4 p-6 border-r hidden lg:block">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 text-sm">
            {categories.map((cat, i) => (
              <li key={i} className="text-gray-700 hover:text-red-600 cursor-pointer flex items-center">
                {cat.icon && <span className="mr-2">{cat.icon}</span>} {cat.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Swiper Banner */}
        <div className="w-full lg:w-3/4 p-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <div className="bg-[#192C3E] text-white p-8 rounded-lg flex flex-col lg:flex-row items-center justify-between">
                <div className="max-w-lg">
                  <p className="text-sm tracking-widest">SPECIAL OFFER</p>
                  <h1 className="text-3xl md:text-4xl font-bold mt-2">
                    <span className="relative inline-block">
                      <span className="z-10 relative">The Best Books</span>
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-full"></span>
                    </span>
                    <br /> Of 2022
                  </h1>
                  <p className="mt-4 text-sm">
                    <span className="text-red-500 font-bold">10% Off</span> When You Spend ₹499 Or More With Code: <span className="text-red-400 font-semibold">SAVEMORE</span>
                  </p>
                  <button className="mt-6 px-6 py-2 bg-white text-red-600 font-semibold rounded-full">Shop Now →</button>
                </div>
                <div className="mt-6 lg:mt-0">
                  <img src={new URL("./assets/images/head-back.png", import.meta.url).href} alt="Book Mockup" className="w-64" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
