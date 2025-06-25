import React from "react";
import { Omega, Sparkles, WandSparkles } from "lucide-react";
import { assets } from "../assets";
import { motion } from "framer-motion"; // ✅ Make sure this is the correct import

const Header = () => {
  const upperMarquee = [
    assets.sample,
    assets.sample,
    assets.sample,
    assets.sample,
    assets.sample,
    assets.sample,
    assets.sample,
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center my-10">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>AI text to image generator</p>
        <Sparkles />
      </div>

      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Turn text to <span className="text-stone-600">image</span>, in seconds.
      </h1>
      <p className="text-center max-w-xl mx-auto mt-5">
        Artifex transforms your words into breathtaking AI-powered art in
        seconds. Ignite your creativity and turn pure imagination into vivid
        reality with just one prompt.
      </p>

      <button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">
        Generate Images
        <WandSparkles />
      </button>

      {/* Marquee section */}
      <div className="overflow-hidden w-full mt-10">
        <motion.div
          className="flex w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...upperMarquee, ...upperMarquee].map((image, index) => (
            <img
              className="h-40 w-56 pr-10 flex-shrink-0"
              src={image}
              key={`img-${index}`}
              alt={`marquee-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
