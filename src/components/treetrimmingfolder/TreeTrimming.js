import React from 'react'
import './TreeTrimming.css'
import { Container, Row, Col } from 'reactstrap';
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const TreeTrimming = () => {
	return (
		<Element name="myScrollToElement" className="treetrimming-section" id="tree-trimming">
		<Container>
		<div className="tree-trimming-container"> 
		<h1 className="title">Tree Trimming</h1> 
			<div className="description">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
		</Container>
			<div className="imagesContainer">
				<img src="https://cdn.discordapp.com/attachments/365188764781510657/496911134595612682/IMG_4791.jpeg" alt="" className="caroussel-images"/>
				<img src="https://cdn.discordapp.com/attachments/365188764781510657/496926184550957057/IMG_3983_2_copy.jpg" alt="" className="caroussel-images"/>
				<img src="https://cdn.discordapp.com/attachments/365188764781510657/496911134595612682/IMG_4791.jpeg" alt="" className="caroussel-images"/>
				<img src="https://cdn.discordapp.com/attachments/365188764781510657/496926184550957057/IMG_3983_2_copy.jpg" alt="" className="caroussel-images"/>
			</div>
		</Element>
	)
}

export default TreeTrimming;

