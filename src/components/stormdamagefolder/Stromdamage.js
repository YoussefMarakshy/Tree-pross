import React from 'react'
import './Stormdamage.css'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const StormDamage = () => {
	return (
		<Element name="myScrollToElement" className="stormdamage-section" id="storm-damage">
			<div className="storm-word ">myScrollToElementmyScrollToElementmyScrollToElementmyScrollToElement.
			myScrollToElementmyScrollToElementmyScrollToElementmyScrollToElement
			myScrollToElement </div>
		</Element>
	)
}

export default StormDamage;