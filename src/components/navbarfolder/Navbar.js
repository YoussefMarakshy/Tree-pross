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
				<nav className="nav-bar__buttons cl-effect-7">
				<a><Link className="nav-list" to="tree-removal">Tree Removal</Link></a>
				<a><Link className="nav-list" to="stump-grinding">Stump Grinding</Link></a>
				<a><Link className="nav-list" to="tree-trimming">Tree Trimming</Link></a>
				<a><Link className="nav-list" to="storm-damage">Storm Damage</Link></a>
				</nav>
				</div>
     		 </section>
    	</header>
	)
}

export default NavBar;


		