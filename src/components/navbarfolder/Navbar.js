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
				<a><Link className="" to="tree-removal">Tree Removal</Link></a>
				<a><Link className="" to="stump-grinding">Stump Grinding</Link></a>
				<a><Link className="" to="tree-trimming">Tree Trimming</Link></a>
				<a><Link className="" to="storm-damage">Storm Damage</Link></a>
				</nav>
				</div>
     		 </section>
    	</header>
	)
}

export default NavBar;


		