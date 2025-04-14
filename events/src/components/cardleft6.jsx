import React, { useState } from "react";
import movieImage1 from "../assets/movie_matinee/fpll0rjzfbgcf8cd68gx_qzq8u5.jpg";
import movieImage2 from "../assets/movie_matinee/n3b8puwcjgzlrexwwxrc_waxusm.jpg";
import movieImage3 from "../assets/movie_matinee/ulms1l2zpxdsb4nt7dgj_ewp4k7.jpg";
import grungeTexture from "../assets/grunge-wall-texture.jpg";

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const CardLeft6 = () => {
  // List of images
  const images = [
    movieImage1,
    movieImage2,
    movieImage3
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
            MOVIE MATINEE
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
              "Movie Matinee" was an engaging cinematic event organized by Expresso - The Literary and Art Club of NIT Patna, designed to celebrate the art of filmmaking and the power of visual storytelling.<br /><br />
              
              The event featured a carefully curated selection of critically acclaimed films that explored diverse themes and storytelling techniques. Students gathered in a comfortable campus venue transformed into an intimate theater space for the screenings.<br /><br />
              
              Each film showing was followed by a thoughtful discussion session where participants analyzed various aspects of the movies:<br /><br />
              
              • Narrative Structure: Exploring how the story was crafted and presented<br />
              • Character Development: Discussing the evolution and complexity of key characters<br />
              • Visual Techniques: Analyzing cinematography, color palettes, and visual symbolism<br />
              • Thematic Depth: Examining the underlying messages and societal reflections<br /><br />
              
              The discussions were facilitated by film enthusiasts from the club and occasionally featured insights from faculty members with expertise in visual media and storytelling.<br /><br />
              
              "Movie Matinee" created a space for students to develop critical viewing skills while appreciating cinema as a powerful artistic medium. The event fostered a community of film enthusiasts on campus and encouraged thoughtful engagement with visual content beyond passive consumption.<br /><br />
              
              Through this initiative, Expresso continued its commitment to promoting various forms of artistic expression, highlighting how film serves as a unique intersection of literary storytelling and visual art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft6;
