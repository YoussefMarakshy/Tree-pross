import React from 'react'
import './contact.css'
import Contact from './contact.js'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;


const Footer = () => {
	return (
		<Element name="myScrollToElement" className="footer-section" id="footer">
			<div className=""></div>
			<Contact />
		</Element>
	)
}


export default Footer;