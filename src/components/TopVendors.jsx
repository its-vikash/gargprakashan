import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const vendors = [
  {
    id: 1,
    name: 'Online Store',
    products: 5,
    cover: '/src/assets/images/store1.jpg',
    logo: '/src/assets/images/store-logo1.jpg',
  },
  {
    id: 2,
    name: 'Barone LLC.',
    products: 6,
    cover: '/src/assets/images/store2.jpg',
    logo: '/src/assets/images/store-logo1.jpg',
  },
  {
    id: 3,
    name: 'Gregstore',
    products: 3,
    cover: '/src/assets/images/store1.jpg',
    logo: '/src/assets/images/store-logo1.jpg',
  },
  {
    id: 4,
    name: 'Arlene',
    products: 6,
    cover: '/src/assets/images/store2.jpg',
    logo: '/src/assets/images/store-logo1.jpg',
  },
  {
    id: 5,
    name: 'Book House',
    products: 3,
    cover: '/src/assets/images/store1.jpg',
    logo: '/src/assets/images/store-logo1.jpg',
  },
  {
    id: 6,
    name: 'Book Store',
    products: 2,
    cover: '/src/assets/images/store2.jpg',
    logo: '/src/assets/images/store-logo1.jpg',
  },
];

const TopVendors = () => {
    const paginationRef = useRef(null);

  useEffect(() => {
    if (paginationRef.current) {
      paginationRef.current.style.zIndex = 50;
    }
  }, []);
  return (
    <div className="px-6 lg:px-0 py-20 pb-14 max-w-[1300px] mx-auto top-vendors">
      <h2 className="text-2xl font-bold mb-6">Top selling vendor</h2>
      <div className="relative" ref={paginationRef}>
        <div className="swiper-pagination-custom" />
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        modules={[Pagination]}
        className="pb-10"
      >
        {vendors.map((vendor) => (
          <SwiperSlide key={vendor.id}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative group">
                <img src={vendor.cover} alt="cover" className="w-full h-[120px] object-cover" />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform">
                  <img
                    src={vendor.logo}
                    alt="logo"
                    className="w-12 h-12 rounded-xl border-4 border-white bg-white shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="pt-8 pb-4 text-center">
                <h4 className="text-sm font-semibold">{vendor.name}</h4>
                <p className="text-xs text-gray-500">{vendor.products} Products</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopVendors;
