import React from 'react'
import './Stormdamage.css'
import { Container, Row, Col } from 'reactstrap';
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const StormDamage = () => {
	return (
		<Element name="myScrollToElement" className="stormdamage-section" id="storm-damage">
		
			<Container>
			 		<div className="title"> Storm Damage</div>
			</Container>
		</Element>
	)
}

export default StormDamage;