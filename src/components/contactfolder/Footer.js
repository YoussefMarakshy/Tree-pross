import React from 'react'
import './contact.css'
import { Container, Row, Col } from 'reactstrap';
import Contact from './contact.js'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;


const Footer = () => {
	return (
		<Element name="myScrollToElement" className="footer-section" id="footer">
			<Container>
			<div className="center">Contact Us</div>
			</Container>
			<Contact />
		</Element>
	)
}


export default Footer;