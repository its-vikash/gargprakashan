import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#262626] text-white text-sm">
            <div className="max-w-[1300px] mx-auto px-4 lg:px-0 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="md:pr-8 md:mr-8 md:border-r border-r-[#554949]">
                            <div className="footer-logo">
                                <img
                                    src={new URL("../assets/images/footer-logo.png", import.meta.url).href}
                                    className="max-w-[150px]"
                                    alt="Garg Prakashan"
                                />
                            </div>
                            <p className="mt-6 text-[#7c7c7c] text-sm">
                                Garg Prakashan, Ram Mandir Chauraha, Phalka
                                Bazar Rd, Patankar Bazar Gwalior, Madhya
                                Pradesh, India - 474009
                            </p>
                            <a
                                href="#"
                                className="mt-6 inline-block border-b border-white hover:text-red-500 transition text-sm"
                            >
                                SHOW ON MAP
                            </a>
                            <div className="mt-8 flex space-x-4 text-lg text-[#7c7c7c]">
                                <FontAwesomeIcon
                                    icon={["fab", "facebook"]}
                                    className="hover:text-red-500 transition"
                                />
                                <FontAwesomeIcon
                                    icon={["fab", "x-twitter"]}
                                    className="hover:text-red-500 transition"
                                />
                                <FontAwesomeIcon
                                    icon={["fab", "instagram"]}
                                    className="hover:text-red-500 transition"
                                />
                                <FontAwesomeIcon
                                    icon={["fab", "youtube"]}
                                    className="hover:text-red-500 transition"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col lg:gap-12">
                            <div>
                              <h5 className="font-semibold text-white mb-4">
                                  Need Help
                              </h5>
                              <a href="mailto:info@gargprakashan.com" className="mt-4 block text-brand-red hover:text-white text-2xl">
                                  +91-903 9826 267
                              </a>
                            </div>
                            <div>
                              <p className="mt-2 text-[#7c7c7c]">
                                  Monday – Friday: 9:00–20:00
                              </p>
                              <p className="text-[#7c7c7c]">
                                  Saturday: 11:00 – 15:00
                              </p>
                            </div>
                            <a href="mailto:info@gargprakashan.com" className="mt-2 text-white hover:text-brand-red text-lg">
                                <FontAwesomeIcon
                                    icon={["fas", "envelope"]}
                                    className="hover:text-red-500 transition mr-2"
                                />info@gargprakashan.com
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                        <div>
                            <h5 className="font-semibold text-white mb-4">Explore</h5>
                            <ul className="space-y-2 text-[#7c7c7c]">
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">About us</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Sitemap</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Bookmarks</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Sign in/Join</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-semibold text-white mb-4">Our Service</h5>
                            <ul className="space-y-2 text-[#7c7c7c]">
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Help Center</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Returns</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Product Recalls</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Accessibility</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Contact Us</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Store Pickup</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-semibold text-white mb-4">Categories</h5>
                            <ul className="space-y-2 text-[#7c7c7c]">
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Action</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Comedy</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Drama</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Horror</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-brand-red">Kids</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-brand-blue py-4 px-4 lg:px-0 text-white text-sm border-t border-gray-700">
                <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p>
                        Copyright ©{" "}
                        <a href="/" className="text-red-500 mr-2 pr-2 border-r">
                            Garg Prakashan
                        </a>{" "}
                        All rights reserved.
                    </p>
                    <ul className="flex m-0 mt-4 md:mt-0 list-unstyled p-0">
                        <li className="pr-2 mr-2 border-r">
                            <a href="#" className="hover:text-brand-red">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="pr-2 mr-2 border-r">
                            <a href="#" className="hover:text-brand-red">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-brand-red">
                                Disclaimer
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Back to Top */}
            {showTopBtn && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-brand-red text-white px-3.5 py-3 border-2 border-brand-blue shadow-lg hover:bg-brand-blue transition-all duration-300 z-50 leading-none flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={["fas", "arrow-up-long"]} />
                </button>
            )}
        </footer>
    );
};

export default Footer;
