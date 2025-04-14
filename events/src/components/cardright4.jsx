import React, { useState } from "react";
import portraitImage from "../assets/portrait_palooza/Event Picture (5).jpg";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const CardRight4 = () => {
  // List of images - only one image available
  const images = [
    portraitImage
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
              PORTRAIT PALOOZA
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
              "Portrait Palooza" was an engaging artistic event organized by Expresso - The Literary and Art Club of NIT Patna, dedicated to celebrating the art of portraiture in its many forms and styles.<br /><br />
              
              This unique event brought together portrait enthusiasts and aspiring artists for a day focused on capturing the human essence through various artistic mediums. Participants were encouraged to explore different portrait styles including classical realism, abstract interpretation, caricature, and digital portraiture.<br /><br />
              
              The event featured several exciting components:<br /><br />
              
              • Live Portrait Sessions: Volunteer models posed for timed sessions while participants sketched, painted, or digitally rendered their portraits.<br />
              
              • Portrait Technique Workshops: Professional artists demonstrated various portraiture techniques, from achieving likeness to expressing character through exaggeration.<br />
              
              • Portrait Exchange: Participants were paired to create portraits of each other, fostering connection through art.<br />
              
              • Portrait Gallery: A culminating exhibition showcased all the portraits created during the event, highlighting the diversity of styles and interpretations.<br /><br />
              
              "Portrait Palooza" emphasized that portraiture is more than creating a likeness—it's about capturing personality, emotion, and story. The event created a supportive environment for artistic growth while celebrating the profound human connection that occurs when one person takes the time to truly see and interpret another through art.<br /><br />
              
              This celebration of portraiture reinforced Expresso's commitment to fostering diverse artistic expressions and building community through creative engagement.
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

export default CardRight4;
