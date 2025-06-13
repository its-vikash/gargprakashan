import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import 'swiper/css';
import 'swiper/css/navigation';
gsap.registerPlugin(CustomEase);
CustomEase.create("bookEase", "0.25, 1, 0.5, 1");

const tabs = ['School Series', 'College Series', 'Best Sellers'];

const books = [
  {
    id: 1,
    title: 'Rich Dad Poor Dad',
    author: 'Misty Figueroa',
    price: '₹170.00',
    image: '/src/assets/images/1.jpg',
  },
  {
    id: 2,
    title: 'The Story of Success',
    author: 'Arthur Gonzalez',
    price: '₹50.89',
    image: '/src/assets/images/2.jpg',
  },
  {
    id: 3,
    title: 'My Dearest Darkest',
    author: 'Enrique Wallace',
    price: '₹914.53',
    image: '/src/assets/images/3.jpg',
  },
  {
    id: 4,
    title: 'House of Sky and...',
    author: 'Ernesto Wade',
    price: '₹72.99',
    image: '/src/assets/images/4.jpg',
  },
  {
    id: 5,
    title: 'Surrounded by...',
    author: 'Georgia Ramirez',
    price: '₹825.85',
    image: '/src/assets/images/5.jpg',
  },  
  {
    id: 6,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: '₹499.00',
    image: '/src/assets/images/6.jpg',
  }, 
  {
    id: 7,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: '₹399.00',
    image: '/src/assets/images/7.jpg',
  },   
  {
    id: 8,
    title: 'Deep Work',
    author: 'Cal Newport',
    price: '₹599.00',
    image: '/src/assets/images/8.jpg',
  },   
  {
    id: 9,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    price: '₹799.00',
    image: '/src/assets/images/9.jpg',
  },
];

const BookSlider = () => {
  const [activeTab, setActiveTab] = useState('School Series');
  const booksRef = useRef([]);
  
  useEffect(() => {
    const setupBookAnimations = () => {
      booksRef.current.forEach(book => {
        if (!book) return;
        
        const hitbox = book.querySelector(".books__hitbox");
        const bookImage = book.querySelector(".books__image");
        const bookEffect = book.querySelector(".books__effect");
        const pages = book.querySelectorAll(".books__page");
        const bookLight = book.querySelector(".books__light");
        gsap.set(bookImage, {
          boxShadow: "0 10px 20px rgba(0,0,0,0.15), 0 30px 45px rgba(0,0,0,0.12), 0 60px 80px rgba(0,0,0,0.1)"
        });
        
        gsap.set(bookLight, {
          opacity: 0.1,
          rotateY: 0
        });
        
        gsap.set(pages, { x: 0 });
        const hoverIn = gsap.timeline({ paused: true });
        
        hoverIn.to(bookImage, {
          duration: 0.7,
          rotateY: -12,
          translateX: -6,
          scaleX: 0.96,
          boxShadow: "10px 10px 20px rgba(0,0,0,0.25), 20px 20px 40px rgba(0,0,0,0.2), 40px 40px 60px rgba(0,0,0,0.15)",
          ease: "bookEase"
        }, 0);
        
        hoverIn.to(bookEffect, {
          duration: 0.7,
          marginLeft: 10,
          ease: "bookEase"
        }, 0);
        
        hoverIn.to(bookLight, {
          duration: 0.7,
          opacity: 0.2,
          rotateY: -12,
          ease: "bookEase"
        }, 0);
        
        if (pages.length) {
          hoverIn.to(pages[0], {
            x: "4px",
            duration: 0.7,
            ease: "power1.inOut"
          }, 0);
          
          hoverIn.to(pages[1], {
            x: "2px",
            duration: 0.7,
            ease: "power1.inOut"
          }, 0);
          
          hoverIn.to(pages[2], {
            x: "0px",
            duration: 0.7,
            ease: "power1.inOut"
          }, 0);
        }

        hitbox.addEventListener("mouseenter", () => hoverIn.play());
        hitbox.addEventListener("mouseleave", () => hoverIn.reverse());
        
        return () => {
          hitbox.removeEventListener("mouseenter", () => hoverIn.play());
          hitbox.removeEventListener("mouseleave", () => hoverIn.reverse());
        };
      });
    };
    
    setupBookAnimations();
    
    return () => {
      booksRef.current = [];
    };
  }, [activeTab]);

  return (
    <div className="px-6 lg:px-0 py-16 md:py-20 max-w-[1300px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-10">
        <div className="flex space-x-1 md:space-x-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-base md:text-lg font-semibold px-4 py-2 md:mr-8 whitespace-nowrap transition-all ${
                activeTab === tab 
                  ? 'text-red-600 border-b-2 border-red-500' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <button className="mt-4 md:mt-0 bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-2 md:py-3 rounded-full text-sm font-medium flex items-center self-end md:self-auto">
          View All
          <FontAwesomeIcon icon={['fas', 'arrow-right-long']} className="ml-2 text-xs md:text-sm" />
        </button>
      </div>
      
      <div className="relative book-slider-wrap">
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 2.5 },
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className="book-slider"
        >
          {books.map((book, index) => (
            <SwiperSlide key={book.id} className="pb-12">
              <div className="w-full max-w-[210px] mx-auto">
                {/* Replaced simple image with book effect structure */}
                <div className="books__container" ref={el => booksRef.current[index] = el}>
                  <div className="books__cover">
                    <div className="books__back-cover"></div>
                    <div className="books__inside">
                      <div className="books__page"></div>
                      <div className="books__page"></div>
                      <div className="books__page"></div>
                    </div>
                    <div className="books__image">
                      <img 
                        src={book.image} 
                        alt={book.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="books__effect"></div>
                      <div className="books__light"></div>
                    </div>
                    <div className="books__hitbox"></div>
                  </div>
                </div>
                
                <h3 className="text-sm font-semibold mt-3 leading-tight line-clamp-2 h-10">{book.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{book.author}</p>
                <p className="text-red-600 font-semibold text-sm mt-2">{book.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="CurrentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <style jsx global>{`
        /* Book effect styles */
        .books__container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 125%; /* Maintain book aspect ratio */
        }
        
        .books__cover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          will-change: transform;
        }
        
        .books__back-cover {
          position: absolute;
          width: 96%;
          height: 96%;
          top: 2%;
          left: 2%;
          background: #111;
          border-radius: 0 6px 6px 0;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
          z-index: -10;
        }
        
        .books__inside {
          position: absolute;
          width: 90%;
          height: 94%;
          top: 3%;
          left: 5%;
          z-index: 0;
        }
        
        .books__page {
          position: absolute;
          top: 0;
          right: 0;
          width: 98%;
          height: 100%;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 0 6px 6px 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
          transform-origin: right center;
          z-index: -5;
        }
        
        .books__image {
          line-height: 0;
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 2px 6px 6px 2px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 30px 45px rgba(0, 0, 0, 0.12),
            0 60px 80px rgba(0, 0, 0, 0.1);
          transform: perspective(2000px) rotateY(0deg) translateX(0px) scaleX(1);
          transform-style: preserve-3d;
          transform-origin: left center;
          cursor: pointer;
          will-change: transform;
          z-index: 10;
          overflow: hidden;
        }
        
        .books__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 2px 6px 6px 2px;
        }
        
        .books__effect {
          position: absolute;
          width: 9%;
          height: 100%;
          margin-left: 7.2%;
          top: 0;
          border-left: 2px solid rgba(0, 0, 0, 0.06);
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          transform-origin: left center;
          z-index: 5;
          pointer-events: none;
        }
        
        .books__light {
          width: 100%;
          height: 100%;
          position: absolute;
          border-radius: 2px 6px 6px 2px;
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 100%
          );
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.15;
          transform-origin: left center;
          z-index: 4;
          pointer-events: none;
          mix-blend-mode: overlay;
        }
        
        .books__hitbox {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 10;
          cursor: pointer;
        }
        
        /* Adjust hover effect for the book */
        .book-slider .swiper-slide:hover {
          transform: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BookSlider;