import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
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
			<Form onSubmit={this.handleSubmit}>
				<FormGroup className="maarginn">
					<Label className="big-word" for="name"> Name: </Label>
					<Input 
					size="25"
					className="name-size"
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.handleChange} />
				</FormGroup>
				<FormGroup className="maarginn">
					<Label className="big-word" for="email"> E-mail: </Label>
					<Input 
					type="email"
					size="25"
					className="name-size"
					name="email"
					value={this.state.email}
					onChange={this.handleChange} />
				</FormGroup>
					<FormGroup className="maarginn">
					<Label className="big-word message-right" for="message"> Message : </Label>
					<Input 
					type="textarea"
					size="40"
					name="message"
					value={this.state.message}
					onChange={this.handleChange} />
				</FormGroup>
				<Button className="big-word maarginn"> Submit </Button>
			</Form>
		);
	}
}

export default Contact;