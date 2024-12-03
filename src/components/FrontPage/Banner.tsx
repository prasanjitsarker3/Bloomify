/* eslint-disable react/no-unescaped-entities */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-white h-[100vh]">
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="default-carousel"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="grid grid-cols-12 items-center gap-4 h-[100vh] md:pt-0 pt-12">
              {/* Left Content */}
              <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
                <h1 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Upto <span className=" primaryColor">75% Off</span>
                </h1>
                <h2 className="text-xl lg:text-5xl font-semibold primaryColor mb-4">
                  Plant Big Sale
                </h2>
                <p className="text-2xl text-gray-800 mb-6">
                  Embrace the beauty of nature with our exclusive limited-time
                  offer! Whether you're a seasoned plant enthusiast or just
                  starting your green journey.
                </p>
                <button className="primaryColorBg text-white py-2 px-6 rounded-md">
                  Shop Now
                </button>
              </div>

              {/* Right Content */}
              <div className=" md:h-full h-72 col-span-12 lg:col-span-6 flex justify-center">
                <Image
                  src="/Palt1.png"
                  alt="Plant Sale"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="grid grid-cols-12 items-center gap-4 h-[100vh] px-4 lg:px-12">
              {/* Left Content */}
              <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Refresh Your Space
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-600 mb-2">
                  Indoor Plants Collection
                </h2>
                <p className="text-lg text-gray-500 mb-6">
                  Add greenery to your home with beautiful indoor plants.
                </p>
                <button className="primaryColorBg text-white py-2 px-6 rounded-md hover:bg-green-700">
                  Explore Now
                </button>
              </div>

              {/* Right Content */}
              <div className="col-span-12 lg:col-span-6 flex justify-center">
                <Image
                  src="https://img.freepik.com/free-photo/small-green-plant-white-ceramic-pot_53876-121414.jpg"
                  alt="Indoor Plants"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="grid grid-cols-12 items-center gap-4 h-[100vh] px-4 lg:px-12">
              {/* Left Content */}
              <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Limited Time Offer
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-600 mb-2">
                  Outdoor Plants Sale
                </h2>
                <p className="text-lg text-gray-500 mb-6">
                  Create a serene garden space with outdoor plants.
                </p>
                <button className="primaryColorBg text-white py-2 px-6 rounded-md hover:bg-green-700">
                  Buy Now
                </button>
              </div>

              {/* Right Content */}
              <div className="col-span-12 lg:col-span-6 flex justify-center">
                <Image
                  src="https://img.freepik.com/free-photo/outdoor-garden-plants-pot_53876-120905.jpg"
                  alt="Outdoor Plants"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
