import React from 'react'
import './Stumpgrinding.css'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const StumpGrinding = () => {
	return (
		<Element name="myScrollToElement" className="stumpgrinding-section" id="stump-grinding">
			<div className="stump-sent">
				After Tree Removal you are left with an unattractive stump.<br/>
				How Do We Deal With Them?<br/> 
				Using Our top of line machinery and equipment that will grind the Stump and leave you with a healthy garden.<br/>
			</div>

		</Element>
	)
}
export default StumpGrinding;