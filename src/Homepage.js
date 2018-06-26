import React, { Component } from 'react';
import './Homepage.css';
const ScrollAnim = require('rc-scroll-anim');
const Link = ScrollAnim.Link;
// const Element = ScrollAnim.Element;

class Homepage extends Component{
	
	render(){
		return (
			<div>
				<div className="nav-bar">
					<img src="./images/logo.png" alt="" className="nav-bar__logo"/>
					<div className="nav-bar__buttons">
						<Link className="nav-list" to="tree-trimming">nav0</Link>
						<p>hello</p>
						<p>hello</p>
					</div>
				</div>
				<div className="homepage-section">
					<p>HOMEPAGE</p>
				</div>
			</div>
		)
	}
}

export default Homepage;