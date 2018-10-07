import React from 'react'
import './Stumpgrinding.css'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const StumpGrinding = () => {
	return (
		<Element name="myScrollToElement" className="stumpgrinding-section" id="stump-grinding">
			
			<div>
				<div className="question">Unattractive Stump?<br/></div>
				<p className="stump-sent"> Using Our Top of the line Stump Grinding Machinery and equipment we will make sure you are left with a clean and healthy looking garden.</p>
			</div>

		</Element>
	)
}
export default StumpGrinding;