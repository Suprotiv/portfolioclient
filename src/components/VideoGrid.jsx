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
      
    </div>
  );
};

export default VideoGrid;
