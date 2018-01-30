import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner'



const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 1
}
class BurgerBuilder extends Component {
	//constructor(props){
	//	super(props);
	//	this.state = {}
	// }
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 0,
		purcheable: false,
		showModal: false,
		loading: false
	}

	checkPurcheable (updatedIngredients) {

		let sum = Object.keys(updatedIngredients).reduce((suma,item) => {
			return suma + updatedIngredients[item]

		},0)

		this.setState({purcheable: sum > 0 })

	}

	toggleModal = () => {
		this.setState({showModal: true})
		console.log(this.state.showModal)
	}

	addItem = (ingredient) => {
		let ingredients = {...this.state.ingredients};
		ingredients[ingredient] = ingredients[ingredient] + 1;
		let oldPrice = this.state.totalPrice;
		let updatedPrice = oldPrice + INGREDIENT_PRICES[ingredient]
		// this.setState({ingredients: ingredients, totalPrice: Object.keys(ingredients).reduce((new1 , old) => {
			// new1 = new1 +  ingredients[old]*INGREDIENT_PRICES[old]
			// return new1;
		// }, // 0)})
		this.setState({ingredients : ingredients, totalPrice: updatedPrice})
		this.checkPurcheable(ingredients)
	}
	 purchaseCancelHandler = () => {
		 this.setState({showModal: false})
	 }

	 purchaseContinueHandler = () => {
		 this.setState({loading: true})
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
			 this.setState({loading: false, showModal: false});
		 })
		 .catch(error => {
			 this.setState({loading: false, showModal: false});
		 });
	 }

	restItem = (ingredient) => {
		let ingredients = {...this.state.ingredients};
		let price = this.state.totalPrice;
		if (ingredients[ingredient] === 0) {
			ingredients[ingredient]
		}else{
			ingredients[ingredient] = ingredients[ingredient] - 1;
			price = price - INGREDIENT_PRICES[ingredient]
		}
		this.setState({ingredients: ingredients, totalPrice: price })
		this.checkPurcheable(ingredients)
	}
	render(){
		let ingredients = {...this.state.ingredients}
		for(let key in ingredients){
			ingredients[key] = ingredients[key] <= 0;
		}
		let orderSummary = <OrderSummary purchaseContinue={this.purchaseContinueHandler} purchaseCanceled={this.purchaseCancelHandler} ingredients={this.state.ingredients} show={this.state.showModal} price={this.state.totalPrice}  />
		if 	(this.state.loading) {
			orderSummary = <Spinner />
		}

		return(

			<Aux>
				<Modal show={this.state.showModal} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				<Burger ingredients={this.state.ingredients} price={this.state.totalPrice} />
				<BuildControls add={this.addItem} rest={this.restItem} disabledControl={ingredients} price={this.state.totalPrice}
				purcheable = {this.state.purcheable}
				show={this.toggleModal}
				 />
			</Aux>
		);
	}
}

export default BurgerBuilder;
