import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <div className=" w-full container mx-auto md:px-0 px-4 py-12">
      <div className=" h-96 flex justify-center items-center text-center bg-gray-100 rounded-xl text-slate-600">
        <div className=" space-y-3">
          <div className=" space-y-1">
            <h1 className=" text-center text-2xl lg:text-3xl font-medium ">
              Subscribe to our email   
            </h1>
            <h1 className=" text-center text-2xl lg:text-3xl font-medium ">
              newsletter and get 15% off
            </h1>
          </div>
          <p className=" text-lg font-normal ">
            Be the first to know about the latest in tech trends, exclusive
            offers, and exciting product launches by subscribing to our
            newsletter.
          </p>
          <div className=" space-x-4">
            <input
              placeholder="Your Email Address"
              className=" py-3 2xl:py-4 px-6 2xl:px-8 rounded-full w-96"
            />
            <button className=" py-3 2xl:py-4  px-6 2xl:px-8 rounded-full bg-primary text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
