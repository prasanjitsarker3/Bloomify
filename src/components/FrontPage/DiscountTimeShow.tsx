/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const DiscountTimeShow = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [noGlassImage, setNoGlassImage] = useState<number | null>(null); // Explicit type


  // Set the target date for the discount deadline
  const discountDeadline = new Date("2024-12-31T23:59:59").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = discountDeadline - now;

      if (timeRemaining <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [discountDeadline]);

  const bannerImage = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/wood-desk-with-laptop-plant_23-2148267494.jpg?ga=GA1.1.1524916337.1735299616&semt=ais_hybrid",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/potted-plants-with-blank-slate-desk_23-2147929460.jpg?ga=GA1.1.1524916337.1735299616&semt=ais_hybrid",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/pot-plant-with-stack-books-desk_1170-847.jpg?ga=GA1.1.1524916337.1735299616&semt=ais_hybrid",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/wood-desk-with-laptop-plant_23-2148267494.jpg?ga=GA1.1.1524916337.1735299616&semt=ais_hybrid",
    },
  ];


  useEffect(() => {
    const glassEffectTimer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * bannerImage.length);
      setNoGlassImage(bannerImage[randomIndex].id);
    }, 2000);

    return () => clearInterval(glassEffectTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full container mx-auto py-12 md:px-0 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-100">
        {/* Left Section */}

        <div className=" px-4 md:px-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold primaryColor">
              Don't Miss The Deal!
            </h1>
            <h2 className="text-sm md:mr-0 mr-12 md:text-xl font-semibold text-slate-600">
              Don't miss out on our exclusive offers! Special discounts on all
              your favorite plants and gardening essentials are ending soon—shop
              now to make your space greener!
            </h2>

            <div className="flex md:space-x-4 space-x-4 text-base md:text-xl font-semibold text-gray-600">
              <div className=" bg-[#028355] text-white text-center rounded-lg md:p-3 p-1 overflow-hidden">
                <span className="md:text-4xl text-xl font-bold ">
                  {timeLeft.days}
                </span>{" "}
                Days
              </div>
              <div className=" bg-[#028355] text-white text-center rounded-lg md:p-3 p-1 overflow-hidden">
                <span className="md:text-4xl text-xl font-bold text-primaryColor">
                  {timeLeft.hours}
                </span>{" "}
                Hours
              </div>
              <div className=" bg-[#028355] text-white text-center rounded-lg md:p-3 p-1 overflow-hidden">
                <span className="md:text-4xl text-xl font-bold text-primaryColor">
                  {timeLeft.minutes}
                </span>{" "}
                Minutes
              </div>
              <div className=" bg-[#028355] text-white text-center rounded-lg md:p-3 p-1 overflow-hidden">
                <span className="md:text-4xl text-xl font-bold text-primaryColor">
                  {timeLeft.seconds}
                </span>{" "}
                Seconds
              </div>
            </div>
            <button className="border border-[#028355] hover:bg-[#028355] hover:text-white transition duration-300 ease-in-out primaryColor  py-2 px-12 rounded-full">
              Get The Deal
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
      {bannerImage.map((image, index) => {
        const heightClass = 
          index === 0 ? "h-[15rem]" : 
          index === 1 ? "h-[13rem]" : 
          index === 2 ? "h-[13rem]" : 
          "h-[15rem] -mt-8";

        return (
          <div
            key={image.id}
            onMouseEnter={() => setNoGlassImage(image.id)}
            onMouseLeave={() => setNoGlassImage(null)}
            className={`relative overflow-hidden rounded-lg ${heightClass} ${
              noGlassImage === image.id ? "" : " bg-white/20 backdrop-blur-xl"
            }`}
          >
            <Image
              src={image.img}
              alt=""
              width={300}
              height={300}
              className={`h-full w-full object-cover transition duration-300 ease-in-out ${
                noGlassImage === image.id ? "blur-none" : " blur-lg"
              }`}
            />
          </div>
        );
      })}
    </div>
      </div>
    </div>
  );
};

export default DiscountTimeShow;
