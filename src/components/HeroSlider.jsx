import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const slides = [
    {
      subTitle: "Since 1938",
      title: "Empowering Education",
      text: "Empowering Education and helping authors achieve their publishing dreams since 1938.",
      img: "src/assets/images/banner-book.png",
    },
    {
      subTitle: "Editors Choice",
      title: "Top 10 Books of the Year to Write Your Future",
      text: "Discover the finest collection of career-focused books and publishing services to help you write your professional future.",
      img: "src/assets/images/banner-book.png",
    },
  ];

  return (
    <div className="flex-1 pt-6 hero-slider">
      <Swiper
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop={true}
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center justify-between px-12 py-10 bg-[#223D4D] text-white rounded-xl h-[420px]">
              <div className="max-w-lg">
                <p className="text-xs font-semibold uppercase mb-2">{slide.subTitle}</p>
                <h2 className="text-4xl font-bold leading-snug mb-5 relative">
                  <span className="relative z-1">
                    {slide.title}
                  </span>
                  <img src="/src/assets/images/head-back.png" className="absolute -bottom-3 left-50 z-0" alt="head-bg" />
                </h2>
                <p className="text-red-400 font-semibold text-sm mb-1">{slide.text}</p>
                <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold text-sm shadow hover:bg-gray-100 transition-all">
                  Contact Us →
                </button>
              </div>
              <img src={slide.img} alt="Book Mockup" className="w-[270px] h-auto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;