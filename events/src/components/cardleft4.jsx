import React, { useState } from "react";
import kitaabeImage1 from "../assets/kitaabe_padho/the_alchemist_vxot9e_ndpqbs.jpg";
import kitaabeImage2 from "../assets/kitaabe_padho/WhatsApp_Image_2024-06-24_at_13.29.24_b672cd16_oaspu9_a5tyo8.jpg";
import kitaabeImage3 from "../assets/kitaabe_padho/WhatsApp_Image_2024-06-24_at_13.31.00_431c578a_dsei1c_s3vpad.jpg";
import kitaabeImage4 from "../assets/kitaabe_padho/WhatsApp_Image_2024-06-24_at_13.31.17_4a5d86a9_zuimrw_yca9sm.jpg";
import kitaabeImage5 from "../assets/kitaabe_padho/Blue_and_White_Modern_Minimalistic_About_Us_Instagram_Story_qdnjkg_uw78fw.png";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const CardLeft4 = () => {
  // List of images
  const images = [
    kitaabeImage1,
    kitaabeImage2,
    kitaabeImage3,
    kitaabeImage4,
    kitaabeImage5
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
            KITAABE PADHO
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
              "Kitaabe Padho" was a captivating literary initiative organized by Expresso - The Literary and Art Club of NIT Patna, designed to foster a love for reading and literary exploration among students.<br /><br />
              
              The event centered around Paulo Coelho's classic novel "The Alchemist," a tale of self-discovery and following one's dreams. Participants were invited to immerse themselves in this transformative story before engaging in a series of literary activities:<br /><br />
              
              1. Book Discussion: Students gathered to share their interpretations of the novel's themes, characters, and philosophical underpinnings, creating a rich dialogue about personal journeys and destiny.<br />
              
              2. Quote Analysis: Participants selected and analyzed powerful quotes from the book, discussing how these insights related to their own lives and aspirations.<br />
              
              3. Creative Writing: Inspired by themes from the novel, students crafted their own short stories or poems that reflected on following one's "Personal Legend."<br /><br />
              
              The event created a warm, intellectual space where literature enthusiasts could connect over shared reading experiences. Faculty members and literary mentors guided discussions, encouraging deeper engagement with the text.<br /><br />
              
              "Kitaabe Padho" concluded with participants sharing how the book influenced their perspectives and receiving certificates of participation. This initiative not only promoted reading culture on campus but also emphasized the power of literature to inspire personal growth and community bonding.<br /><br />
              
              Through events like "Kitaabe Padho," Expresso continues to nurture a vibrant literary ecosystem at NIT Patna, connecting students through the transformative power of stories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft4;
