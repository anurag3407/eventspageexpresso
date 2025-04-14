import React, { useState } from "react";
import kalakritiImage from "../assets/kalakriti/Event Picture (2).jpg";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

const CardRight2 = () => {
  const images = [
    kalakritiImage
  ];

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
              KALAKRITI
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
              "Kalakriti," organized by Expresso - The Literary and Art Club of NIT Patna under TCF '24, was a vibrant celebration of artistic expression that invited students to unleash their creative spirit in innovative ways. This multifaceted event featured ten diverse artistic competitions, each showcasing different dimensions of visual creativity.<br /><br />

              The event comprised ten engaging sub-events that encouraged both solo participants and teams:<br /><br />

              1. Dye Verse: An exciting T-shirt painting competition that proved to be a crowd favorite.<br />
              2. Frame the Face: Participants demonstrated their portrait skills by painting faces of people in their surroundings.<br />
              3. No Brushes: Artists created themed paintings using alternative tools, challenging conventional techniques.<br />
              4. Caricature-Culture: A nostalgic competition focused on creating cartoon characters that evoked childhood memories.<br />
              5. DoodleFiesta: Solo participants showcased their talent through creative doodling.<br />
              6. Safar e Rangoli: Teams of three created colorful rangoli designs based on assigned themes.<br />
              7. Clay-Clash: Two-member teams crafted clay models based on spontaneously given themes.<br />
              8. TattooFiesta: Participants created original temporary tattoos on volunteers, showcasing their design skills.<br />
              9. CineFrame: A visualization challenge where participants framed works based on given themes.<br />
              10. Mosaic-Marvel: Solo or duo participants created innovative collages.<br /><br />

              These imaginative competitions encouraged participants to push boundaries and showcase their unique artistic perspectives. "Kalakriti" celebrated the diversity of artistic expression and provided a platform for students to exhibit their talents while fostering a vibrant creative community on campus.
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

export default CardRight2;
