import React, { Component } from 'react';
import './Homepage.css';
import Slider from './Slider';



const slides = [
	<div className="slide-content">
		<div className="first-slide-content-title"> 
			For Professional Tree Service
		</div>
		<div className="first-slide-content-subtitle"> 
			20 Years of Tree Removal, Trimming and Pruning
		</div>
	</div>,
	<div className="slide-content2">
		<div className="first-slide-content-title">
			Call For Free Estimates
		</div>
		<div className="first-slide-content-subtitle">
			We will visit you and provide you with a fair estimate
		</div>
	</div>
];


class Homepage extends Component{
	render(){
		return (
			<div id="homepage">
			<Slider slides={slides}/>
			</div>
		);
>>>>>>> 107483082883c8c1780dc3081d1cd258383c501d
		
	}
}

export default Homepage;