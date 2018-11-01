import React from 'react'
import './Stormdamage.css'
import { Container, Row, Col, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const StormDamage = () => {
	return (
		<Element name="myScrollToElement" className="stormdamage-section" id="storm-damage">
			<div className="imagesContainer">
			<img src="https://cdn.discordapp.com/attachments/365188764781510657/496911134595612682/IMG_4791.jpeg" alt="" className="caroussel-images"/>
			<img src="https://cdn.discordapp.com/attachments/365188764781510657/496926184550957057/IMG_3983_2_copy.jpg" alt="" className="caroussel-images"/>
			<img src="https://cdn.discordapp.com/attachments/365188764781510657/496911134595612682/IMG_4791.jpeg" alt="" className="caroussel-images"/>
			<img src="https://cdn.discordapp.com/attachments/365188764781510657/496926184550957057/IMG_3983_2_copy.jpg" alt="" className="caroussel-images"/>
			</div>
			<Container>

			<div className="title5">
			<FontAwesomeIcon icon="bolt"/> Storm Damage
			</div>
			<div className="storm1">
			In the unfortunate case of storm damage, please don't hesitate to call us right away.<br/>
			 We will clean up the debris and remove broken branches or the entire tree if it needs to be done.<br/>
          	 We will also guarentee that what remains of the tree is safe and not a risk to other structures, people, or any trees surrounding it.
          	 </div>
			<Row>
			<Col className="title2">
			</Col>
			</Row>
          	 </Container>
		</Element>

	)
}

export default StormDamage;

// <div className="title"> Storm Damage</div>
			 		// <div className="title2"> In the unfortunate case of storm damage, please don't hesitate to call us right away. 
			 		//  </div>