"use client";
import { Facebook, Instagram, Linkedin, MapPin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.div
      className="relative bg-slate-950 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-10 flex justify-center items-center overflow-hidden">
        <div
          className="w-full h-full bg-gradient-radial from-transparent via-[#028355] to-transparent opacity-100 blur-lg"
          style={{
            background: `radial-gradient(circle, rgba(2,131,85,0) 0%, rgba(2,131,85,0.8) 50%, rgba(2,131,85,0) 100%)`,
          }}
        />
      </div>

      {/* Glass Effect Container */}
      <div className="relative z-20 rounded-xl p-6 md:p-10 backdrop-blur-xl bg-slate-950/70">
        <div className=" w-full container mx-auto md:px-0 px-4">
          <div className="grid grid-cols-12 gap-8 py-8 text-white">
            {/* Left Section */}
            <div className="col-span-12 md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src={"/leaf.png"}
                  alt=""
                  width={60}
                  height={60}
                  className=" md:h-12 md:w-12 h-8 w-8"
                />
                <Link
                  href={"/"}
                  className="text-xl md:text-3xl font-bold vigaRegular"
                >
                  Bloomify
                </Link>
              </div>
              <div>
                <h1>
                  Selling premium products, designed to elevate your everyday
                  experience
                </h1>
              </div>
              <div className=" border-b border-gray-100 w-full"></div>
              <div className=" flex items-center gap-4">
                <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white/30 backdrop-blur-md shadow-lg cursor-pointer">
                  <Facebook className="text-white" />
                </div>
                <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white/30 backdrop-blur-md shadow-lg cursor-pointer">
                  <Twitter className="text-white" />
                </div>
                <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white/30 backdrop-blur-md shadow-lg cursor-pointer">
                  <Linkedin className="text-white" />
                </div>
                <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white/30 backdrop-blur-md shadow-lg cursor-pointer">
                  <Instagram className="text-white" />
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className=" col-span-12 md:col-span-4 space-y-4">
              <div className=" w-full mx-auto flex gap-12 justify-center items-center">
                <div className=" space-y-1">
                  <h1 className=" text-xl font-semibold pb-2">Pages</h1>
                  <h1 className="text-lg font-normal">Home</h1>
                  <h1 className="text-lg font-normal">Shop</h1>
                  <p className="text-lg font-normal">Category</p>
                  <p className="text-lg font-normal">Product</p>
                </div>
                <div className=" space-y-1">
                  <h1 className=" text-xl font-semibold pb-2">Support</h1>
                  <h1 className="text-lg font-normal">About Us</h1>
                  <h1 className="text-lg font-normal">Contact</h1>
                  <p className="text-lg font-normal">FAQ</p>
                  <p className="text-lg font-normal">Info</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-12 md:col-span-4 space-y-2">
              <div className="h-44 w-full relative">
                {/* Map Image */}
                <Image
                  src="/mp2.png"
                  alt="Map"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />

                {/* Active Icon */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="h-10 w-10 flex justify-center items-center bg-primary rounded-full shadow-lg">
                    <MapPin/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
