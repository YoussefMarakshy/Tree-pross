import React from 'react'
import './TreeTrimming.css'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const TreeTrimming = () => {
	return (
		<Element name="myScrollToElement" className="treetrimming-section" id="tree-trimming">
			<div className="big-word"> PAGE 3</div>
		</Element>
	)
}

export default TreeTrimming;