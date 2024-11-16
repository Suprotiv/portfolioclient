import React from 'react';
import Buttons from './Buttons';

function Main() {
  return (
    <div className="relative top-0 left-0 w-full h-screen text-white overflow-hidden">
      <div className="w-full h-full relative">
        {/* Gradient overlay */}
        <div className="z-10 absolute inset-0 bg-gradient-to-t from-[#000021]"></div>

        {/* Text container */}
        <div className="z-20 absolute top-[30vh] md:top-[35vh] w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-[5%] md:mx-[10%] lg:mx-[20%]  animate-fadeInSlow">
          <h1 className="text-gray-300 text-sm md:text-md lg:text-lg">
            For website and video editing
          </h1>
        <h1 className="text-white text-4xl lg:text-5xl my-2 font-bold ">
  Rounak Chowdhury's
</h1>

          <h1 className="text-white text-4xl lg:text-5xl mt-2 mb-6 font-bold ">
          Portfolio
          </h1>

          {/* Button with hover effect */}
          <Buttons text={'See More About Me'} size={'lg'} />
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
