import React from 'react'
import Navbar from '../components/navbar'
import Event from '../assets/events.png'
import CardLeft1 from '../components/cardleft1'

// Font import comment - ensure these fonts are included in your index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

const home = () => {
return (
<div>
	<Navbar />
	<div className="relative w-full h-screen">
		<img src={Event} alt="Description of the image" className="w-full h-full object-cover" />
		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-[10vw] font-bold text-white" style={{ fontFamily: "'Antonio', sans-serif" }}>
			EVENTS
		</div>
	</div>
</div>
)
}

export default home