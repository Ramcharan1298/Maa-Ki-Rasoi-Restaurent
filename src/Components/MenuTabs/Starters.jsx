import React from "react";
import { NavLink } from "react-router-dom";
// import pic2 from "../Images/FoodDishes/pic-2.jpg";
import starter from "..//../Images/FoodDishes/pic-2.jpg";

const Starters = () => {


  return (
    <div className="w-full bg-white text-center">

      {/* Centered pattern with food overlay */}
      <div className="relative flex justify-center items-center w-full" style={{ minHeight: '320px' }}>
        <img
          src={starter}
          alt="pattern"
          className="w-[990px] h-[350px] object-cover  mt-25  object-center rounded-none"
          style={{ maxWidth: '90vw' }}
        />

      </div>

      {/* Tabs as Route Links - Responsive and professional */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6 text-base sm:text-lg md:text-xl font-semibold text-blue-900">
        <NavLink
          to="/menu"
          end
          className={({ isActive }) =>
            `px-2 pb-1 transition-colors duration-200 rounded focus:outline-none ${
              isActive ? 'text-[#0a2239] border-b-2 border-[#D4AF37] bg-[#f8f8f8]' : 'hover:text-[#D4AF37] border-b-2 border-transparent'
            }`
          }
        >
          MAA KI...RASOI MENU
        </NavLink>
        <NavLink
          to="/menu/starters"
          className={({ isActive }) =>
            `px-2 pb-1 transition-colors duration-200 rounded focus:outline-none ${
              isActive ? 'text-[#0a2239] border-b-2 border-[#D4AF37] bg-[#f8f8f8]' : 'hover:text-[#D4AF37] border-b-2 border-transparent'
            }`
          }
        >
          STARTERS
        </NavLink>
        <NavLink
          to="/menu/mains"
          className={({ isActive }) =>
            `px-2 pb-1 transition-colors duration-200 rounded focus:outline-none ${
              isActive ? 'text-[#0a2239] border-b-2 border-[#D4AF37] bg-[#f8f8f8]' : 'hover:text-[#D4AF37] border-b-2 border-transparent'
            }`
          }
        >
          MAINS
        </NavLink>
        <NavLink
          to="/menu/desserts"
          className={({ isActive }) =>
            `px-2 pb-1 transition-colors duration-200 rounded focus:outline-none ${
              isActive ? 'text-[#0a2239] border-b-2 border-[#D4AF37] bg-[#f8f8f8]' : 'hover:text-[#D4AF37] border-b-2 border-transparent'
            }`
          }
        >
          DESSERTS
        </NavLink>
      </div>

      {/* Active tab heading */}
      <div className="mt-8 text-left max-w-6xl mx-auto px-4">
        <h2 className="text-blue-900 text-sm font-semibold mb-12"></h2>

        {/* Section Title */}
        <h1 className="text-2xl text-blue-900 font-semibold text-center mb-4">
          DUMPLINGS & APPETIZERS
        </h1>
        <hr className="border-t-2 border-blue-900 w-full sm:w-3/4 md:w-[700px] lg:w-[990px] mx-auto" />
      </div>
    </div>
  );
};

export default Starters;
