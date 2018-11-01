import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ScrollAnim = require('rc-scroll-anim');
const Link = ScrollAnim.Link;

const NavBar = () => {
	return (
		<header>
     	 	<section>
       			{/*<div className="nav-bar">
					
					<nav className="nav-bar__buttons cl-effect-7">
						
						
						<a><Link className="nav-list" to="tree-trimming">Trimming & Pruning</Link></a>
						<a><Link className="nav-list" to="storm-damage">Storm Damage</Link></a>
						<a><Link className="nav-list" to="footer"> Contact Us <br/> 608-466-0301 </Link></a>
					</nav>
					<i className="fas fa-bars menu-button"></i>


<li className="nav-item">
				       
				      </li>


				</div>*/}
				<nav className="navbar fixed-top navbar-expand-lg navbar-dark justify-content-between nav-bar">
				  <a className="navbar-brand" href="#"><Link className="" to ="homepage"> <img src="./images/logo.png" alt="" className="nav-bar__logo"/> </Link></a>
				   <a className=""><Link className="" to="footer"><div className="colorwhite "> <FontAwesomeIcon className="fa-rotate-90" icon="phone"/> (608)-466-0301 </div></Link></a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse navbar-right" id="navbarNavDropdown">
				    <ul className="nav navbar-nav">
				      <li className="nav-item align-middle">
				        <a className="nav-link"><Link className="nav-list nav-bar-item" to="tree-removal">Tree Removal</Link></a>
				      </li>
				      <li className="nav-item align-middle">
				        <a className="nav-link"><Link className="nav-list nav-bar-item" to="stump-grinding">Stump Grinding</Link></a>
				      </li>
				      <li className="nav-item align-middle">
				        <a className="nav-link"><Link className="nav-list nav-bar-item" to="tree-trimming">Trimming & Pruning</Link></a>
				      </li>
				      <li className="nav-item align-middle">
				        <a className="nav-link"><Link className="nav-list nav-bar-item" to="storm-damage">Storm Damage</Link></a>
				      </li>
				    </ul>
				  </div>
				</nav>
     		 </section>
    	</header>
	)
}

export default NavBar;


		