import React from 'react'
import './Stumpgrinding.css'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const StumpGrinding = () => {
	return (
		<Element name="myScrollToElement" className="stumpgrinding-section" id="stump-grinding">
			<div className="big-word"> PAGE 2</div>
		</Element>
	)
}

export default StumpGrinding;