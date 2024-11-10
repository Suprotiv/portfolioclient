import React from 'react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className=" p-6 rounded-lg text-center">
      <Icon className="text-4xl text-[#1fd1ff] hover:scale-110 hover:rotate-12 transition-transform duration-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
