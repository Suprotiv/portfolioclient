// Service.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Service = ({ title, description, icon, backgroundImage, orientation }) => {
  return (
    <div 
      className={`flex flex-col md:flex-row gap-10 items-center px-6 py-12 rounded-lg  text-white w-full ${
        orientation === 'right' ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex-shrink-0 mb-6 md:mb-0 bl4">
        <img 
          src={backgroundImage} 
          alt={`${title} image`}
          className="rounded-lg object-cover h-[50vh]  w-full"
        />
      </div>
      
      {/* Text content */}
      <div className="p-4 w-full md:w-1/2 text-center md:text-left bl2">
        <FontAwesomeIcon icon={icon} size="3x" className="text-blue-400 mb-4" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-300 mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Service;
