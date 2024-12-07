// Servicepage.js
import React from 'react';
import { faFilm, faBullhorn, faVideo, faMagic, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import Service from '../components/Service';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Servicepage = () => {
  const services = [
    {
      title: 'Short Form Content',
      description: 'Engaging short form reels, shorts, and video content optimized for platforms like Instagram, Youtube and TikTok that will help you grow your page as I utilize video editing strategies focused on maximizing viewer retention and engagement',
      icon: faFilm,
      backgroundImage: '/thumbnail_2.webp',
      orientation: 'left' // Image on the left
    },
    {
      title: 'Commercial Advertisements',
      description: 'Professional video content tailored for your brand, including promotional videos, testimonials, and more. I will provide videos that reflect a consistent style and align with your brand’s unique identity, perfectly suited for your brand’s website, social media or any other platform',
      icon: faBullhorn,
      backgroundImage: '/thumbnail_6.webp',
      orientation: 'right' // Image on the right
    },
    {
      title: 'Long Form Content',
      description: 'Long form editing packages designed for content creators, including thumbnails and optimized SEO for your Youtube and other video hosting platforms',
      icon: faVideo,
      backgroundImage: '/lfc.webp',
      orientation: 'left'
    },
    {
      title: 'VFX',
      description: 'Special effects, green screen keying, compositing, and 3D integrations for creating powerful, cinematic visuals that captivate audiences and enhance storytelling. Whether adding realistic elements or transforming backgrounds, I bring creativity and technical precision to achieve high-impact effects to your videos',
      icon: faMagic,
      backgroundImage: '/vfx.webp',
      orientation: 'right'
    },
    {
      title: 'Audio Design',
      description: 'Professional sound design, audio mixing, and syncing to enhance the storytelling experience. From clean dialogue and atmospheric effects to dynamic soundscapes, I ensure that every project sounds as polished as it looks, bringing depth and emotion to the visuals.',
      icon: faVolumeUp,
      backgroundImage: '/audio.webp',
      orientation: 'left'
    }
  ];

  return (
    <>
  <div className="relative w-full h-[50vh] md:h-[80vh] animate-fadeIn">
  {/* Background Image */}
  <img src="background.webp" className="object-cover w-full h-full object-center" alt="Background" loading="lazy" />

  {/* Centered Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-40">
    <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl shadow-lg shadow-black/80 p-4 rounded-md animate-fadeIn">
      Services
    </h1>
    <div className="p-4 md:mt-[7vh] flex flex-col justify-center items-center">
    <p className="text-gray-300  md:w-[90vh] text-md sm:text-lg md:text-xl shadow-lg text-center animate-fadeIn">
  I provide complete editing solutions from start to finish, handling everything from 
  <span className="font-bold text-[#1fd1ff]"> color correction</span> and 
  <span className="font-bold text-[#1fd1ff]"> sound design</span> to smooth transitions and pacing.  
  I focus on every detail to craft a cohesive, engaging final product that captures your 
  <span className="font-bold text-[#1fd1ff]"> vision</span> and resonates with your 
  <span className="font-bold text-[#1fd1ff]"> audience</span>.
</p>

    </div>
  </div>
</div>
      <div className="text-white py-12 w-full">
      
        
        {/* Service List with Alternating Layout */}
        <div className="flex flex-col animate-fadeIn">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              backgroundImage={service.backgroundImage}
              orientation={service.orientation}
            />
          ))}
        </div>
      </div>
     
    </>
  );
};

export default Servicepage;
