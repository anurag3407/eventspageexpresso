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

const CardLeft3 = () => {
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
            NITP MUN 2023
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
              The inaugural National Institute of Technology Patna Model United Nations (NITP MUN 2023) was held from September 9-10, 2023, bringing together students from various institutions to engage in diplomatic discourse and problem-solving.
              <br /><br />
              NITP MUN 2023 featured three dynamic committees:
              <br />
              - United Nations General Assembly (UNGA): Addressing global challenges and fostering international cooperation.
              <br />
              - All India Political Parties Meet (AIPPM): Discussing and debating on national issues with representatives from various political parties.
              <br />
              - International Press: Covering the proceedings and deliberations of the other committees while maintaining journalistic integrity.
              <br /><br />
              The conference offered delegates an immersive experience in diplomacy, negotiation, and public speaking. Through research, debate, and collaboration, participants gained valuable insights into international relations and global issues.
              <br /><br />
              The event concluded with an awards ceremony recognizing outstanding delegates for their exceptional performance across committees. NITP MUN 2023 set a strong foundation for future editions, establishing NIT Patna as a hub for diplomatic discourse and intellectual exchange.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft3;
