import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const banners = [
  {
    title: "Up To 20% Off",
    subtitle: "Enjoy The Weekend\nWith Good Books",
    btnText: "Contact Us",
    bg: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h7-bn-3.jpg",
    align: "left",
    textColor: "text-white",
  },
  {
    title: "Special Offer",
    subtitle: "20% Off\nBest bookshelf in town",
    btnText: "Contact Us",
    bg: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h7_bn-2.jpg",
    align: "left",
    textColor: "text-white",
  },
];

const OfferBanners = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 px-6 py-10 lg:px-0 max-w-[1300px] mx-auto">
      {banners.map((banner, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl overflow-hidden shadow-md group cursor-pointer"
          style={{
            backgroundImage: `url(${banner.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "240px",
          }}
        >
          <div className={`flex items-center h-full p-8 ${banner.textColor}`}>
            <div className={`space-y-2`}>
              <p className="text-sm font-semibold">{banner.title}</p>
              <h3 className="text-xl md:text-2xl font-bold whitespace-pre-line leading-tight">
                {banner.subtitle}
              </h3>
              <button className="mt-4 inline-flex items-center font-semibold text-sm group-hover:underline transition duration-300">
                {banner.btnText}<FontAwesomeIcon icon={['fas', 'arrow-right-long']} className="ml-2 text-sm" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OfferBanners;
