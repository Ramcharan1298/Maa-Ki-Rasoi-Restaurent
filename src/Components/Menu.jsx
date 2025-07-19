import React ,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import heroBg from "../Images/Bg-Image.png";
import { motion, useScroll, useTransform } from "framer-motion";


const MenuItem = ({ name, desc, showLine }) => (
  <div className="text-left text-sm sm:text-base text-gray-900">
    <div className="flex flex-col">
      <div className="flex items-center w-full">
        <span className="font-semibold text-[19px] text-black whitespace-nowrap mr-2">
          {name}
        </span>
      </div>
      <div className="text-gray-700 mt-1 mb-3 leading-snug text-[18.5px] sm:text-[14.5px]">
        {desc}
      </div>
      {showLine && (
        // <p>".................................................."</p>
        <div className=" border-black text-2xl w-full min-h-[1px]">
          ...........................................................
        </div>
      )}
    </div>
  </div>
);

const Menu = () => {
  useEffect(() => {
    // Delay scroll to top until fade-in is complete
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },); // match fade-in duration
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      className="w-full bg-white text-center"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 3 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <div
        className="relative flex justify-center items-center w-full"
        style={{ minHeight: "320px" }}
      >
        <img
          src={heroBg}
          alt="pattern"
          className="w-[990px] mt-23 max-w-[990px] h-[180px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover object-center rounded-none"
          style={{ maxWidth: "98vw" }}
        />
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6 text-base sm:text-lg md:text-xl font-semibold text-[rgb(0,46,93)]">
        {[
          { to: "/menu", label: "MAA KI...RASOI MENU" },
          { to: "/menu/starters", label: "STARTERS" },
          { to: "/menu/mains", label: "MAINS" },
          { to: "/menu/desserts", label: "DESSERTS" },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `px-2 pb-1 transition-colors duration-200 rounded focus:outline-none ${
                isActive
                  ? "text-[#0a2239] border-b-2 border-[#D4AF37] bg-[#f8f8f8]"
                  : "hover:text-[#D4AF37] border-b-2 border-transparent"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Main content */}
      <div className="mt-8 w-full max-w-6xl text-left mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-blue-900 text-lg sm:text-xl font-semibold md:ml-15 sm:ml-6 mb-8 sm:mb-12">
          Maa Ki...Rasoi
        </h2>

        <h1 className="text-xl sm:text-2xl text-blue-900 font-semibold text-center mb-4">
          DUMPLINGS & APPETIZERS
        </h1>
        <hr className="border-t-2 border-blue-900 w-full sm:w-3/4 md:w-[700px] lg:w-[990px] mx-auto" />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 max-w-[990px] mx-auto">
          <MenuItem
            desc="Boiled/Pan-fried Dumplings with pork & cabbage"
            showLine={true}
          />
          <MenuItem
            desc="Steamed/Pan-fried pork dumplings (assorted vegetables and radish)"
            showLine={true}
          />
          <MenuItem
            desc="Shredded bean curd salad (onions, bean curd, carrots & coriander)"
            showLine={true}
          />
          <MenuItem
            desc="Steamed/Pan-fried mushroom dumplings soup &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            showLine={true}
          />
          <MenuItem
            desc="Steamed/Pan-fried beef dumplings (potato, carrots and onion)"
            showLine={true}
          />
          <MenuItem
            desc="Steamed Shanghai dumpling (onions, bean curd, carrots & coriander)s"
            showLine={true}
          />
          <MenuItem desc="Steamed prawn dumplings" showLine={true} />
          <MenuItem desc="BBQ pork bun" showLine={true} />
          <MenuItem
            desc="Pork Wonton in soup / in hot & spicy soup"
            showLine={true}
          />
          <MenuItem desc="Dumplings in hot & spicy soup" showLine={true} />
          <MenuItem desc="Spring onion pancake" showLine={true} />
          <MenuItem desc="Beef wrapped in pancake" showLine={true} />
          <MenuItem
            desc="San Choi Bao (seafood/pork/vegetarian)"
            showLine={true}
          />
          <MenuItem desc="Steamed twist rolls" showLine={true} />
          <MenuItem desc="Vegetarian spring rolls" showLine={true} />
        </div>

        {/* COLD DISH */}

        <div className="mt-18">
          <h1 className="text-xl text-bold sm:text-2xl text-[rgb(0,46,93)] font-semibold text-center mb-4">
            COLD DISH
          </h1>
          <hr className="border-t-2 border-blue-900 w-full sm:w-3/4 md:w-[700px] lg:w-[990px] mx-auto" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 max-w-[990px] mx-auto">
            <MenuItem
              desc="Northeast crystal green-bean noodles & cabbage in sesame paste"
              showLine={true}
            />
            <MenuItem
              desc="Mixed salad (cucumber, black fungus and konjak)"
              showLine={true}
            />
            <MenuItem
              desc="Shredded pig’s ear with cucumber in chilli sauce &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem
              desc="Pork Spare ribs in sweet and sour sauce "
              showLine={true}
            />
            <MenuItem desc="Five-spiced beef" showLine={true} />
            <MenuItem
              desc="Green bean jellies in sichuan sauce"
              showLine={true}
            />
            <MenuItem
              desc="Shredded bean curd salad (onions, bean curd, carrots & coriander)"
              showLine={true}
            />
            <MenuItem
              desc="Shredded bean curd salad (onions, bean curd, carrots & coriander)"
              showLine={true}
            />
            <MenuItem
              desc="Steamed/Pan-fried mushroom dumplings soup &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
          </div>
        </div>

        {/* SEA FOOD */}

        <div className="mt-18">
          <h1 className="text-xl text-bold sm:text-2xl text-[rgb(0,46,93)] font-semibold text-center mb-4">
            SEA FOOD
          </h1>
          <hr className="border-t-2 border-blue-900 w-full sm:w-3/4 md:w-[700px] lg:w-[990px] mx-auto" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 max-w-[990px] mx-auto">
            <MenuItem desc="Sweet and sour squirrel fish" showLine={true} />
            <MenuItem
              desc="Whole fish in broad-bean chilli sauce"
              showLine={true}
            />
            <MenuItem
              desc="Chilli fish &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem
              desc="Sichuan style fish fillets with pickles in soup"
              showLine={true}
            />
            <MenuItem desc="Sichuan style fish fillet" showLine={true} />
            <MenuItem desc="Sweet and sour fish fillet" showLine={true} />
            <MenuItem desc="Stir-fried prawns in satay sauce" showLine={true} />
            <MenuItem
              desc="Stir-fried prawns with cashew nuts"
              showLine={true}
            />
            <MenuItem
              desc="Gong pao prawns &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem
              desc="Stir-fried prawns in sichuan sauce"
              showLine={true}
            />
            <MenuItem desc="Stir-fried prawns in XO sauce" showLine={true} />
            <MenuItem desc="Fried calamari in spicy salt" showLine={true} />
            <MenuItem
              desc="Dry-fried shredded calamari &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem
              desc="Prawns and vermicelli in clay pot"
              showLine={true}
            />
            <MenuItem desc="Stir-fried prawns in XO sauce" showLine={true} />
          </div>
        </div>

        {/* BEEF AND LAMB */}

        <div className="mt-18">
          <h1 className="text-xl text-bold sm:text-2xl text-[rgb(0,46,93)] font-semibold text-center mb-4">
            BEEF AND LAMB
          </h1>
          <hr className="border-t-2 border-blue-900 w-full sm:w-3/4 md:w-[700px] lg:w-[990px] mx-auto" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 max-w-[990px] mx-auto">
            <MenuItem
              desc="Mongolian beef on sizzling plate "
              showLine={true}
            />
            <MenuItem desc="Satay beef on sizzling plate " showLine={true} />
            <MenuItem
              desc="Sliced beef in black pepper and honey sauce &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem desc="Stir-fried beef with chilli" showLine={true} />
            <MenuItem desc="Sliced beef in black bean sauce" showLine={true} />
            <MenuItem desc="Sliced beef with black pepper" showLine={true} />
            <MenuItem desc="Chilli beef" showLine={true} />
            <MenuItem
              desc="Stewed ox’s tendon with spring onion"
              showLine={true}
            />
            <MenuItem
              desc="Shredded crispy beef &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem desc="Mongolian lamb on sizzling plate" showLine={true} />
            <MenuItem
              desc="Satay lamb on sizzling plate (contains peanut)
"
              showLine={true}
            />
            <MenuItem
              desc="Stir-fried lamb with spring onion"
              showLine={true}
            />
            <MenuItem
              desc="Dry-fried shredded calamari &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem
              desc="Stir-fried lamb with cumin and onion"
              showLine={true}
            />
            <MenuItem desc="Stir-fried prawns in XO sauce" showLine={true} />
          </div>
        </div>

        {/* PORK */}

        <div className="mt-18">
          <h1 className="text-xl text-bold sm:text-2xl text-[rgb(0,46,93)] font-semibold text-center mb-4">
            PORK
          </h1>
          <hr className="border-t-2 border-blue-900 w-full sm:w-3/4 md:w-[700px] lg:w-[990px] mx-auto" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 max-w-[990px] mx-auto">
            <MenuItem desc="Stir-fried pork with capsicum " showLine={true} />
            <MenuItem desc="Fried pork tenderloin " showLine={true} />
            <MenuItem
              desc="Braised pork belly in soy sauce &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem desc="Stewed meat balls" showLine={true} />
            <MenuItem desc="Pork ribs in spicy salt" showLine={true} />
            <MenuItem desc="Sweet and sour pork" showLine={true} />
            <MenuItem
              desc="Twice-cooked pork in sichuan sauce ( pancake)"
              showLine={true}
            />
            <MenuItem
              desc="Steamed pork with preserved vegetables"
              showLine={true}
            />
            <MenuItem
              desc="Beijing style shredded pork in soy bean sauce ( pancake) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem
              desc="Stir-fried shredded pork in sichuan sauce"
              showLine={true}
            />
            <MenuItem
              desc="Shanghai style braised meat balls
"
              showLine={true}
            />
          </div>
        </div>

        {/* POULTRY */}

        <div className="mt-18">
          <h1 className="text-xl text-bold sm:text-2xl text-[rgb(0,46,93)] font-semibold text-center mb-4">
            POULTRY
          </h1>
          <hr className="border-t-2 border-blue-900 w-full sm:w-3/4 md:w-[700px] lg:w-[990px] mx-auto" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 max-w-[990px] mx-auto">
            <MenuItem
              desc="Sichuan style tea-leaf smoked duck Half: Whole:"
              showLine={true}
            />
            <MenuItem
              desc="Mongolian chicken on sizzling plate (contains peanut) "
              showLine={true}
            />
            <MenuItem
              desc="Satay chicken on sizzling plate (contains peanut) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem desc="Gongbao chicken" showLine={true} />
            <MenuItem
              desc="Stir-fried chicken with cashew nuts"
              showLine={true}
            />
            <MenuItem
              desc="Stir-fried chicken in sichuan sauce"
              showLine={true}
            />
            <MenuItem desc="Chicken ribs in spicy salt" showLine={true} />
            <MenuItem
              desc="Chicken ribs with sweet potato in hot pot"
              showLine={true}
            />
          </div>
        </div>

        {/* VEGETARIAN */}

        <div className="mt-18">
          <h1 className="text-xl text-bold sm:text-2xl text-[rgb(0,46,93)] font-semibold text-center mb-4">
            VEGETARIAN
          </h1>
          <hr className="border-t-2 border-blue-900 w-full sm:w-3/4 md:w-[700px] lg:w-[990px] mx-auto" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 max-w-[990px] mx-auto">
            <MenuItem
              desc="Bean curd in spicy salt"
              showLine={true}
            />
            <MenuItem
              desc="Sweet corn with pine nuts"
              showLine={true}
            />
            <MenuItem
              desc="Stir-fried baby cabbage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem desc="Stir-fried mix (chives, bean-shoots, vermicelli, bean curd)" showLine={true} />
            <MenuItem
              desc="Stir-fried vegetables with cashew nuts and peanuts"
              showLine={true}
            />
            <MenuItem
              desc="Stir-fried mix (chives, bean-shoots, vermicelli, bean curd)"
              showLine={true}
            />
            <MenuItem desc="Stir-fried black fungus with spring onion" showLine={true} />
            <MenuItem
              desc="Stir-fried Chinese cabbage /blanching"
              showLine={true}
            />
            <MenuItem
              desc="Stir-fried cabbage"
              showLine={true}
            />
          </div>
        </div>

        {/* SOUP */}

        <div className="mt-18">
          <h1 className="text-xl text-bold sm:text-2xl text-[rgb(0,46,93)] font-semibold text-center mb-4">
            SOUP
          </h1>
          <hr className="border-t-2 border-blue-900 w-full sm:w-3/4 md:w-[700px] lg:w-[990px] mx-auto" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 max-w-[990px] mx-auto">
            <MenuItem
              desc="Seafood and bean-curd soup"
              showLine={true}
            />
            <MenuItem
              desc="Hot & sour soup"
              showLine={true}
            />
            <MenuItem
              desc="Sweet corn soup (chicken/shrimps)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem desc="Chinese green & bean curd soup" showLine={true} />
            <MenuItem
              desc="West lake beef soup ( minced beef, mushroom)"
              showLine={true}
            />
          </div>
        </div>

        {/* DESSERTS */}

        <div className="mt-18 mb-10">
          <h1 className="text-xl text-bold sm:text-2xl text-[rgb(0,46,93)] font-semibold text-center mb-4">
            DESSERTS
          </h1>
          <hr className="border-t-2 border-blue-900 w-full sm:w-3/4 md:w-[700px] lg:w-[990px] mx-auto" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 sm:gap-x-8 max-w-[990px] mx-auto">
            <MenuItem
              desc="Fried ice cream"
              showLine={true}
            />
            <MenuItem
              desc="Red bean paste pancake"
              showLine={true}
            />
            <MenuItem
              desc="Black sesame dumpling in sweet soup&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem desc="Banana fritter with ice-cream" showLine={true} />
            <MenuItem
              desc="Pineapple fritter with ice-cream"
              showLine={true}
            />
            <MenuItem
              desc="Black sesame dumpling in sweet soup&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              showLine={true}
            />
            <MenuItem desc="Banana fritter with ice-cream" showLine={true} />
            <MenuItem
              desc="Mixed fruit with ice-cream"
              showLine={true}
            />
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

export default Menu;
