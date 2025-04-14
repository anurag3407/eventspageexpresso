import React from 'react'
import CardLeft1 from '../components/cardleft1'
import CardRight1 from '../components/cardright1'
import CardLeft2 from '../components/cardleft2'
import CardRight6 from '../components/cardright6'
import CardLeft3 from '../components/cardleft3'
import CardRight3 from '../components/cardright3'
import CardLeft4 from '../components/cardleft4'
import CardLeft5 from '../components/cardleft5'
import CardLeft7 from '../components/cardleft7'
import CardRight5 from '../components/cardright5'
import CardLeft6 from '../components/cardleft6'
import CardRight4 from '../components/cardright4'
import CardRight2 from '../components/cardright2'

const Events = () => {
	return (
		<div className="bg-[#4B4B4B] min-h-screen py-8">
			{/* Artopia */}
			<CardLeft1/>
			
			{/* MUN 2.0 */}
			<CardRight1/>
			
			{/* Awaaz */}
			<CardLeft2/>
			
			{/* Dil Se Canvas */}
			<CardRight6/>
			
			{/* MUN */}
			<CardLeft3/>
			
			{/* Sanhita */}
			<CardRight3/>
			
			{/* Kitaabe Padho */}
			<CardLeft4/>
			
			{/* Avlokan */}
			<CardLeft5/>
			
			{/* Doodle Your Day */}
			<CardLeft7/>
			
			{/* Valentine's Week */}
			<CardRight5/>
			
			{/* Movie Matinee */}
			<CardLeft6/>
			
			{/* Portrait Palooza */}
			<CardRight4/>
			
			{/* Kalakriti */}
			<CardRight2/>
		</div>
	)
}

export default Events