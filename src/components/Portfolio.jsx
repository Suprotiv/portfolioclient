import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Navbar from './Navbar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const API_URL = 'http://localhost:4000';
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${API_URL}/api/portfolio/getprojects`);
      setPortfolioItems(response.data);
    };
    getData();
  }, []);

  const categories = ['All', 'Anime', 'Catalogue', 'Advertisements', 'Caption'];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === selectedCategory);

  const handleThumbnailClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div className="text-white pb-12 px-4 md:px-12 w-full lg:px-16">
      <div className="flex w-full overflow-x-auto space-x-2 mb-8 md:space-x-8 md:mb-12 animate-fadeIn scrollbar-hide">
  <div className="flex flex-nowrap justify-center space-x-2 md:space-x-5 mx-auto">
    {categories.map((category) => (
      <div key={category} onClick={() => setSelectedCategory(category)} className="mb-4 md:mb-0">
        <Buttons text={category} size="sm" isSelected={selectedCategory === category} />
      </div>
    ))}
  </div>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10 animate-fadeIn transition-all duration-300">
        {filteredItems ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg animate-popIn transition-all duration-300 hover:cursor-pointer"
              onClick={() => handleThumbnailClick(item.video)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[40vh] sm:h-[40vh] md:h-[35vh] lg:h-[30vh] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center px-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))
        ) : null}
      </div>

      {/* Modal for playing the video */}
      {isModalOpen && currentVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 sm:p-8">
          <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-4xl p-4 sm:p-6 bg-black rounded-lg">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <iframe
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
              src={currentVideo}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
