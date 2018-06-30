import React from 'react'
import './Stormdamage.css'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const StormDamage = () => {
	return (
		<Element name="myScrollToElement" className="stormdamage-section" id="storm-damage">
			<div className="big-word"> PAGE 4</div>
		</Element>
	)
}

export default StormDamage;