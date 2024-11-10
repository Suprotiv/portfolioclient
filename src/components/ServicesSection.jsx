import React from 'react';
import { FaBullhorn, FaVideo, FaMagic, FaVolumeUp } from 'react-icons/fa'; // New icons based on services
import ServiceCard from './ServiceCard';

const ServiceSection = () => {
  return (
    <section className="text-white py-8 md:py-8 px-8  bl1">
      <div className='flex flex-col gap-8 md:flex-row'>
        <div className="max-w-7xl mx-auto text-center mt-[8vh]">
          <h2 className="text-[#1fd1ff] uppercase text-lg">About Me</h2>
          <h1 className="text-4xl font-bold mt-2">What I Do?</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          If you're looking for polished, engaging content that captures attention and aligns with your brand’s vision, I’m here to bring it to life.
          </p>
          <button className="top-10 relative group text-white font-bold py-4 px-6 border-none bg-transparent tracking-wide transition-all duration-500">
            VIEW ALL SERVICES
            {/* Animated button border effect */}
            <span className="absolute top-0 left-0 w-5 h-0.5 bg-[#1fd1ff] transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute top-0 left-0 w-0.5 h-5 bg-[#1fd1ff] transition-all duration-500 group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 w-5 h-0.5 bg-[#1fd1ff] transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-0.5 h-5 bg-[#1fd1ff] transition-all duration-500 group-hover:h-full"></span>
          </button>
        </div>
        
        {/* Service Cards */}
        <div className="">
          <ServiceCard
            icon={FaBullhorn} // Advertisement icon
            title="Commercial Advertisements"
            description="Professional video content for your brand, from promotional videos to testimonials, crafted to fit your brand’s unique style."
          />
          <ServiceCard
            icon={FaVideo} // Long Form Content icon
            title="Long Form Content"
            description="Editing packages for content creators, including thumbnails and SEO optimization for YouTube and other platforms."
          />
        </div>

        <div className=''>
          <ServiceCard
            icon={FaMagic} // VFX icon
            title="VFX"
            description="Special effects, green screen keying, and 3D integrations to enhance storytelling and deliver high-impact visuals."
          />
          <ServiceCard
            icon={FaVolumeUp} // Audio Design icon
            title="Audio Design"
            description="Sound design, mixing, and syncing for clean dialogue and immersive soundscapes that bring visuals to life."
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
