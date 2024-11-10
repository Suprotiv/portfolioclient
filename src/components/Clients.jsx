import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Clients = () => {
  const API_URL = 'http://localhost:4000';
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${API_URL}/api/portfolio/getclients`);
      const data = response.data;

      // Concatenate data twice to ensure smooth looping
      setClients(data);
    };

    getData();
  }, []);

  return (
    <div className='flex  justify-center items-center bl1'>
       
    <div className="relative py-4 w-full overflow-hidden my-[5vh]">
        <div className='flex justify-center items-center mb-[10vh] '>
    <h1 className='text-white font-bold text-4xl '>Clients</h1>
    </div>
      {/* Overlay with gradient from sides */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#000021] via-transparent to-[#000021]"></div>
      
      {/* Client images carousel */}
      <div className="flex space-x-10 md:space-x-[10vh] animate-scroll w-max hover:cursor-pointer">
        {/* First instance of client images */}
        <div className="flex items-center space-x-10 md:space-x-[10vh]  ml-[10vh]">
          {clients.map((client, index) => (
            <img
              key={`client-${index}`}
              src={client.image}
              alt={`Client ${index + 1}`}
              className="h-[17vh] md:h-[22vh] opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-3xl"
            />
          ))}
        </div>
        {/* Duplicate instance of client images */}
        <div className="flex items-center space-x-10 md:space-x-[10vh]">
          {clients.map((client, index) => (
            <img
              key={`client-duplicate-${index}`}
              src={client.image}
              alt={`Client ${index + 1}`}
              className="h-[17vh] md:h-[22vh] opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-3xl"
            />
          ))}
        </div>
        
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
    </div>
  );
};

export default Clients;
