import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from  '../../../components/UI/Spinner/Spinner'

export class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalcode: ''
		},
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({loading: true});
		const order = {
 	 			ingredients: this.state.ingredients,
 	 			price: this.state.totalPrice,
 	 			customer: {
 		 			name: 'Daniel Tobon',
 		 			addres: {
 			 		street: 'calle falsa 123',
		 			 zipCode: '12345',
		 			 country: 'Colombia'
		 		 },
		 		 email: 'shiriux1@gmail.com'
		 	 },
			 deliverMethod: 'fastest'
		  }
		  axios.post('/orders.json', order)
		  .then(response => {
			 this.setState({loading: false});
			 this.props.history.push('/');
		  })
		  .catch(error => {
		 	 this.setState({loading: false});
		 });
	}

	
	render() {
		let form = (
				<form>
					<input type="text" name="name" placeholder="Your name" />
					<input type="email" name="email" placeholder="Your email"/>
					<input type="text" name="street" placeholder="Your street"/>
					<input type="text" name="postal" placeholder="postalcode"/>
					<Button btnType="Success" clicked={this.orderHandler}>Order</Button>
				</form>
			);
		if (this.state.loading){
			form = <Spinner />
		}
		return (
			<div className={classes.ContactData}>
				<h4>Enter you contact Data</h4>
				{form}
			</div>
		);
	}
}


export default ContactData;