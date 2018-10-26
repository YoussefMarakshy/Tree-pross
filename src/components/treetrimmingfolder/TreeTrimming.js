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
     	<Row>
		<Col>
     	<div className="centerr">
        <Button color="success" size="lg" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Hazardous Trees</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody className="centerr">
            Sometimes tree branches grow in angles we don't really want them to. This could cause obstruction of view or dangerous intersections with electrical wires and your property.
            </CardBody>
          </Card>
        </Collapse>
      </div>
      </Col>
     <Col>
     	<div className="centerr">
        <Button color="success" size="lg" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Tree Growth/Protection</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
             Plants need proper quality maintenance for adequate growth. Pruning and trimming shrubs and branches drastically improves the trre's health and strength for a long time.
            </CardBody>
          </Card>
        </Collapse>
      </div>
      </Col>
      <Col>
     	<div className="centerr">
        <Button color="success" size="lg" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Tree Shape</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Let's be honest, not all trees look great. Depending on your house and surroundings, a tree might not match its surroundings for a lot of reasons and might need re-shaping.
            </CardBody>
          </Card>
        </Collapse>
      </div>
      </Col>
      <Col>
     	<div className="centerr">
        <Button color="success" size="lg" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Pest Control</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
           While the insects might not necessarily kill off plants or a branch, they can spread diseases, weakening the tree and its branches, leading to the likelihood of falling branches.
            </CardBody>
          </Card>
        </Collapse>
      </div>
      </Col>
      </Row>

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




