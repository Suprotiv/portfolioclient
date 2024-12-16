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
    {
      video && 
      Array.isArray(video.landscape) && 
      Array.isArray(video.portrait) &&
      video.landscape.length >= 2 &&
      video.portrait.length >= 5 ? (
        <div className="flex flex-col md:flex-row md:gap-2">
          {/* Left column */}
          <div className="md:mb-2 flex-1 flex flex-col gap-1">
            <div className="mt-2">
              {video.landscape[0] && <Video video={video.landscape[0]} key={video.landscape[0]._id} />}
            </div>
            <div className="hidden md:flex gap-2 my-1">
              {video.portrait[0] && <Video video={video.portrait[0]} key={video.portrait[0]._id}/>}
              {video.portrait[1] && <Video video={video.portrait[1]} key={video.portrait[1]._id} />}
            </div>
          </div>
  
          {/* Middle column */}
          <div className="flex-1">
            <div className="flex gap-1 md:gap-2 my-1 md:mt-2">
              {video.portrait[2] && <Video video={video.portrait[2]} key={video.portrait[2]._id}/>}
              {video.portrait[3] && <Video video={video.portrait[3]} key={video.portrait[3]._id}/>}
            </div>
            <div className="mt-1 md:my-2">
              {video.landscape[1] && <Video video={video.landscape[1]} key={video.landscape[1]._id} />}
            </div>
          </div>
  
          {/* Right column */}
          <div className="my-1 md:my-2 md:h-full flex flex-1 flex-col">
            {video.portrait[4] && <Video video={video.portrait[4]} key={video.portrait[4]._id} className="flex-grow" />}
          </div>
        </div>
      ) : (
        <p>No videos available</p>
      )
    }
  </div>
  
  
  );
};

export default VideoGrid;
