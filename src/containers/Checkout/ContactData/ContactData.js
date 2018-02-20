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
				value: '',
				validations: {
					required: true
				},
				valid: true
			},
			street:  {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: '',
				validations: {
					required: true
				},
				valid: true
			} ,
			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIP Code'
				},
				value: '',
				validations: {
					required: true,
					minLength: 5,
					maxLength: 5
				},
				valid: true
			} ,
			country:  {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Country'
				},
				value: '',
				validations: {
					required: true
				},
				valid: true
			},

			email:  {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your E-mail'
				},
				value: '',
				validations: {
					required: true
				},
				valid: true
			},
			deliverMethod:  {
				elementType: 'select',
				elementConfig: {
					options: [
					{value: 'fastest', displayValue: 'Fastest'},
					{value: 'cheapest', displayValue: 'cheapest'},
					]
				},
				value: 'cheapest'
			}
			
		},
		loading: false
	}

	checkValidity (value, rules) {
		let isValid = true
		if (rules.required){
			isValid = value.trim() !== '' && isValid
		}
		if (rules.required) {
			isValid = value>= rules.minLength && isValid
		}

		if (rules.required) {
			isValid =  	value<= rules.maxLength && isValid
		}


		return isValid

	}
	inputChangedHandler = (event,inputIdentifer) => {
	
		const updatedOrderForm = {
			...this.state.orderForm
		}

		const updatedFormElement = {
			...updatedOrderForm[inputIdentifer]
		}

		updatedFormElement.value = event.target.value
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value , updatedFormElement.validations )
		updatedOrderForm[inputIdentifer] = updatedFormElement
		this.setState({orderForm: updatedOrderForm })


	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({loading: true});
		const data = {}
		for (let formDataValue in this.state.orderForm) {
			data[formDataValue] = this.state.orderForm[formDataValue].value

		}
		const order = {
 	 			ingredients: this.props.ingredients,
 	 			price: this.state.totalPrice,
 	 			order: data
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
				<form onSubmit = {this.orderHandler}>
					{Object.keys(this.state.orderForm).map(element => {
						return <Input  elementType = {this.state.orderForm[element].elementType} elementConfig = {this.state.orderForm[element].elementConfig} value = {this.state.orderForm[element].value} changed={(event) => this.inputChangedHandler(event,element)} />
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
