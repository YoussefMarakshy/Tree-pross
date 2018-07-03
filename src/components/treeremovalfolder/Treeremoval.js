import React from 'react'
import './Treeremoval.css'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;


const TreeRemoval = () => {
	return (
		<Element name="myScrollToElement" className="treeremoval-section" id="tree-removal">
			<div className="big-word"> PAGE 1</div>
			<i className="fab fa-accessible-icon"></i>
			Tree removal can be very tricky especially when the tree is hazardous to its surrounding area. This requires a considerable amount of expertise, and after removing thousands of trees our Pros can guarantee you a very clean, professional and safe removal.
		</Element>
	)
}

export default TreeRemoval;