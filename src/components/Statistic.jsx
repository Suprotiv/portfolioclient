import React from 'react';

const Statistic = ({ icon, number, text }) => {
  return (
    <div className="relative w-48 h-48 bg-[#4A007C] border-2 border-[#4A007C] flex items-center justify-center transform rotate-45">
      <div className="transform -rotate-45 flex flex-col items-center text-white">
        <div className="text-4xl mb-3">{icon}</div>
        <div className="text-3xl font-bold">{number}</div>
        <div className="text-sm mt-2">{text}</div>
      </div>
    </div>
  );
};

export default Statistic;
