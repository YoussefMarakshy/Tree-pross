import React from 'react'
import './TreeTrimming.css'
import Contact from './contact.js'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const TreeTrimming = () => {
	return (
		<Element name="myScrollToElement" className="treetrimming-section" id="tree-trimming">
			<div className="big-word"> 
			<Contact />

			</div>
		</Element>
	)
}

export default TreeTrimming;