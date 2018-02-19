	import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from  '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

export class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your name'
				},
				value: ''
			},
			street:  {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: ''
			} ,
			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIP Code'
				},
				value: ''
			} ,
			country:  {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Country'
				},
				value: ''
			},

			email:  {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your E-mail'
				},
				value: ''
			},
			deliverMethod:  {
				elementType: 'select',
				elementConfig: {
					options: [
					{value: 'fastest', displayValue: 'Fastest'},
					{value: 'cheapest', displayValue: 'cheapest'},
					]
				},
				value: ''
			}
			
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
					{Object.keys(this.state.orderForm).map(element => {
						return <Input  elementType = {this.state.orderForm[element].elementType} elementConfig = {this.state.orderForm[element].elementConfig} value = {this.state.orderForm[element].value} />
					})}
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
