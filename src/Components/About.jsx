import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import Bg from "../Images/Bg-2.jpg";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    // Delay scroll to top until fade-in is complete
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },); // match fade-in duration
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      className="bg-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <div className="relative flex font-extrabold text-[rgb(0,46,93)]  text-2xl justify-center items-center mt-32 w-full">
        <h1>OUR TASTE OF MAA KI...RASOI</h1>
      </div>
      <div
        className="relative flex justify-center items-center w-full"
        style={{ minHeight: "320px" }}
      >
        <img
          src={Bg}
          alt="pattern"
          className="w-[990px] mt-10 max-w-[990px] h-[180px] sm:h-[250px] md:h-[300px] lg:h-[450px] object-cover object-center rounded-none"
          style={{ maxWidth: "98vw" }}
        />
      </div>

      <div className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-32 font-sans">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16">
          {/* Heading with divider - left side */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-blue-900 whitespace-nowrap uppercase letter-spacing-wide">
              ABOUT US
            </h2>
            <div className="ml-4 flex-grow mt-3 h-px bg-blue-900 hidden md:block" />
            {/* <div className="ml-4 flex-grow h-px bg-blue-900 block md:hidden" style={{ minWidth: '40vw' }} /> */}
          </div>
          {/* Paragraph Content - right side */}
          <div className="w-full md:w-2/3 ">
            <p className="text-[1.45rem] sm:text-2xl md:text-[1.65rem] lg:text-[1.7rem] text-blue-900 leading-[2.3rem] md:leading-[2.5rem] text-left font-normal">
              After successfully owning and running New Marigold Hong Kong Dining in Doncaster with an excellent reputation and great support by loyal customers.
              My husband, (Yang) and I (Juan) have recently opened "Yangs" a vibrant new restaurant located in Ringwood East.
              We aim to deliver delicious traditional Chinese cuisine using recipes inspired from various regions throughout the country.
            </p>
          </div>
        </div>
      </div>

      <footer className="w-full bg-[#fafafa] py-25 flex flex-col items-center justify-center">
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
};

export default About;
