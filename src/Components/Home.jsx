import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

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

export default function Home() {

  const gridRef = useRef(null);
  const { scrollY } = useScroll({ target: gridRef });

  const logoY = useTransform(scrollY, [0, 300], [0, -100]);
  const bgY = useTransform(scrollY, [0, 500], [0, -80]);

  // Scroll to grid layout when arrow is clicked
  const handleArrowClick = () => {
    if (gridRef.current) {
      const navbar = document.querySelector('nav, .navbar, header');
      let offset = 0;
      if (navbar) {
        offset = navbar.offsetHeight || 0;
      } else {
        // fallback: estimate 64px for mobile, 80px for desktop
        offset = window.innerWidth < 640 ? 64 : 80;
      }
      const gridTop = gridRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: gridTop - offset,
        behavior: 'smooth',
      });
    }
  };
    // Scroll to top on route change
useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  return (
    <motion.div
      className="relative w-full min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Fixed Parallax Background */}
      <motion.div
        className="fixed inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: bgY,
        }}
      />

      {/* Logo & Text Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center min-h-screen pt-24 bg-transparent"
        style={{ y: logoY }}
      >
        <img
          src={logo}
          alt="Yang's Place"
          className="w-50 h-50 rounded-full shadow-lg shadow-black/80 mb-10"
        />
        <div className="text-6xl font-bold text-gray-900 mb-2 backdrop-blur-md font-BebasNeue">
          MAA...KI RASOI
        </div>
      
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-Oswald backdrop-blur-md px-2 sm:px-4 text-center">
          We're fresher! we're tastier!
        </div>
        <button
          aria-label="Scroll to content"
          onClick={handleArrowClick}
          className="mt-10 mb-2 flex  items-center justify-center focus:outline-none"
          style={{ background: "none", border: "none", padding: 0 }}
        >
          <span
            className="animate-bounce text-black-500 cursor-pointer"
            style={{
              fontSize: "3.5rem",
              lineHeight: 1,
              display: "inline-block",
              margin: 0,
              padding: 0,
              // Responsive size
              minWidth: "3.5rem",
              minHeight: "3.5rem",
            }}
          >
            ↓
          </span>
        </button>
      </motion.div>

      {/* Grid Layout Section (Responsive) - Removed bottom margin */}
      <div
        ref={gridRef}
        className="w-full max-w-screen-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-0 p-0 m-0 mb-0"
        style={{ marginTop: "-6rem", marginBottom: "0" }}
      >
        {/* First Row */}
        <Link
          to="/OrderOnline"
          className="flex items-center justify-center bg-gray-100 h-60 md:h-76 group p-0 m-0 col-span-1 md:col-span-1 row-span-1"
        >
          <div className="w-20 h-20 md:w-30 md:h-30 rounded-full bg-orange-500 flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
          <motion.span
            className="text-white font-bold text-sm md:text-base text-center leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            ORDER
            <br />
            ONLINE
          </motion.span>
          </div>
        </Link>

        <div
          className="bg-cover bg-center h-60 md:h-76 p-0 m-0 col-span-1 md:col-span-1 row-span-1"
          style={{ backgroundImage: `url(${pic1})` }}
        />

        <Link
          to="/Menu"
          className="flex items-center justify-center bg-[#2c5a63] h-60 md:h-76 group p-0 m-0 col-span-1 md:col-span-1 row-span-1"
        >
          <motion.span
            className="text-white text-base md:text-xl font-semibold tracking-widest group-hover:underline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            MENU
          </motion.span>
        </Link>

        <div
          className="bg-cover bg-center h-60 md:h-76 p-0 m-0 col-span-1  row-span-1 md:col-span-1"
          style={{ backgroundImage: `url(${pic2})` }}
        />

        {/* Second Row */}
        <div
          className="bg-cover bg-center h-60 md:h-76 p-0 m-0 col-span-2 md:col-span-1 row-span-1"
          style={{ backgroundImage: `url(${pic3})` }}
        />

        <Link
          to="/About"
          className="flex items-center justify-center bg-[#0a2239] h-60 md:h-76 group p-0 m-0 col-span-1 md:col-span-1 row-span-1"
        >
          <motion.span
            className="text-white text-sm md:text-xl font-semibold tracking-widest group-hover:underline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            ABOUT · US
          </motion.span>
        </Link>

        <div
          className="bg-cover bg-center h-60 md:h-76 p-0 m-0 col-span-2 md:col-span-2 row-span-1"
          style={{ backgroundImage: `url(${pic4})` }}
        />

        {/* Third Row - New Boxes */}
        <div
          className="bg-cover bg-center h-60 md:h-76 p-0 m-0 col-span-1 md:col-span-1 row-span-1"
          style={{ backgroundImage: `url(${pic5})` }}
        />

        <div
          className="bg-cover bg-center h-60 md:h-76 p-0 m-0 col-span-1 md:col-span-1 row-span-1"
          style={{ backgroundImage: `url(${pic6})` }}
        />
        <Link
          to="/Contact"
          className="flex items-center justify-center bg-[#ffffff] h-60 md:h-76 group p-0 m-0 col-span-1 md:col-span-1 row-span-1"
        >
          <motion.span
            className="text-black text-sm md:text-xl font-semibold tracking-widest group-hover:underline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            CONTACT & <br /> LOCATION
          </motion.span>
        </Link>

        <div
          className="bg-cover bg-center h-60 md:h-76 p-0 m-0 col-span-1 md:col-span-1 row-span-1"
          style={{ backgroundImage: `url(${pic7})` }}
        />
      </div>

      {/* Our Story Section - Now seamlessly attached to grid section */}
      <div className="-mt-13">
        <section className="w-full bg-[#0a2239] py-0 pt-20 pb-20 px-0 md:px-16 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-0 md:mb-0">
            <motion.h2
              className="text-white text-2xl md:text-3xl font-bold tracking-widest mb-2 text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              OUR STORY
            </motion.h2>
            <div className="w-32 md:w-64 h-px bg-white mb-6"></div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <motion.p
              className="text-gray-300 text-lg md:text-xl leading-relaxed mt-9 mb-8 text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              We are a family owned and run business with many years of culinary
              Chinese cuisine experience. Gaining expertise in Five Star Hotels
              in China and continuing by working with many well known Chinese
              chefs and restaurants in Melbourne.
            </motion.p>
            <motion.a
              className="text-white text-lg font-semibold underline underline-offset-4 hover:text-gray-300 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            >
              Read More &gt;
            </motion.a>
          </div>
        </section>
      </div>

{/* Footer Section - matches provided image */}
      <footer className="w-full bg-[#fafafa] py-10 flex flex-col items-center justify-center">
        <motion.div
          className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12 mb-8 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Left Side: Contact Info */}
          <motion.div
            className="flex flex-col items-center md:items-end w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.button
              className="border-2 border-[#0a2239] rounded-full px-6 py-2 sm:px-8 sm:py-3 text-lg sm:text-2xl text-[#0a2239] font-normal mb-6 sm:mb-8 focus:outline-none transition-all duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              03 9870 1368
            </motion.button>
            <motion.div
              className="text-lg sm:text-2xl text-[#0a2239] font-normal text-center md:text-right break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
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
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <motion.div
              className="text-2xl sm:text-3xl text-[#0a2239] font-normal mb-6 sm:mb-8 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
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
                transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
              />
              <motion.button
                type="submit"
                className="border-2 border-[#0a2239] px-6 py-2 sm:px-8 sm:py-2 ml-0 sm:ml-2 text-[#0a2239] text-base sm:text-lg font-normal hover:bg-[#0a2239] hover:text-white transition-colors w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
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
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
        >
          Maa Ki...Rasoi © 2025 brand and website designed by <span className="font-bold">RC</span>
        </motion.div>
      </footer>
    </motion.div>
  );
}
