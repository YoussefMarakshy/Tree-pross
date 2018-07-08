import React, { Component } from 'react';
import './Homepage.css';

import Slider from './Slider';



const slides = [
	<div className="slide-content">Hello</div>,
	<div className="slide-content">hi</div>,
	<div className="slide-content">sup</div>,
	<div className="slide-content">true</div>
];


class Homepage extends Component{
	render(){
		return (
			<Slider slides={slides}/>
		);
		
	}
}

export default Homepage;