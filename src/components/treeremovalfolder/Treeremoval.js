import React from 'react'
import './Treeremoval.css'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;


const TreeRemoval = () => {
	return (
	<Element name="myScrollToElement" className="treeremoval-section" id="tree-removal">			
			<div className="Container">
			<Container>
				<Row>
					<Row>
						<Col xs="12"> 
							<Col xs="12" sm="6">
							<div className="wrap">
							<div className="Icon"> <FontAwesomeIcon icon="stroopwafel"/> </div>
									<h4>Unique Setting</h4>
									<p className="words">In addition to a sprawling slab yard stocked with the finest natural stone, we offer a unique retail setting in which to consult with our specialists about your design and architecture needs.</p>
									</div>
							</Col>
						 </Col>
					</Row>

					<Row>
						<Col xs="12"> 
							<Col xs="12" sm="6">
							<div className="wrap">
							<div className="Icon"> <FontAwesomeIcon icon="stroopwafel"/> </div>
									<h4>Unique Setting</h4>
									<p className="words">In addition to a sprawling slab yard stocked with the finest natural stone, we offer a unique retail setting in which to consult with our specialists about your design and architecture needs.</p>
									</div>
							</Col>
						 </Col>
					</Row>	
				</Row>
				<Row>
					<Row>
						<Col xs="12"> 
							<Col xs="12" sm="6">
							<div className="wrap2">
							<div className="Icon"> <FontAwesomeIcon icon="stroopwafel"/> </div>
									<h4>Unique Setting</h4>
									<p className="words">In addition to a sprawling slab yard stocked with the finest natural stone, we offer a unique retail setting in which to consult with our specialists about your design and architecture needs.</p>
									</div>
							</Col>
						 </Col>
					</Row>

					<Row>
						<Col xs="12"> 
							<Col xs="12" sm="6">
							<div className="wrap2">
							<div className="Icon"> <FontAwesomeIcon icon="stroopwafel"/> </div>
									<h4>Unique Setting</h4>
									<p className="words">In addition to a sprawling slab yard stocked with the finest natural stone, we offer a unique retail setting in which to consult with our specialists about your design and architecture needs.</p>
									</div>
							</Col>
						 </Col>
					</Row>	
				</Row>
			</Container>
			</div>




	</Element>
	)
}

export default TreeRemoval;