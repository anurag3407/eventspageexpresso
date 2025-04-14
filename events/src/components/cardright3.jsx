import React, { useState } from "react";
import sanhitaImage1 from "../assets/sanhita/DSC_0040-min_yyhy2b_sgcler.jpg";
import sanhitaImage2 from "../assets/sanhita/DSC_0049-min_x1ezlc_y6tbah.jpg";
import sanhitaImage3 from "../assets/sanhita/DSC_0070-min_h8bjbh_cy3qqs.jpg";
import sanhitaImage4 from "../assets/sanhita/kqivfztpeiqbdcqmxyzg_yt0mkc.jpg";
import sanhitaImage5 from "../assets/sanhita/ygureoalb5qt6cackftr_nk81ly.jpg";
import sanhitaImage6 from "../assets/sanhita/DSC_0205.JPG-min_d58qfe_dkgi3a.jpg";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const CardRight3 = () => {
  // List of images
  const images = [
    sanhitaImage1,
    sanhitaImage2,
    sanhitaImage3,
    sanhitaImage4,
    sanhitaImage5,
    sanhitaImage6
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
              SANHITA
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
              Sanhita, the annual literary extravaganza organized by Expresso – The Literary and Art Club of NIT Patna, celebrated the power of words and creativity in grand style.<br /><br />
              
              The event featured a diverse array of literary competitions that showcased the talents of participants across different domains:<br /><br />
              
              1. Poetry Recitation: Participants mesmerized the audience with their eloquent delivery of original and classic poems.<br />
              2. Story Writing: Budding authors crafted compelling narratives that transported readers to imaginative worlds.<br />
              3. Debate: Sharp minds engaged in intellectual discourse, presenting well-reasoned arguments on contemporary issues.<br />
              4. Quiz: Knowledge enthusiasts demonstrated their general awareness and quick thinking.<br /><br />
              
              The atmosphere was charged with creative energy as participants from various disciplines came together to celebrate literature. The judges, comprising faculty members and literary enthusiasts, had the challenging task of selecting winners from a pool of exceptional talent.<br /><br />
              
              Sanhita concluded with a prize distribution ceremony honoring the exceptional performances across all categories. The event not only provided a platform for expression but also fostered a sense of community among literature lovers at NIT Patna.<br /><br />
              
              Through Sanhita, Expresso continues its tradition of nurturing literary talent and creating spaces for creative expression on campus.
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

export default CardRight3;
