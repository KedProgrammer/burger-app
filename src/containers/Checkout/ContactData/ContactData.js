	import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from  '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux'

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
				valid: false,
				touched: false
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
				valid: false,
				touched: false
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
				valid: false,
				touched: false
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
				valid: false,
				touched: false
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
				valid: false,
				touched: false
			},
			deliverMethod:  {
				elementType: 'select',
				elementConfig: {
					options: [
					{value: 'fastest', displayValue: 'Fastest'},
					{value: 'cheapest', displayValue: 'cheapest'},
					]
				},
				value: 'cheapest',
				validation: {}.maxLength,
				valid: true
			}
			
		},
		formIsValid: false,
		loading: false
	}

	checkValidity (value, rules) {
		let isValid = true
		if (rules.required){
			isValid = value.trim() !== '' && isValid
		}
		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid
		}

		if (rules.maxLength) {
			isValid =  	value.length <= rules.maxLength && isValid
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
		updatedFormElement.touched = true
		updatedOrderForm[inputIdentifer] = updatedFormElement
		let formIsValid = true
		for (let inputIdentifier in updatedOrderForm){
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
		}

		this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid })


	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({loading: true});
		const data = {}
		for (let formDataValue in this.state.orderForm) {
			data[formDataValue] = this.state.orderForm[formDataValue].value

		}
		const order = {
 	 			ingredients: this.props.ings,
 	 			price: this.state.totalP,
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
						return <Input  elementType = {this.state.orderForm[element].elementType} elementConfig = {this.state.orderForm[element].elementConfig} value = {this.state.orderForm[element].value} changed={(event) => this.inputChangedHandler(event,element)}  invalid={!this.state.orderForm[element].valid && this.state.orderForm[element].touched} shouldValidate={this.state.orderForm[element].validations} />
					})}
					<Button btnType="Success" clicked={this.orderHandler} disabled={!this.state.formIsValid}>Order</Button>
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


const mapStateToProps = (stat) => {
	return {
	  ings: stat.ingredients,
	  totalP: stat.totalPrice
	}
  }

export default ContactData;
