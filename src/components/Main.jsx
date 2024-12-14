import React, { useEffect } from 'react';
import Buttons from './Buttons';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate=useNavigate();
  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.muted = true; // Ensure the video is muted for autoplay to work
    }
  }, []);
  return (
    <div className="relative top-0 left-0 w-full h-screen text-white overflow-hidden">
      <div className="w-full h-full relative">
        {/* Gradient overlay */}
        <div className="z-10 absolute inset-0 bg-gradient-to-t from-[#000021]"></div>

        {/* Text container */}
        <div className="z-20 absolute top-[28vh] md:top-[32vh] w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-[5%] md:mx-[10%] lg:mx-[20%]  animate-fadeInSlow">
          <h1 className="text-gray-300 text-sm md:text-md lg:text-lg">
            For website and video editing
          </h1>
        <h1 className="text-white text-4xl lg:text-5xl my-2 font-bold ">
  Rounak Chowdhury's
</h1>

          <h1 className="text-white text-4xl lg:text-5xl mt-2 mb-3 font-bold ">
          Portfolio
          </h1>
          <button onClick={()=> navigate('/about')} className="top-1 relative group mb-8 text-white  py-4 px-6 border-none bg-transparent tracking-wide transition-all duration-500">
            SEE MORE ABOUT ME
            {/* Animated button border effect */}
            <span className="absolute top-0 left-0 w-full md:w-5 h-0.5 bg-[#1fd1ff] transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute top-0 left-0 w-0.5 h-full md:h-5 bg-[#1fd1ff] transition-all duration-500 group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 w-full md:w-5 h-0.5 bg-[#1fd1ff] transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-0.5 h-full md:h-5 bg-[#1fd1ff] transition-all duration-500 group-hover:h-full"></span>
          </button>
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
