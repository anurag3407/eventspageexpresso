import React, { useState } from "react";
import dilSeCanvasImage from "../assets/dil_se_canvas/Event Picture (4).jpg";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const CardRight6 = () => {
  // List of images - only one image available
  const images = [
    dilSeCanvasImage
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
      <div className="w-[95%] flex flex-row items-center justify-between">
        {/* Text Box Section - Left Side */}
        <div className="relative flex-1" style={{ marginTop: "-50px" }}>
          {/* Title at the top-right of the text box */}
          <div className="flex justify-end mb-4">
            <h1 
              className="text-[48px] font-bold text-right text-white"
              style={{ 
                fontFamily: "'Antonio', sans-serif",
                marginRight: "10px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
              }}
            >
              DIL SE CANVAS
            </h1>
          </div>
          
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
              "Dil Se Canvas" was an innovative collaborative painting event organized by Expresso - The Literary and Art Club of NIT Patna. Held on March 3rd, 2024, at CV Raman Hall, this unique artistic experience invited participants to create magic on canvas through partnership and creative exchange.<br /><br />
              
              The concept of the event centered around artistic collaboration and the beauty of shared creation. Participants formed teams of two, with each artist bringing their own perspective and techniques to a single canvas. The creative process unfolded in two distinct phases:<br /><br />
              
              • First Phase: One artist began the painting based on a given theme, establishing the foundation and initial vision for the artwork.<br />
              
              • Second Phase: After a designated time, artists swapped positions, and the second team member continued and completed the painting, adding their own interpretation and artistic elements while respecting the initial direction.<br /><br />
              
              This dynamic approach to art-making encouraged flexibility, communication, and artistic compromise as participants navigated the challenge of creating cohesive artwork through shared effort. All materials were provided by the organizers, allowing participants to focus entirely on their creative expression.<br /><br />
              
              "Dil Se Canvas" (meaning "Canvas from the Heart") lived up to its name as the collaborative process inspired artists to connect not just with the canvas but with each other's creative visions. The event highlighted how artistic collaboration can lead to unexpected and beautiful results that transcend what might be possible through individual effort alone.<br /><br />
              
              The event culminated in an informal gallery of the completed works, showcasing the diverse interpretations and harmonious blending of artistic styles that emerged from these creative partnerships.
            </p>
          </div>
        </div>

        {/* 100px Spacing */}
        <div className="w-[100px]"></div>

        {/* Circle Image Section - Right Side */}
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
              disabled={images.length <= 1}
            >
              &#8249;
            </button>
            <p>
              {currentIndex + 1}/{images.length}
            </p>
            <button
              className="hover:text-orange-500 text-4xl px-4"
              onClick={handleNext}
              disabled={images.length <= 1}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRight6;
