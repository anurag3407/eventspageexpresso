import React, { useState } from "react";
import munImage1 from "../assets/mun/DSC_0925-min_peci2j_ds0quu.jpg";
import munImage2 from "../assets/mun/DSC_0912-min_enfu1i_d1ukdc.jpg";
import munImage3 from "../assets/mun/DSC_0854-min_csyyht_mzaqpt.jpg";
import munImage4 from "../assets/mun/IMG-20230909-WA0003_yyct9o_bkot0i.jpg";
import munImage5 from "../assets/mun/DSC_0418_lclzcs_dpla5k.jpg";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const CardRight1 = () => {
  // List of images
  const images = [
    munImage1,
    munImage2,
    munImage3,
    munImage4,
    munImage5
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
              MUN 2.0
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
              The vibrant campus of NIT Patna was once again immersed in the spirit of diplomacy and debate as Model United Nations (MUN) 2.0 took place on 13th, 14th, and 15th September 2024 at Ashok Rajpath Campus.<br /><br />
              This second edition provided students a unique platform to simulate the workings of the United Nations and hone their diplomatic skills.<br /><br />

          In this edition, we had four committees to facilitate proceedings:<br /><br />

          1. General Assembly (UNGA): For addressing global challenges with collaborative action.<br />
          2. Security Council (UNSC): Resolving pressing security issues as world leaders.<br />
          3. Joint Parliamentary Committee (JPC): Simulating parliamentary discourse to tackle national concerns.<br />
          4. International Press (IP): Reporting the vibrant discussions and providing critical insights into the proceedings.<br /><br />

          The event commenced on the first day with an introduction and opening ceremony, setting the stage for three days of insightful discussions.<br />
          The second day focused on the Joint Parliamentary Committee (JPC), which delved into national concerns with legislative precision, while the International Press (IP) began its diligent coverage of the proceedings.<br /><br />

          On the third day, the General Assembly (UNGA) and Security Council (UNSC) tackled global challenges and security concerns, with the IP continuing its comprehensive reporting.<br />
          The event concluded on a grand note in the evening of the third day, with the winners' announcement, certificate distribution, and prize ceremony, recognizing the outstanding contributions and performances of the participants.<br /><br />

          MUN 2.0 offered an unparalleled platform for students to hone their public speaking, negotiation, and analytical skills while gaining practical exposure to the intricacies of international diplomacy and legislative processes.<br />
          This edition set a new benchmark for intellectual events on campus, leaving an indelible mark on its participants.
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

export default CardRight1;
