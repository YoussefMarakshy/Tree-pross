import React, { Component } from 'react';
import './Homepage.css';
import Slider from './Slider';
import { Container, Row, Col } from 'reactstrap';


const slides = [
	<div className="slide-content">
		<Container>
				<Row>
					<Col>
					<div className="titlerino"> For Professional Tree Service </div>
					</Col>
				</Row>
				<Row>
					<Col>
					<div className="subtitlerino"> 20 Years of Tree Removal, Trimming and Pruning </div>
					</Col>
				</Row>
			</Container>
	</div>,
	<div className="slide-content2">
		<Container>
				<Row>
					<Col>
					<div className="titlerino"> Call For Free Estimates </div>
					</Col>
				</Row>
				<Row>
					<Col>
					<div className="subtitlerino"> We will visit you and provide you with a fair price </div>
					</Col>
				</Row>
			</Container>
	</div>
];


class Homepage extends Component{
	render(){
		return (
			<div id="homepage">
			<Slider slides={slides}/>
			</div>
		);
		
	}
}

export default Homepage;
