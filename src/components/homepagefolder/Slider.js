import React, { Component } from 'react'

class Slider extends Component {

	constructor(props) {
		super();
		this.state  = { 
			sliderIndex: 0,
			slidesContainerWidthPercentage: props.slides.length*100,
			slidesWidth: 100/props.slides.length
		};
	}
	previousSlide = e => {
		if(this.state.sliderIndex>0)
			this.setState({sliderIndex: this.state.sliderIndex-1});
	}


	nextSlide = e => {
		if(this.state.sliderIndex<(this.props.slides.length - 1))
			this.setState({sliderIndex: this.state.sliderIndex+1});
	}

	render() {

		return (
			<div className="slider">
				<div className="myslider" data-dots="true" data-autoplay="false" data-show-slides="1">
					<div className="images_container" style={{ width: this.state.slidesContainerWidthPercentage+'%', transform: `translateX(-${this.state.slidesWidth*this.state.sliderIndex}%)`}}>
						{ this.props.slides.map((slide,index) => <div key={index} style={{ width: this.state.slidesWidth+'%'}} className="slide">{slide}</div>) }
					</div>
				</div>
				<a className="slider-nav previous-nav" onClick={ this.previousSlide } ><i className="fas fa-chevron-left"></i> </a>
				<a className="slider-nav next-nav" onClick={ this.nextSlide } ><i className="fas fa-chevron-right"></i> </a>
			</div>
		)
	}

}

export default Slider;