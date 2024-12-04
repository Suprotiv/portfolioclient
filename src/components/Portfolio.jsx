import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Navbar from './Navbar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const API_URL = 'https://46.202.164.225:4000';
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    const getData = async () => {
      try{
      const response = await axios.get(`${API_URL}/api/portfolio/getprojects`);
      setPortfolioItems(response.data);
      }
      catch(err){
        console.log(err)
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const categories = ['All', 'Anime', 'Catalogue', 'Advertisements', 'Caption', 'SMC'];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === selectedCategory);

  // Calculate items to display based on current page
  const displayedItems = filteredItems.slice(0, currentPage * itemsPerPage);

  const handleThumbnailClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
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
        {displayedItems.map((item) => (
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
        ))}
      </div>

      {/* Load more button */}
      {displayedItems.length < filteredItems.length && (
        <div className="flex justify-center mt-8 animate-fadeIn">
          <button onClick={handleLoadMore} className="relative group text-white font-bold py-2 px-3 border-none bg-transparent tracking-wide transition-all duration-500">
            Load More
            {/* Animated button border effect */}
            <span className="absolute top-0 left-0 w-0 h-[1px] bg-[#1fd1ff] transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute top-0 left-0 w-[1px] h-0 bg-[#1fd1ff] transition-all duration-500 group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#1fd1ff] transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-[1px] h-0 bg-[#1fd1ff] transition-all duration-500 group-hover:h-full"></span>
          </button>
        </div>
      )}

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
