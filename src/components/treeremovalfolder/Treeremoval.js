import React from 'react'
import './Treeremoval.css'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;


const TreeRemoval = () => {
	return (
	<Element name="myScrollToElement" className="treeremoval-section" id="tree-removal">			
			<Container>
			<Row>
			 <Col sm="12" md={{ size: 6, offset: 3 }}> <span className="title1"> Tree Removal </span> 
			</Col>
			</Row>

				<Row className="box">
					<div>
						<Col xs="12"> 
							<Col xs="12" sm="6">
							<div className="wrap">
							<div className="Icon"> <FontAwesomeIcon icon="users"/> </div>
									<h4>Experience</h4>
									<p className="words">We have dealt with all sorts of trees that came in all shapes and sizes. We beleive our experience pushes us above all competition, because no matter how dire the situation looks you can trust the pros to get the job done. </p>
									</div>
							</Col>
						 </Col>
					</div>

					<div className="box">
						<Col xs="12"> 
							<Col xs="12" sm="6">
							<div className="wrap">
							<div className="Icon"> <FontAwesomeIcon icon="exclamation-triangle"/> </div>
									<h4>Safety</h4>
									<p className="words">Our number one priority is the safety of everything surrounding the tree that will be removed. Therefore, we are very careful with all of our calculations and you will be able to relax with peace of mind and beleive in the pros.</p>
									</div>
							</Col>
						 </Col>
					</div>	
				</Row>
				<Row className="box">
					<div className="box">
						<Col xs="12"> 
							<Col xs="12" sm="6">
							<div className="wrap">
							<div className="Icon"> <FontAwesomeIcon icon="stroopwafel"/> </div>
									<h4>Stump Grinding</h4>
									<p className="words">As part of the tree removal process, the stump will typically be left as close to the ground as possible. If requested, using our special machinery we will get rid of the stump for you in no time.</p>
									</div>
							</Col>
						 </Col>
					</div>

					<div className="box">
						<Col xs="12"> 
							<Col xs="12" sm="6">
							<div className="wrap">
							<div className="Icon"> <FontAwesomeIcon icon="money-bill-alt"/> </div>
									<h4>Free Estimates</h4>
									<p className="words">You can call us with any question you have. We will get back to you right away and arrange a visit to checkout your tree. </p>
									</div>
							</Col>
						 </Col>
					</div>	
				</Row>

				
			</Container>




	</Element>
	)
}

export default TreeRemoval;