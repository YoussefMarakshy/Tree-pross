import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './TreeTrimming.css'
import { Container, Row, Col } from 'reactstrap';
const ScrollAnim = require('rc-scroll-anim');
const Element = ScrollAnim.Element;


class TreeTrimming extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
    <Element name="myScrollToElement" className="treetrimming-section" id="tree-trimming">
		<Container>
			<div className="tree-trimming-container"> 
				<h1 className="title">Tree Trimming & Pruning</h1> 
			</div>
			<div className="description">
				<p>Trimming & Pruning are essentials for trees to be healthy and grow. Below are some of the cases you might want to get your tree trimmed/pruned.  </p>
			</div>
    
      <div className="card-deck mb-3 text-center">
        
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal my-card-title">Hazardous Trees</h4>
          </div>
          <div className="card-body">
         
            Sometimes tree branches grow in angles we don't really want them to. This could cause obstruction of view or dangerous intersections with electrical wires and your property.
          
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal my-card-title">Tree Growth/Protection</h4>
          </div>
          <div className="card-body">
          
            Let's be honest, not all trees look great. Depending on your house and surroundings, a tree might not match its surroundings for a lot of reasons and might need re-shaping.
            
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal my-card-title">Tree Shape</h4>
          </div>
          <div className="card-body">
			
           While the insects might not necessarily kill off plants or a branch, they can spread diseases, weakening the tree and its branches, leading to the likelihood of falling branches.
            
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal my-card-title">Pest Control</h4>
          </div>
          <div className="card-body">
            <div className="description">
				<p>While the insects might not necessarily kill off plants or a branch, they can spread diseases, weakening the tree and its branches, leading to the likelihood of falling branches.</p>
			</div>
          </div>
        </div>
      </div>

      </Container>
      <div className="imagesContainer">
			<img src="https://cdn.discordapp.com/attachments/365188764781510657/496911134595612682/IMG_4791.jpeg" alt="" className="caroussel-images"/>
			<img src="https://cdn.discordapp.com/attachments/365188764781510657/496926184550957057/IMG_3983_2_copy.jpg" alt="" className="caroussel-images"/>
			<img src="https://cdn.discordapp.com/attachments/365188764781510657/496911134595612682/IMG_4791.jpeg" alt="" className="caroussel-images"/>
			<img src="https://cdn.discordapp.com/attachments/365188764781510657/496926184550957057/IMG_3983_2_copy.jpg" alt="" className="caroussel-images"/>
			</div>
		</Element>



    );
  }
}

export default TreeTrimming;




