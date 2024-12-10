import React from 'react';
import Video from './Video';

const VideoGrid = () => {
  const video = [
    { id: 1, imageUrl: 'thumbnail_1.webp', alt: 'Video 1', orientation: 'landscape', videoUrl: 'https://www.youtube.com/embed/video1' },
    { id: 2, imageUrl: 'thumbnail_7.webp', alt: 'Video 2', orientation: 'landscape', videoUrl: 'https://www.youtube.com/embed/wVvqzPuHkSU' },
    { id: 3, imageUrl: 'thumbnail_3.webp', alt: 'Video 3', orientation: 'portrait', videoUrl: 'https://www.youtube.com/embed/video3' },
    { id: 4, imageUrl: 'thumbnail_4.webp', alt: 'Video 4', orientation: 'landscape', videoUrl: 'https://www.youtube.com/embed/video4' },
    { id: 5, imageUrl: 'thumbnail_5.webp', alt: 'Video 5', orientation: 'portrait', videoUrl: 'https://www.youtube.com/embed/video5' },
    { id: 6, imageUrl: 'thumbnail_6.webp', alt: 'Video 6', orientation: 'portrait', videoUrl: 'https://www.youtube.com/embed/video6' },
    { id: 7, imageUrl: 'thumbnail_7.webp', alt: 'Video 7', orientation: 'portrait', videoUrl: 'https://www.youtube.com/embed/video7' },
    { id: 8, imageUrl: 'thumbnail_8_Re.webp', alt: 'Video 8', orientation: 'special', videoUrl: 'https://www.youtube.com/embed/video8' },
    { id: 9, imageUrl: 'thumbnail_9.webp', alt: 'Video 9', orientation: 'portrait', videoUrl: 'https://www.youtube.com/embed/video9' },
  ];

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
