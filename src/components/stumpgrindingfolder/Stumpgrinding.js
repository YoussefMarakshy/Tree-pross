import React from 'react'
import './Stumpgrinding.css'
import { Container, Row, Col } from 'reactstrap';
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;

const StumpGrinding = () => {
	return (
		<Element name="myScrollToElement" className="stumpgrinding-section" id="stump-grinding">

			<Container>
				<Row>
					<Col xs="6">
					<div className="question"> Unattractive Stump? </div>
					</Col>
				</Row>
				<Row>
					<Col>
					<div className="answer"> Using our top of the line machinery and equipment. The stump will be gone quickly and efficiently leaving you with a healthy looking garden. </div>
					</Col>
				</Row>
			</Container>

		</Element>
	)
}
export default StumpGrinding;