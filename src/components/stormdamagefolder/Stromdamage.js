import React from 'react'
import './Stormdamage.css'
import { Container, Row, Col, Media } from 'reactstrap';
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const StormDamage = () => {
	return (
		<Element name="myScrollToElement" className="stormdamage-section" id="storm-damage">
		
			<Container>
				<Media>
     		 <Media left href="https://cdn.discordapp.com/attachments/365188764781510657/505453481985966090/tree_storm_1_.jpg">
     		   <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
    		  </Media>
   		   <Media body>
    	    <Media heading>
          Storm Damage
     	   </Media>
     	   In the unfortunate case of storm damage, please don't hesitate to call us right away. <br/>
     	   We will clean up the debris and remove broken branches or the entire tree if it needs to be done.
     	   We will also guarentee that what remains of the tree is safe and not a risk to other structures, people, or trees surrounding it.
     	 </Media>
    </Media>
			</Container>
		</Element>
	)
}

export default StormDamage;

// <div className="title"> Storm Damage</div>
			 		// <div className="title2"> In the unfortunate case of storm damage, please don't hesitate to call us right away. 
			 		//  </div>