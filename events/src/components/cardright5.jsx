import React, { useState } from "react";
import valentineImage1 from "../assets/valentines/IMG_0001_bvb8yq_ngk17a (1).jpg";
import valentineImage2 from "../assets/valentines/IMG_0002_qpnh9g_mp5pyt (1).jpg";
import valentineImage3 from "../assets/valentines/IMG_0003_pyrmvj_nz3np2 (1).jpg";
import valentineImage4 from "../assets/valentines/IMG_0004_wqvpe2_b4wp3f (1).jpg";
import valentineImage5 from "../assets/valentines/IMG_0005_gjfc1x_mmdm6l (1).jpg";
import valentineImage6 from "../assets/valentines/IMG_0006_etbsyw_aots0d (1).jpg";
import valentineImage7 from "../assets/valentines/IMG_0007_ohhvzp_ntisv2 (1).jpg";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const CardRight5 = () => {
  // List of images
  const images = [
    valentineImage1,
    valentineImage2,
    valentineImage3,
    valentineImage4,
    valentineImage5,
    valentineImage6,
    valentineImage7
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
              VALENTINE'S SPECIAL
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
              The Valentine's Special event organized by Expresso - The Literary and Art Club of NIT Patna transformed the campus into a celebration of love, friendship, and creative expression.<br /><br />
              
              This heartwarming event featured a series of activities that allowed students to express their feelings and creativity:<br /><br />
              
              1. Letter Writing: Students penned heartfelt messages to friends, partners, or even secret crushes, exploring the timeless art of written expression.<br />
              
              2. Poetry Corner: Participants crafted romantic verses and shared them in a cozy, supportive environment that celebrated the poetic tradition of love.<br />
              
              3. Valentine's Card Workshop: A creative session where students designed and crafted unique greeting cards, adding personal touches that made each creation special.<br />
              
              4. Rose Exchange: A thoughtful exchange of roses with attached notes, allowing students to express appreciation and affection for their peers.<br /><br />
              
              The event space was beautifully decorated with thematic elements, creating a warm and inviting atmosphere. Throughout the day, students connected through shared creativity and celebration of relationships of all kinds.<br /><br />
              
              The Valentine's Special offered a refreshing break from academic routines, fostering campus camaraderie and providing a platform for emotional expression through artistic means. It highlighted how literary and artistic activities can strengthen community bonds and create lasting memories.<br /><br />
              
              Expresso's Valentine's Special has become an anticipated annual tradition at NIT Patna, celebrating the universal themes of love and connection through the power of words and art.
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
      </div>
    </div>
  );
};

export default CardRight5;
