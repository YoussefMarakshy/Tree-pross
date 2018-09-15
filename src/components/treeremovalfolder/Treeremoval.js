import React from 'react'
import './Treeremoval.css'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;


const TreeRemoval = () => {
	return (
		<Element name="myScrollToElement" className="treeremoval-section" id="tree-removal">			
			<div className="typing_left">
			<span className="cool-fontt">Tee Removal</span> can be dangerous and tedious, but not for the pros.<br/>
			 After removing thousands of trees that came in all shapes and sizes you can count on us to get the job done safely and efficiently 
			</div>
			<div className="img_right">
			<img src="http://artwoodenterprises.com/wp-content/uploads/2016/10/artwood_tree_cutting_sillouette.jpg" alt="" height="700px"/>
			</div>

		</Element>
	)
}

export default TreeRemoval;