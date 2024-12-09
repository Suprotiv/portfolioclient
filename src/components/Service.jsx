// Service.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useScrollAnimation from './useScrollAnimation';
import LazyLoader from './LazyLoader';

const Service = ({ title, description, icon, backgroundImage, orientation }) => {
  useScrollAnimation()
  return (
    <div className='overflow-hidden'>
      <LazyLoader/>
    <div 
      className={`flex flex-col md:flex-row gap-10    items-center px-6 py-12 rounded-lg  text-white  ${
        orientation === 'right' ? 'md:flex-row-reverse animate-on-scroll1 ' : 'animate-on-scroll'
      }`}
    >
  <div 
  className="blur-load relative rounded-md" // Ensure the container is relative
  style={{
    backgroundImage: `url(lowres/${backgroundImage.slice(0, -5)}_lowres.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '50%', // Ensures the container takes the full height
    height: '100%', // Sets the background beneath
  }}
>
  {/* Image */}
  <div 
    className="w-full  flex-shrink-0 mb-6 md:mb-0 relative z-10" // Image is positioned above
  >
    <img 
      src={backgroundImage} 
      alt={`${title} image`}
      className="rounded-lg object-cover h-[55vh] w-full"
      loading="lazy"
    />
  </div>
</div>



      
      {/* Text content */}
      <div className="p-4 w-full md:w-1/2 text-center md:text-left">
        <FontAwesomeIcon icon={icon} size="3x" className="text-blue-400 mb-4" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-300 mt-4">{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Service;
