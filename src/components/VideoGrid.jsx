import React from 'react';
import Video from './Video';

const VideoGrid = () => {
  const video = [
    { id: 1, imageUrl: 'thumbnail_1.png', alt: 'Video 1', orientation: 'landscape', videoUrl: 'https://www.youtube.com/embed/video1' },
    { id: 2, imageUrl: 'thumbnail_7.png', alt: 'Video 2', orientation: 'landscape', videoUrl: 'https://www.youtube.com/embed/wVvqzPuHkSU' },
    { id: 3, imageUrl: 'thumbnail_3.png', alt: 'Video 3', orientation: 'landscape', videoUrl: 'https://www.youtube.com/embed/video3' },
    { id: 4, imageUrl: 'thumbnail_4.png', alt: 'Video 4', orientation: 'portrait', videoUrl: 'https://www.youtube.com/embed/video4' },
    { id: 5, imageUrl: 'thumbnail_5.png', alt: 'Video 5', orientation: 'landscape', videoUrl: 'https://www.youtube.com/embed/video5' },
    { id: 6, imageUrl: 'thumbnail_6.png', alt: 'Video 6', orientation: 'portrait', videoUrl: 'https://www.youtube.com/embed/video6' },
    { id: 7, imageUrl: 'thumbnail_7.png', alt: 'Video 7', orientation: 'portrait', videoUrl: 'https://www.youtube.com/embed/video7' },
    { id: 8, imageUrl: 'thumbnail_8_Re.png', alt: 'Video 8', orientation: 'portrait', videoUrl: 'https://www.youtube.com/embed/video8' },
    { id: 9, imageUrl: 'thumbnail_9.png', alt: 'Video 9', orientation: 'portrait', videoUrl: 'https://www.youtube.com/embed/video9' },
  ];

  return (
    <div className=" pt-12 bl1">
      <div className="flex flex-col md:flex-row gap-3">
        <div className='my-2'>
          <Video video={video[1]} />
          <div className="flex gap-3 my-2">
            <Video video={video[2]} />
            <Video video={video[4]} />
          </div>
        </div>
        <div>
          <div className="flex gap-3 my-2">
            <Video video={video[8]} />
            <Video video={video[5]} />
          </div>
          <Video video={video[3]} />
        </div>
        <div className='my-2  md:w-[268vh]'>
          <Video video={video[7]} />
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
