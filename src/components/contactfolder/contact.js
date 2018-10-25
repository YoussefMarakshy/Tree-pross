import React, { Component } from 'react';
import {Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

class Contact extends Component{
	constructor() {
		super() 

		this.state = { 
			name : '',
			email: '',
			message: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange = e => {
		console.log(e.target.name);
		this.setState({ [e.target.name]: e.target.value })
	}

	async handleSubmit(e) {
		e.preventDefault()

		axios.post('/api/form', {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message
		  })
		  .then(response => {
			console.log(response)
			alert(response.data);
			this.setState({name:'',message:'',email:''});
		  })
		  .catch(error => {
			console.log(error);
		  });
	}

	render(){
		return (
		<Container>
		<Form onSubmit={this.handleSubmit}>
		<FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" placeholder="Your Name" size="20" value={this.state.name} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">E-mail</Label>
          <Input type="email" name="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="message">Description</Label>
          <Input type="textarea" name="message" size="30" value={this.state.message} onChange={this.handleChange}>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
		</Form>
		</Container>
		);
	}
}

export default Contact;