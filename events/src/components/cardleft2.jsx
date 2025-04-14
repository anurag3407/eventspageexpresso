import React, { useState } from "react";
import awaazImage1 from "../assets/awaaz/DSC_1605-min_no52ku_akqkay.jpg";
import awaazImage2 from "../assets/awaaz/DSC_1209-min_m72xo1_agpyue.jpg";
import awaazImage3 from "../assets/awaaz/DSC_1139-min_otyjxt_vepy4p.jpg";
import awaazImage4 from "../assets/awaaz/DSC_1109-min_ots81r_ahk6cz.jpg";
import awaazImage5 from "../assets/awaaz/DSC_1000-min_muw1j2_nurdfc.jpg";
import awaazImage6 from "../assets/awaaz/_DSC0125-min_svrzfd_sla5ck.jpg";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

const CardLeft2 = () => {
  // List of images
  const images = [
    awaazImage1,
    awaazImage2,
    awaazImage3,
    awaazImage4,
    awaazImage5,
    awaazImage6
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
            AWAAZ 2023
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
              AWAAZ 2023, the much-anticipated annual cultural extravaganza of NIT Patna, illuminated the campus with vibrant creativity and youthful energy from March 17-19, 2023. This three-day celebration was a kaleidoscope of artistic expression, featuring a wide array of competitions, performances, and interactive sessions that showcased the diverse talents of students.
              <br /><br />
              The festival kicked off with a grand inauguration ceremony, setting the stage for what would be an unforgettable experience. The main stage came alive with electrifying performances by renowned artists and bands, complemented by student-led cultural shows that displayed exceptional talent in music, dance, and theater.
              <br /><br />
              The attendees were treated to a mesmerizing display of poetic prowess, as each poet shared their unique perspectives and interpretations of love, life, and the human experience.
              <br /><br />
              AWAAZ was a resounding success, leaving a lasting impression on everyone who attended. This was possible only due to the amazing cooperation and active participation of the members of both the fantastic clubs of NIT Patna, Expresso - The Literary & Art Club & Saptak - The Music Club.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft2;
