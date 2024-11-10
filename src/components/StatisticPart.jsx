import React from 'react';
import Statistic from './Statistic';
import { FaUserCheck, FaClipboardCheck, FaLightbulb, FaHandshake } from 'react-icons/fa';

const StatisticPart = () => {
  return (
    <div className="">
      {/* Top Left */}
      <div className="absolute left-1/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <Statistic icon={<FaClipboardCheck />} number={230} text="Completed Projects" />
      </div>

      {/* Top Right */}
      <div className="absolute right-1/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <Statistic icon={<FaLightbulb />} number={230} text="Perspective Clients" />
      </div>

      {/* Middle Center */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Statistic icon={<FaUserCheck />} number={1068} text="Happy Clients" />
      </div>

      {/* Bottom Left */}
      <div className="absolute left-1/3 bottom-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <Statistic icon={<FaClipboardCheck />} number={230} text="Completed Projects" />
      </div>

      {/* Bottom Right */}
      <div className="absolute right-1/3 bottom-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <Statistic icon={<FaHandshake />} number={230} text="Deals Made" />
      </div>
    </div>
  );
};

export default StatisticPart;
