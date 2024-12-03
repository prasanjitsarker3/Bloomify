import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1D1D1D]">
      <div className="w-full container mx-auto text-white p-6 md:p-10">
        <div className="grid grid-cols-12 gap-8 py-8">
          {/* Left Section */}
          <div className="col-span-12 md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Link
                href={"/"}
                className="text-2xl md:text-4xl font-bold vigaRegular"
              >
                We
                <span className="font-bold vigaRegular primaryColor">5</span>
                ive
              </Link>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Saepe quo
              suscipit vitae quia. Repudiandae nobis quis suscipit saepe quo
              vitae quia.
            </p>
          </div>

          {/* About Us */}
          <div className="col-span-12 md:col-span-3 space-y-2">
            <h1 className="text-lg font-semibold">About Us</h1>
            <p className="text-sm md:text-base">Contact Us</p>
          </div>

          {/* Privacy Policy */}
          <div className="col-span-12 md:col-span-3 space-y-2">
            <h1 className="text-lg font-semibold">Privacy Policy</h1>
            <p className="text-sm md:text-base">Terms & Conditions</p>
          </div>

          {/* Social Links */}
          <div className="col-span-12 md:col-span-2 space-y-2">
            <h1 className="text-lg font-semibold">Social Links</h1>
            <div className="flex gap-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-gray-400" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-gray-400" />
              <Linkedin className="h-6 w-6 cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="primaryColorBg py-4 text-center text-white text-sm">
        <p>© 2024 | We5ive</p>
      </div>
    </div>
  );
};

export default Footer;
