import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    name: 'Rohit Kumar',
    role: 'Class 12th Student',
    image: 'src/assets/images/img-1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus dicta dolorum exercitationem id in incidunt iste laborum minus praesentium qui soluta, tempora temporibus veniam, voluptates.',
  },
  {
    name: 'Shamli Gupta',
    role: 'Class 10th Student',
    image: 'src/assets/images/img-2.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus dicta dolorum exercitationem id in incidunt iste laborum minus praesentium qui soluta, tempora temporibus veniam, voluptates.',
  },
  {
    name: 'Vishal Bhardwaj',
    role: 'Traveller',
    image: 'src/assets/images/img-1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus dicta dolorum exercitationem id in incidunt iste laborum minus praesentium qui soluta, tempora temporibus veniam, voluptates.',
  },
];

const Testimonials = () => {
  return (
    <div className="px-6 py-20 xl:px-0">
      <div className="max-w-[1300px] mx-auto">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial mb-10 text-center relative">
                <div className="testimonial-content border-t-4 border-b-4 border-brand-blue pt-10 pb-2 relative">
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[60px] border-r-[60px] border-t-brand-blue border-r-transparent" />
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-l-[60px] border-b-brand-blue border-l-transparent" />

                  <div className="pic inline-block w-24 h-24 border-2 border-brand-blue mb-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="description bg-brand-red text-white text-left px-5 py-3 text-base leading-relaxed tracking-wide">
                    <FontAwesomeIcon icon={['fas', 'quote-left']} className="mr-2 text-2xl" />{testimonial.text}
                  </p>
                </div>
                <div className="content bg-brand-blue py-1">
                  <h3 className="title inline-block text-white text-xl uppercase tracking-wider m-0">
                    {testimonial.name}
                  </h3>
                  <span className="post inline-block text-white text-sm ml-2">- {testimonial.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
