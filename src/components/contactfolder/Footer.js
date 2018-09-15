import React from 'react'
import './Treeremoval.css'
import Contact from './contact.js'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;


const Footer = () => {
	return (
		<Element name="myScrollToElement" className="footer-section" id="footer">
			<div className="big-word"> Contact Us</div>
			<Contact />
		</Element>
	)
}


export default Footer;