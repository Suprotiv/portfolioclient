import React, { useEffect } from "react";
import useScrollAnimation from "../components/useScrollAnimation";


const AboutPage = () => {
  useScrollAnimation();
  const backgroundImage = "about5_1.webp"; // Replace with your actual background image URL


  return (
    <div
      className="relative min-h-screen text-white py-20 animate-fadeIn"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000021] to-black opacity-60 z-10"></div>

      {/* Content */}
      <section className="relative z-20 container mx-auto px-4 md:px-20 py-20 bg-black bg-opacity-60 rounded-lg shadow-lg">
        {/* Editor Image */}
        <div className="flex justify-center mb-8">
          <img
            src="dp.png" // Replace with your actual image URL
            alt="Video Editor"
            className="w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Bio */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1fd1ff]">
            About Me
          </h2>
          <p className="text-md md:text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto mb-6">
            I am Rounak, a professional video editor and photographer from India
            with over 4 years of experience crafting visually compelling
            content. My expertise spans across Adobe Suite (Premiere Pro, After
            Effects, Photoshop, and more), DaVinci Resolve, and Magix Vegas Pro,
            and I am adept in animation, motion graphics, typography, sound
            design, color grading, and VFX.
          </p>
          <p className="text-md md:text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto mb-6">
            Specializing in social media content for platforms like Instagram,
            YouTube, and TikTok, I bring a strategic approach to create content
            that resonates. I’ve had the privilege of working with a diverse
            range of clients, including global athletes, influencers, luxury
            car brands, premium clothing brands, and Michelin-star restaurants.
          </p>

          {/* Skills List */}
          <ul className="mt-4 text-gray-400 space-y-3 text-center">
            <li>
              <span className="text-[#1fd1ff] font-medium">Color Grading</span>:
              Enhancing visuals to make them pop.
            </li>
            <li>
              <span className="text-[#1fd1ff] font-medium">Sound Design</span>:
              Seamless audio and video integration.
            </li>
            <li>
              <span className="text-[#1fd1ff] font-medium">Cinematic Cuts</span>
              : Creating smooth transitions and pacing.
            </li>
            <li>
              <span className="text-[#1fd1ff] font-medium">
                Social Media Optimization
              </span>
              : Crafting content that shines on every platform.
            </li>
          </ul>
        </div>
      </section>

      {/* Notable Clients Section */}
      <section className="py-10 bg-black bg-opacity-60 rounded-lg shadow-lg my-10 md:mx-20 relative z-20">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 pb-10 text-[#1fd1ff]">
            Notable Clients
          </h2>
          <div className="text-lg leading-relaxed text-gray-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <span>Porsche Middle East</span>
            <span>Supercars Tribe</span>
            <span>Chic Nonna Dubai</span>
            <span>KL Rahul</span>
            <span>Abhishek Sharma</span>
            <span>WomenlikeU</span>
            <span>Vastharam Silk</span>
            <span>Ethnic.co</span>
            <span>Trash</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
