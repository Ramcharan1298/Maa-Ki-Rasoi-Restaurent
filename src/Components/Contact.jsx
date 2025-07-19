import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import bg4 from "../Images/Bg-4.jpg";
// import logo from "../Images/logo.png"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import { motion, useScroll, useTransform } from 'framer-motion';

// Image imports
import logo from "../Images/logo.png";
import heroBg from "../Images/Bg-Image.png";
import pic1 from "../Images/FoodDishes/pic-1.jpg";
import pic2 from "../Images/FoodDishes/pic-2.jpg";
import pic3 from "../Images/FoodDishes/pic-3.jpg";
import pic4 from "../Images/FoodDishes/pic-4.jpg";
import pic5 from "../Images/FoodDishes/pic-5.jpg";
import pic6 from "../Images/FoodDishes/pic-6.jpg";
import pic7 from "../Images/FoodDishes/pic-7.jpg";

export default function Contact() {
  const gridRef = useRef(null);
  const { scrollY } = useScroll({ target: gridRef });

  const logoY = useTransform(scrollY, [0, 300], [0, -100]);
  const bgY = useTransform(scrollY, [0, 500], [0, -80]);

  // Replace with your own Google Maps API key
  const GOOGLE_MAPS_API_KEY = "AIzaSyDwgZTvnwtGi8ZhD4ss-cSMlm3aXt8uCro";
  // Restaurant location: Ringwood East Vic 3135
  const center = { lat: 17.42, lng: 78.45 };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      className="relative w-full min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Fixed Parallax Background */}
      <motion.div
        className="fixed inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: bgY,
        }}
      />

      {/* Logo & Text Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center min-h-screen pt-24 bg-transparent"
        style={{ y: logoY }}
      ></motion.div>

      {/* Grid Layout Section (Responsive) - Removed bottom margin */}
      <div
        ref={gridRef}
        className="w-full max-w-screen-8xl mx-auto  gap-0 p-0 m-0 mb-0"
        style={{ marginTop: "-6rem", marginBottom: "0" }}
      >
        {/* First Row */}
        <motion.div
          className="w-full max-w-10xl h-[400px] rounded-lg overflow-hidden shadow-lg"
          // style={{ y: mapY }}
          // initial={{ opacity: 0, x: 120 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true, amount: 0.5 }}
          // transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
        >
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Loading map...
            </div>
          )}
        </motion.div>
      </div>

      {/* Our Story Section - Now seamlessly attached to grid section */}
      <div className="bg-white">
        <form className="w-full max-w-3xl mx-auto px-4 py-10 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1 flex flex-col">
              <label htmlFor="name" className="text-lg text-[#0a2239] mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border-b border-[#0a2239] focus:border-blue-500 outline-none py-2 px-1 text-lg bg-transparent"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="text-lg text-[#0a2239] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border-b border-[#0a2239] focus:border-blue-500 outline-none py-2 px-1 text-lg bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-lg text-[#0a2239] mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="border-b border-[#0a2239] focus:border-blue-500 outline-none py-2 px-1 text-lg bg-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg text-[#0a2239] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="border-b border-[#0a2239] focus:border-blue-500 outline-none py-2 px-1 text-lg bg-transparent resize-none"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="border-b border-[#0a2239] text-lg text-[#0a2239] px-8 py-2 bg-transparent hover:text-blue-600 transition-all"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section - matches provided image */}
      <footer className="w-full bg-[#fafafa] py-10 flex flex-col items-center justify-center">
        <motion.div
          className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12 mb-8 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Side: Contact Info */}
          <motion.div
            className="flex flex-col items-center md:items-end w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.button
              className="border-2 border-[#0a2239] rounded-full px-6 py-2 sm:px-8 sm:py-3 text-lg sm:text-2xl text-[#0a2239] font-normal mb-6 sm:mb-8 focus:outline-none transition-all duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              03 9870 1368
            </motion.button>
            <motion.div
              className="text-lg sm:text-2xl text-[#0a2239] font-normal text-center md:text-right break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              32 Railway Ave Ringwood East
            </motion.div>
          </motion.div>

          {/* Right Side: Newsletter */}
          <motion.div
            className="flex flex-col items-center md:items-start w-full md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="text-2xl sm:text-3xl text-[#0a2239] font-normal mb-6 sm:mb-8 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              Stay up to date
            </motion.div>
            <form className="flex flex-col sm:flex-row items-center w-full max-w-md gap-4 sm:gap-0">
              <motion.input
                type="email"
                placeholder="Email Address"
                className="border-b-2 border-[#0a2239] bg-transparent px-4 py-2 text-[#0a2239] text-base sm:text-lg focus:outline-none w-full sm:w-2/3 mb-4 sm:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              />
              <motion.button
                type="submit"
                className="border-2 border-[#0a2239] px-6 py-2 sm:px-8 sm:py-2 ml-0 sm:ml-2 text-[#0a2239] text-base sm:text-lg font-normal hover:bg-[#0a2239] hover:text-white transition-colors w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full text-center text-[#222] text-sm sm:text-base font-normal mt-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        >
          Maa Ki...Rasoi © 2025 brand and website designed by{" "}
          <span className="font-bold">RC</span>
        </motion.div>
      </footer>
    </motion.div>
  );
}
