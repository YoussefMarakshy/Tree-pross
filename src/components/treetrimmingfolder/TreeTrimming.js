import React from 'react'
import './TreeTrimming.css'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const TreeTrimming = () => {
	return (
		<Element name="myScrollToElement" className="treetrimming-section" id="tree-trimming">
			<div className="typing_left"> 
				Pruning and Trimming Trees is very important when it comes to the health of the tree and the safety of its surroundings.
			 </div>
			<div className="img_right1"> 
			<img src="https://media.discordapp.net/attachments/283993997691584512/488105134140686366/trimminprunin.png" alt="" height="700"/>
			</div>
		</Element>
	)
}

export default TreeTrimming;