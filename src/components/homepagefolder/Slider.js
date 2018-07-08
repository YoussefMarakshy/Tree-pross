import React, { Component } from 'react'

class Slider extends Component {

	constructor(props) {
		super();
		let slides = ["slide1","slide2","slide3", "sakjhfdiusd"]
		this.state  = { 
			slides,
			sliderIndex: 0,
			slidesContainerWidthPercentage: slides.length*100,
			slidesWidth: 100/slides.length
		};

	}
	previousSlide = e => {
		if(this.state.sliderIndex>0)
			this.setState({sliderIndex: this.state.sliderIndex-1});
	}


	nextSlide = e => {
		if(this.state.sliderIndex<(this.state.slides.length - 1))
			this.setState({sliderIndex: this.state.sliderIndex+1});
	}

	render() {

		return (
			<div className="slider">
				<div className="myslider" data-dots="true" data-autoplay="false" data-show-slides="1">
					<div className="images_container" style={{ width: this.state.slidesContainerWidthPercentage+'%', transform: `translateX(-${this.state.slidesWidth*this.state.sliderIndex}%)`}}>
						{ this.state.slides.map((slide,index) => <div key={index} style={{ width: this.state.slidesWidth+'%'}} className="slide"><h1>slide</h1><h1>slide</h1><h1>slide</h1><h1>slide</h1><h1>slide</h1><h1>slide</h1></div>) }
					</div>
				</div>
				<div className="slider_nav">
					<button onClick={ this.previousSlide }>prev</button>
					<button onClick={ this.nextSlide }>next</button>
				</div>
			</div>
		)
	}

}

export default Slider;