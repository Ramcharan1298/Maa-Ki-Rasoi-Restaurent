import React, { useState , useEffect } from "react";
import bg3 from "../Images/Bg-3.jpg";
import logo from "../Images/logo.png";
import { FaCartArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
// import Navbar from "./Navbar";
const menuSections = [
  { title: "COLLAB" },
  { title: "TOP SELLING" },
  { title: "SPECIAL MENU" },
  { title: "PEKING DUCK" },
  { title: "CHEF'S SPECIAL" },
  { title: "DUMPLINGS & APPETIZERS" },
  { title: "COLD DISH" },
  { title: "SOUP" },
  { title: "SEAFOOD" },
  { title: "BEEF & LAMB" },
  { title: "POULTRY" },
  { title: "PORK" },
  { title: "COLD DISH" },
  { title: "VEGETABLES" },
  { title: "NOODLES & RICE" },
  { title: "DESSERTS" },
  { title: "DRINKS" },
  { title: "NORTHERN STYLE NEWS" },
];

const OrderOnline = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [basketOpen, setBasketOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    // Delay scroll to top until fade-in is complete
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }); // match fade-in duration
    return () => clearTimeout(timer);
  }, []);
  // Scroll to accordion section when tab is clicked
  const handleTabClick = (sectionTitle) => {
    const idx = menuSections.findIndex(s => s.title === sectionTitle);
    setOpenAccordion(idx);
    setTimeout(() => {  
      const el = document.getElementById(`accordion-${idx}`);
      if (el) {
        // Scroll so the accordion is 120px from the top of the viewport
        const rect = el.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: rect.top + scrollTop - 10, // 120px offset from top
          behavior: 'smooth'
        });
      }
    }, 50);
  };
  return (
    <motion.div
      className={`font-sans mt-23 ${darkMode ? 'bg-[#181818] text-white' : 'bg-white text-black'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {/* Mobile Basket Icon */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-orange-500 text-white rounded-full shadow-lg p-4 flex items-center justify-center md:hidden"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
        onClick={() => setBasketOpen(true)}
        aria-label="Open Order Basket"
      >
        <svg width="32" height="32" viewBox="0 -3 20 24" fill="none"  className="mr-1 flex justify-center"><path d="M6 9l6 6 6-6"/><FaCartArrowDown className="text-xl ml-9"/></svg>
        {/* <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2 py-0.5">0</span> */}
      </button>
      {/* Mobile Basket Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 md:hidden ${basketOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ maxWidth: '90vw' }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">ORDER BASKET</h2>
          <button onClick={() => setBasketOpen(false)} className="text-gray-500 hover:text-orange-500 text-2xl" aria-label="Close Basket">&times;</button>
        </div>
        <div className="p-6">
          <div className="text-gray-600 mb-4">The store is open now.</div>
          <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-100 transition mb-4 w-full">
            PICKUP ONLY
          </button>
          <div className="mb-4">
            <label htmlFor="pickup-time-mobile" className="block text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
            <select id="pickup-time-mobile" className="w-full border border-gray-300 rounded px-3 py-2">
              <option>ASAP Please</option>
              <option>In 15 minutes</option>
              <option>In 30 minutes</option>
            </select>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">ORDER TOTAL</span>
            <span className="font-semibold">$0.00</span>
          </div>
          <div className="text-orange-500 text-sm mb-2 flex items-center"><span className="mr-1">⚠️</span>Add x1 menu item.</div>
          <button className="bg-orange-400 text-white font-semibold rounded-full px-6 py-3 w-full hover:bg-orange-500 transition">
            ORDER FOR PICKUP NOW
          </button>
        </div>
      </div>
      {/* Top Banner with Light/Dark Toggle */}
      <div className={`flex justify-between items-center px-4 py-2 text-sm ${darkMode ? 'bg-[#222] text-white' : 'bg-orange-500 text-white'}`}>
        <div>EN</div>
        <div>We are open!</div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-500 rounded-full"></div>  
          {/* Light/Dark Mode Toggle */}
          {/* <button
            className={`ml-4 flex items-center px-2 py-1 rounded-full border transition-colors duration-300 ${darkMode ? 'bg-[#333] border-[#444] text-yellow-300' : 'bg-white border-gray-300 text-gray-700'}`}
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle Light/Dark Mode"
          >
            {darkMode ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            )}
            <span className="text-xs font-semibold">{darkMode ? 'Dark' : 'Light'}</span>
          </button> */}
        </div>
      </div>

      {/* Main Section - Responsive stacking */}
      <div className="relative flex flex-col md:flex-row w-full">
        {/* Left Info Box */}
        <div className="w-full md:w-[700px] md:h-[300px] md:absolute md:left-8 md:top-22 bg-white/70 backdrop-blur-md p-6 rounded shadow-md max-w-sm mx-auto md:mx-0 z-10">
          <img
            src={logo}
            alt="Maa Ki...Rasoi Logo"
            className="rounded-full w-20 h-20 mb-2 mx-auto"
          />
          <h1 className="text-4xl font-BebasNeue text-center md:text-left">MAA KI...RASOI</h1>
          <h1 className="text-2xl font-semibold text-center md:text-left">We're Fresher! We're Tastier!</h1>
          <p className="text-gray-600 text-center md:text-left">Asian - Chinese</p>
          <div className="flex items-center justify-center md:justify-start mt-1">
            <span className="text-orange-500 text-lg">★</span>
            <span className="ml-1 text-gray-700">4.4</span>
          </div>
          <p className="text-sm text-black-700 mt-1 text-center md:text-left">
            32 Railway Ave, Ringwood East Vic 3135
          </p>
        </div>

        {/* Hero Image */}
        <img
          src={bg3}
          alt="Hero Rice Dish"
          className="w-full h-[220px] sm:h-[320px] md:h-[470px] object-cover mt-4 md:mt-0"
        />
      </div>




      {/* Navigation Tabs - Hide on mobile, add dropdown for MORE (click to open, right side) */}
      <div
        className="bg-gray-100 px-12 py-4 flex-wrap gap-10 text-xl border-b hidden sm:flex  z-30"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
      >
        <button className="hover:text-orange-600" onClick={() => handleTabClick("TOP SELLING")}>TOP SELLERS</button>
        <button className="hover:text-orange-600" onClick={() => handleTabClick("SPECIAL MENU")}>SPECIAL MENU</button>
        <button className="hover:text-orange-600" onClick={() => handleTabClick("PEKING DUCK")}>PEKING DUCK</button>
        <button className="hover:text-orange-600" onClick={() => handleTabClick("CHEF'S SPECIAL")}>CHEF'S SPECIAL</button>
        <button className="hover:text-orange-600" onClick={() => handleTabClick("DUMPLINGS & APPETIZERS")}>DUMPLINGS & APPETIZERS</button>
        <button className="hover:text-orange-600" onClick={() => handleTabClick("COLD DISH")}>COLD DISH</button>
        <button className="hover:text-orange-600" onClick={() => handleTabClick("SOUP")}>SOUP</button>
        <button className="hover:text-orange-600" onClick={() => handleTabClick("SEAFOOD")}>SEA FOOD</button>
        {/* Dropdown for MORE - right side, click to open */}
        <div className="relative ml-auto">
          <button
            className={`hover:text-orange-600 flex items-center ${moreOpen ? 'text-orange-600' : ''}`}
            onClick={() => setMoreOpen((open) => !open)}
          >
            MORE <span className="ml-1">▾</span>
          </button>
          {moreOpen && (
            <div className="absolute right-0 top-full mt-2 w-82 max-h-[70vh] overflow-y-auto bg-gray-100 shadow-lg rounded-lg py-2 z-20 border border-gray-200">
              <button className="block w-full text-sm text-right px-6 py-2 hover:bg-gray-200 hover:text-orange-600">BEEF & LAMB </button>
              <button className="block w-full text-sm text-right px-6 py-2 hover:bg-gray-200 hover:text-orange-600">POULTRY </button>
              <button className="block w-full text-sm text-right px-6 py-2 hover:bg-gray-200 hover:text-orange-600">PORK</button>
              <button className="block w-full text-sm text-right px-6 py-2 hover:bg-gray-200 hover:text-orange-600">NORTHERN STYLE STEWS</button>
              <button className="block w-full text-sm text-right px-6 py-2 hover:bg-gray-200 hover:text-orange-600">COLD DISH</button>
              <button className="block w-full text-sm text-right px-6 py-2 hover:bg-gray-200 hover:text-orange-600">VEGETABLES</button>
              <button className="block w-full text-sm text-right px-6 py-2 hover:bg-gray-200 hover:text-orange-600">NOODLES & RICE</button>
              <button className="block w-full text-sm text-right px-6 py-2 hover:bg-gray-200 hover:text-orange-600">DESSERT</button>
              <button className="block w-full text-sm text-right px-6 py-2 hover:bg-gray-200 hover:text-orange-600">DRINKS</button>
            </div>
          )}
        </div>
      </div>

      {/* Content and Basket - Responsive */}
      <div className="flex flex-col md:flex-row px-2 sm:px-4 py-6 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
        {/* Accordions */}
        <div className="flex-1 w-full max-w-2xl mx-auto md:mx-0">
          {menuSections.map((section, idx) => (
            <div key={section.title} id={`accordion-${idx}`} className="border-b border-gray-200">
              <button
                className="w-full flex items-center justify-between py-4 px-2 sm:px-4 text-left text-lg sm:text-xl font-semibold focus:outline-none hover:bg-gray-50 transition"
                aria-expanded={openAccordion === idx}
                onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
              >
                <span>{section.title}</span>
                <span className={`transform transition-transform duration-300 ${openAccordion === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {/* Accordion content placeholder */}
              {openAccordion === idx && (
                <div className="px-2 sm:px-4 pb-4 text-gray-700 animate-fadein">
                  <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm">
                    {section.title === "COLLAB" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a
                          href="https://www.swiggy.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col justify-between h-full px-5 py-4 rounded-lg bg-[#fc8019] text-white font-semibold shadow hover:bg-[#e5700b] transition"
                        >
                          <span className="text-lg font-bold mb-1">Swiggy</span>
                          <span className="text-sm mb-2">Order via Swiggy</span>
                          <span className="text-base font-normal">swiggy.com</span>
                        </a>
                        <a
                          href="https://www.zomato.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col justify-between h-full px-5 py-4 rounded-lg bg-[#e23744] text-white font-semibold shadow hover:bg-[#b81c2b] transition"
                        >
                          <span className="text-lg font-bold mb-1">Zomato</span>
                          <span className="text-sm mb-2">Order via Zomato</span>
                          <span className="text-base font-normal">zomato.com</span>
                        </a>
                      </div>
                    ) : (
                      <>Menu items for {section.title} will go here.</>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Order Basket - Responsive */}
        {/* Desktop Order Basket */}
        <div className="w-full md:w-1/3 md:pl-8 mt-6 md:mt-0 max-w-md mx-auto sticky top-[5.5rem] md:mx-0 hidden md:block">
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-lg font-semibold mb-2">ORDER BASKET</h2>
            <div className="text-gray-600 mb-4">The store is open now.</div>
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-100 transition mb-4 w-full">
              PICKUP ONLY
            </button>
            <div className="mb-4">
              <label htmlFor="pickup-time" className="block text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
              <select id="pickup-time" className="w-full border border-gray-300 rounded px-3 py-2">
                <option>ASAP Please</option>
                <option>In 15 minutes</option>
                <option>In 30 minutes</option>
              </select>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">ORDER TOTAL</span>
              <span className="font-semibold">$0.00</span>
            </div>
            <div className="text-orange-500 text-sm mb-2 flex items-center"><span className="mr-1">⚠️</span>Add x1 menu item.</div>
            <button className="bg-orange-400 text-white font-semibold rounded-full px-6 py-3 w-full hover:bg-orange-500 transition">
              ORDER FOR PICKUP NOW
            </button>
          </div>
        </div>
      </div>


    {/* Footer Section */}
    <footer className="w-full bg-[#333] text-white pt-6 pb-2 mt-12">
      <div className=" mx-7 px-0 py-5 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12">
        {/* Left: Navigation Links */}
        <div className="flex flex-col w-full md:w-2/3">
          <div className="flex text-xl  flex-wrap gap-6 items-center  font-normal mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span className="hidden sm:inline-block">|</span>
            <a href="/menu" className="hover:underline">Menu</a>
            <span className="hidden sm:inline-block">|</span>
            <a href="/" className="hover:underline">Privacy Policy</a>
            <span className="hidden sm:inline-block">|</span>
            <a href="/" className="hover:underline">Terms & Conditions</a>
          </div>
          <hr className="border-t border-white mb-2" />
          <div className="text-sm font-normal mb-2">© 2025 MAA KI...RASOI</div>
        </div>
        {/* Right: Powered by & Payment Icons */}
        <div className="flex flex-col items-end w-full md:w-1/3 gap-2">
          <div className="flex items-center gap-2 mb-2">
            {/* <span className="text-base font-normal">POWERED BY</span> */}
            {/* <img src="https://tuckerfox.com.au/wp-content/uploads/2022/09/tuckerfox-logo-white.png" alt="TuckerFox" className="h-6" /> */}
          </div>
          <div className="flex gap-2 items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="PayPal" className="h-6" />
            <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Mastercard" className="h-6" />
            <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Visa" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
    </motion.div>
  );
};

export default OrderOnline;
