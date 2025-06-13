import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const genres = [
  {
    name: 'New Editions',
    books: [1, 2, 3, 4, 21, 22, 23],
  },
  {
    name: 'Most Popular Books',
    books: [5, 6, 7, 8, 24, 25],
  },
  {
    name: 'Religious & Spritual',
    books: [9, 10, 11, 12, 26],
  },
  {
    name: 'General Books',
    books: [13, 14, 15, 16, 27],
  },
  {
    name: 'Reference Books',
    books: [17, 18, 19, 20],
  },
];

const BrowseByGenre = () => {
  const [activeGenre, setActiveGenre] = useState(0);

  return (
    <div className="py-20 px-4 lg:px-0 max-w-[1300px] mx-auto">
      <h2 className="text-3xl font-bold mb-2">
        <span className="inline-block text-red-600 mr-2">❯</span>Browse By Genre
      </h2>
      <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs */}
        <div className="w-full md:w-1/4">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`cursor-pointer px-4 py-3 text-sm font-medium relative border-b-2 border-b-white ${
                activeGenre === index
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setActiveGenre(index)}
            >
              {genre.name}
              {activeGenre === index && (
                <span className="absolute -right-[21px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[22px] border-l-red-600 border-t-[22px] border-t-transparent border-b-[22px] border-b-transparent"></span>
              )}
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className="w-full md:w-3/4">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation
            modules={[Navigation]}
          >
            {genres[activeGenre].books.map((num, idx) => (
              <SwiperSlide key={idx}>
                <div className="text-center">
                  <img
                    src={`/src/assets/images/${num}.jpg`}
                    alt={`Book ${num}`}
                    className="rounded-md w-full h-[300px] object-cover mb-4"
                  />
                  <p className="text-sm text-gray-500 uppercase">COLLEEN MCCULLOUGH</p>
                  <h4 className="text-lg font-medium">Book Title {num}</h4>
                  <p className="text-red-600 font-semibold">₹150.00</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrowseByGenre;
