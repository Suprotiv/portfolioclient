import React from "react";
import useScrollAnimation from "../components/useScrollAnimation";

const AboutPage = () => {
  useScrollAnimation();
  const editorImage = "dp.jpeg"; // Replace with your actual image URL
  const backgroundImage = "about5.jpeg"; // Replace with your actual background image URL

  return (
    <div
    className="min-h-screen text-white py-20 bg-cover bg-center bg-no-repeat relative animate-fadeIn"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 33,1), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`,
      backgroundAttachment: "fixed", // Ensures the background is fixed
    }}
  >
  
      {/* About Section */}
      <section className="container mx-auto px-4 md:px-20  py-20 bg-black bg-opacity-60 rounded-lg shadow-lg animate-fadeIn">
        {/* Editor Image */}
        <div className="flex justify-center mb-8">
          <img
            src={editorImage}
            alt="Video Editor"
            className="w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg "
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
      <section className="py-10 bg-black bg-opacity-60 rounded-lg shadow-lg my-10  md:mx-20 animate-fadeIn">
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
            <a
              href="https://www.youtube.com/@trash-gang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1fd1ff] underline hover:text-white"
            >
              Trash
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
