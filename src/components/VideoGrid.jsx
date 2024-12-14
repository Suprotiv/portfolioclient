import React, { useEffect, useState } from 'react';
import Video from './Video';
import axios from 'axios';

const VideoGrid = () => {
  const [video,setVideo]=useState([])
  const API_URL = 'https://api.rounak.co';
  useEffect(() => {
    const getData = async () => { // Set loading to true before fetching data
      try {
        const response = await axios.get(`${API_URL}/api/portfolio/getprojectsBanner`);
        setVideo(response.data);
      // Data fetched, set loading to false
      } catch (err) {
        console.log(err); // Ensure loading is stopped even if an error occurs
      }
    };
    getData();
  }, []);
  console.log(video)

  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:gap-2">
        {/* Left column */}
        <div className="md:mb-2 flex-1 flex flex-col gap-1">
          <div className='mt-2'>
          <Video video={video[1]} />
          </div>
          <div className="hidden md:flex gap-2 my-1">
            <Video video={video[2]} />
            <Video video={video[4]} />
          </div>
        </div>

        {/* Middle column */}
        <div className="flex-1">
          <div className="flex gap-2 md:gap-2 my-1 md:mt-2">
            <Video video={video[8]} />
            <Video video={video[5]} />
          </div>
          <div className="mt-3 md:my-2">
            <Video video={video[3]} />
          </div>
        </div>

        {/* Right column */}
        <div className="my-1 md:my-2 md:h-full flex flex-1 flex-col">
          <Video video={video[7]} className="flex-grow" />
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
