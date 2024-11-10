import React from 'react';
import Buttons from './Buttons';

function Main() {
  return (
    <div className="relative top-0 left-0 w-full h-screen text-white overflow-hidden">
      <div className="w-full h-full relative">
        {/* Gradient overlay */}
        <div className="z-10 absolute inset-0 bg-gradient-to-t from-[#000021]"></div>

        {/* Text container */}
        <div className="z-20 absolute top-[20vh] md:top-[25vh] w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-[5%] md:mx-[10%] lg:mx-[20%] text-center animate-fadeIn">
          <h1 className="text-gray-300 text-xs sm:text-sm md:text-md lg:text-lg">
            For website and video editing
          </h1>
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl my-2 font-bold">
            Videographer's
          </h1>
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 mb-6 font-bold">
            Portfolio
          </h1>

          {/* Button with hover effect */}
          <Buttons text={'See more about us'} size={'text-sm sm:text-lg md:text-xl'} />
        </div>

        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}

export default Main;
