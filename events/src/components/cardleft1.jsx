import React, { useState } from "react";
import artopiaImage1 from "../assets/artopia/ArtopiaPoster_bmzb6o (1).png";
import artopiaImage2 from "../assets/artopia/Vibha_Rao_sthqmr.png";
import artopiaImage3 from "../assets/artopia/Vidushini_Prasad_wf5dkg.png";
import artopiaImage4 from "../assets/artopia/26vibharao_ytarky.png";
import artopiaImage5 from "../assets/artopia/eventbg_zip57y.png";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const CardLeft1 = () => {
  // List of images
  const images = [
    artopiaImage1,
    artopiaImage2,
    artopiaImage3,
    artopiaImage4,
    artopiaImage5
  ];

  // State to keep track of the current image
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-transparent text-white">
      <div className="w-[95%] flex flex-row items-center">
        {/* Circle Image Section - Left Side */}
        <div className="relative z-10">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-orange-500 bg-transparent" 
               style={{ boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.7)' }}>
            <img
              src={images[currentIndex]}
              alt="Circular view"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Image Navigation */}
          <div className="flex items-center justify-between w-1/2 mt-4 mx-auto text-3xl font-bold">
            <button
              className="hover:text-orange-500 text-4xl px-4"
              onClick={handlePrev}
            >
              &#8249;
            </button>
            <p>
              {currentIndex + 1}/{images.length}
            </p>
            <button
              className="hover:text-orange-500 text-4xl px-4"
              onClick={handleNext}
            >
              &#8250;
            </button>
          </div>
        </div>

        {/* 100px Spacing */}
        <div className="w-[100px]"></div>

        {/* Text Box Section - Right Side */}
        <div className="relative flex-1" style={{ marginTop: "-50px" }}>
          {/* Title outside the box */}
          <h1 
            className="text-[48px] font-bold text-left text-white mb-4"
            style={{ 
              fontFamily: "'Antonio', sans-serif",
              marginLeft: "10px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
            }}
          >
            ARTOPIA 2025
          </h1>
          
          <div 
            className="w-full rounded-lg overflow-y-auto p-8 relative"
            style={{ 
              backgroundImage: `url(${grungeTexture})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px',
              zIndex: 5,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="text-base sm:text-lg leading-6 whitespace-pre-line" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
              ARTOPIA was a vibrant three-day online art workshop organized
              by Expresso – The Literary and Art Club, NIT Patna, bringing
              together artists, creators, and enthusiasts to celebrate the
              power of artistic expression. The event featured renowned
              artists who shared their expertise, guiding participants through
              different artistic styles, techniques, and storytelling methods.
              <br /><br />
              The event featured three exclusive workshops:
              <br />
              - Fusing Tradition with Digital Art – Led by Aman Varma, this session explored the fusion of traditional artistic elements with modern digital tools.
              <br />
              - Storyboard Saga – Conducted by Vibha Rao, this workshop delved into the art of visual storytelling through comics and animation.
              <br />
              - Heritage Hues – Guided by Vidushini Prasad, this session celebrated the intricate beauty of Madhubani painting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft1;
