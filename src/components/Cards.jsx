import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Update path as per your project structure

const Card = ({ image , name }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative  overflow-hidden h-[140px] min-w-[140px] md:h-[170px] md:min-w-[170px] rounded-xl flex justify-center items-center hover:cursor-pointer"
      key={image}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      
    >
      {/* Hover overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span className="text-center">{name}</span>
            
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-full w-full blur-load"
      style={{  backgroundImage: `url(blur.jpg)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height:'100%',
      width:'100%'
    }}>
      <div className="h-full w-full relative inner-div">
      <img
        src={image}
        alt={image}
        className="absolute h-full w-full object-cover "
      />
      </div>
      </div>
    </motion.div>
  );
};

export default Card;
