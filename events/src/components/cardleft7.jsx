import React, { useState } from "react";
import doodleImage from "../assets/doodle_your_day/Event Picture (1).jpg";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const CardLeft7 = () => {
  // List of images - only one image available
  const images = [
    doodleImage
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
            DOODLE YOUR DAY
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
              "Doodle Your Day" was a delightful artistic celebration organized by Expresso - The Literary and Art Club of NIT Patna on April 15th in front of the Architecture Department in honor of World Art Day.<br /><br />
              
              This relaxed and inclusive event invited students from all disciplines to embrace the simple joy of doodling as a form of creative expression. Participants were provided with art supplies and encouraged to create spontaneous doodles that captured moments, feelings, or random thoughts from their day.<br /><br />
              
              The philosophy behind the event centered on doodling as a therapeutic outlet, a moment of mindfulness, and a gateway to unexpected inspiration. As participants let their pens and pencils wander across the paper, they discovered the freedom that comes from creating without judgment or expectation.<br /><br />
              
              Throughout the afternoon, the space buzzed with creative energy as students shared their doodles, exchanged techniques, and found inspiration in each other's work. Faculty members joined in, creating a wonderful cross-section of the campus community engaged in artistic exploration.<br /><br />
              
              "Doodle Your Day" highlighted how every detail finds its place in the tapestry of time, with each doodle capturing a fragment of the day and collectively weaving together the story of a day well-lived. The casual, drop-in nature of the event made art accessible to everyone, reinforcing Expresso's commitment to fostering creativity throughout the campus community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft7;
