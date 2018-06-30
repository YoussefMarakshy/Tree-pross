import React from 'react'
import './Navbar.css'
const ScrollAnim = require('rc-scroll-anim');
const Link = ScrollAnim.Link;

const NavBar = () => {
	return (
		<header>
     	 	<section>
       			<div className="nav-bar">
				<img src="./images/logo.png" alt="" className="nav-bar__logo"/>
				<div className="nav-bar__buttons">
				<Link className="nav-list" to="tree-removal">Tree Removal</Link>
				<Link className="nav-list" to="stump-grinding">Stump Grinding</Link>
				<Link className="nav-list" to="tree-trimming">Tree Trimming</Link>
				<Link className="nav-list" to="storm-damage">Storm Damage</Link>
				</div>
				</div>
     		 </section>
    	</header>
	)
}

export default NavBar;


		