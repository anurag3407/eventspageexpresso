import React, { useState } from "react";
import avlokanImage from "../assets/avlokan/Event Picture.jpg";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const CardLeft5 = () => {
  // List of images - only one image available
  const images = [
    avlokanImage
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
            AVLOKAN
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
              "Avlokan" was a thoughtfully curated art appreciation event organized by Expresso - The Literary and Art Club of NIT Patna, designed to deepen students' understanding and appreciation of various artistic traditions and movements.<br /><br />
              
              The event transformed campus spaces into immersive galleries showcasing diverse artistic styles and masterpieces from different eras. Participants were guided through carefully designed exhibits that highlighted the evolution of art through history.<br /><br />
              
              The program featured several engaging components:<br />
              
              • Guided Art Tours: Art enthusiasts from the club led small groups through the exhibition, providing insights into techniques, historical context, and artistic significance.<br />
              
              • Interactive Workshops: Professional artists conducted sessions where participants could try their hand at various artistic techniques while learning about their historical development.<br />
              
              • Art Interpretation Sessions: Students engaged in thoughtful discussions about selected artworks, sharing personal perspectives and developing critical viewing skills.<br /><br />
              
              "Avlokan" created a unique space for cultural enrichment on campus, fostering a deeper appreciation for the visual arts among students from all disciplines. The event emphasized that understanding art is not just about recognizing famous works but developing the ability to interpret and connect with artistic expression.<br /><br />
              
              Through this celebration of artistic heritage, Expresso continued its mission of nurturing cultural awareness and creative appreciation within the NIT Patna community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft5;
