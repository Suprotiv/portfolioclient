import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

function Video({ video }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Load image only once when it enters the viewport
    threshold: 0.1, // Trigger when at least 10% of the image is visible
  });

  const handleThumbnailClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        key={video.id}
        className={`relative group overflow-hidden inline-block cursor-pointer ${
          video.orientation === 'landscape' ? 'aspect-w-16 aspect-h-9' : 'aspect-w-9 aspect-h-16'
        }`}
        onClick={handleThumbnailClick}
        ref={ref}
      >
        {inView && (
          <img
            src={video.imageUrl}
            alt={video.alt}
            className={`object-cover w-full h-auto transition-all duration-300 group-hover:scale-110 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            width="300"
            height="auto"
            loading="lazy"
            onLoad={() => setIsImageLoaded(true)}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-6.446 3.675a1 1 0 01-1.506-.864V9.02a1 1 0 011.506-.864l6.446 3.675a1 1 0 010 1.728z"
            />
          </svg>
        </div>
      </div>

      {/* Modal for playing the video */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 sm:p-8">
          <div
            className="relative w-full max-w-lg sm:max-w-xl lg:max-w-4xl p-4 sm:p-6 bg-black rounded-lg"
            style={{ width: '90%', maxWidth: '800px' }}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <iframe
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
              src={isModalOpen ? video.videoUrl : ''}
              title={video.alt}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Video;
