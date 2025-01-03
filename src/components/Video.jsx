import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import LazyLoader from "./LazyLoader";

function Video({ video }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* LazyLoader initializes on the page */}
      <LazyLoader />
      <div
        className="blur-load"
        style={{
          backgroundImage: `url(http://api.rounak.co/clients/${video.image
            .split("/")
            .pop()
            .split(".")
            .slice(0, -1)
            .join(".")}_lowres.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          aspectRatio:
            video.orientation === "Landscape"
              ? "16 / 9"
              : video.orientation === "Portrait"
              ? "9 / 16"
              : "47 / 68",
          maxHeight:
            video.orientation === "Landscape"
              ? "264px"
              : video.orientation === "Portrait"
              ? "409px"
              : "680px",

          height: "100%", // Ensures the container takes the full height
        }}
      >
        <div
          key={video.id}
          className={`relative group overflow-hidden inline-block cursor-pointer w-full h-full inner-div ${
            video.orientation === "Landscape"
              ? "aspect-w-16 aspect-h-9  md:max-h-[264px]"
              : video.orientation === "Portrait"
              ? "aspect-w-9 aspect-h-16  md:max-h-[409px]"
              : "aspect-[47/68]  md:max-h-[680px]"
          }`}
          onClick={handleThumbnailClick}
        >
          {/* Thumbnail Image */}
          <img
            src={video.image}
            alt={video.title}
            className="relative z-10  object-cover transition-all duration-300 group-hover:scale-110 w-full h-full"
            loading="lazy"
          />

          {/* Overlay for Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 z-20">
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
      </div>

      {/* Modal for playing the video */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 sm:p-8">
          <div
            className="relative w-full max-w-lg sm:max-w-xl lg:max-w-4xl p-4 sm:p-6 bg-black rounded-lg"
            style={{ width: "90%", maxWidth: "800px" }}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <iframe
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
              src={isModalOpen ? video.video : ""}
              title={video.title}
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
