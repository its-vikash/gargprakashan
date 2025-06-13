import React, {useState, useEffect} from "react";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import HeroSlider from "./components/HeroSlider";
import Testimonials from "./components/Testimonials";
import Footer from "./layouts/Footer";
import BookSlider from "./components/BookSlider";
import TopVendors from "./components/TopVendors";
import OfferBanners from "./components/OfferBanners";
import Newsletter from "./components/NewsLetter";
import BrowseByGenre from "./components/BrowsByGenre";
import BookLoader from "./components/BookLoader/BookLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white h-screen">
        <BookLoader />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="max-w-[1300px] mx-auto grid grid-cols-4 gap-6 px-6 xl:px-0">
        <Sidebar />
        <div className="col-span-3"><HeroSlider /></div>
      </div>
      <BookSlider />
      <OfferBanners />
      <BrowseByGenre />
      <div className="bg-[#DAE2D5]">
        <TopVendors />
      </div>
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}


export default App;