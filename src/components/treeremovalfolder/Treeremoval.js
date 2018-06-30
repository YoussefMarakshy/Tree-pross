import React from 'react'
import './Treeremoval.css'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const TreeRemoval = () => {
	return (
		<Element name="myScrollToElement" className="treeremoval-section" id="tree-removal">
			<div className="big-word"> PAGE 1</div>
		</Element>
	)
}

export default TreeRemoval;