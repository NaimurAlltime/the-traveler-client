import { useEffect, useState } from "react";
import Package from "./Package";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {
  FreeMode,
  HashNavigation,
  Navigation,
  Pagination,
} from "swiper/modules";

const PopularPackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("popularPackages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div>
      {/* <!-- Title --> */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-12">
        <h2 className="text-2xl font-normal md:text-3xl md:leading-tight dark:text-white">
          Most Popular <span className="font-semibold">Packages</span>
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Families couples workaholics, adventures, find your own piece of
          paradise
        </p>
      </div>
      <Swiper
        slidesPerView={1} // Set the initial number of slides to show on mobile
        spaceBetween={10} // Set the space between slides
        freeMode={true}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation, HashNavigation]}
        className="mySwiper max-w-screen-xl mx-auto"
        breakpoints={{
          // Add breakpoints for larger screen sizes
          640: {
            slidesPerView: 2, // Number of slides to show on screens wider than 640px
            spaceBetween: 20, // Space between slides on screens wider than 640px
          },
          1024: {
            slidesPerView: 3, // Number of slides to show on screens wider than 1024px
            spaceBetween: 30, // Space between slides on screens wider than 1024px
          },
        }}
      >
        <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {packages.map((item) => (
            <SwiperSlide key={item.id}>
              <Package item={item}></Package>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {/* <!-- End Title --> */}
    </div>
  );
};

export default PopularPackages;
