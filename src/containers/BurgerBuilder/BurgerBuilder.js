import React, {Component} from 'react'
import Aux from '../../hoc/Auxiliar'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
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
			salad: 2,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 1,
		purcheable: false
	}

	checkPurcheable (updatedIngredients) {
	
		let sum = Object.keys(updatedIngredients).reduce((suma,item) => {
			return suma + updatedIngredients[item]

		},0)
		let prueba = sum > 0
		this.setState({purcheable: sum > 0 })
		
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
		console.log(ingredients)
		return(
			<Aux>
				<Burger ingredients={this.state.ingredients} price={this.state.totalPrice} />
				<BuildControls add={this.addItem} rest={this.restItem} disabledControl={ingredients} price={this.state.totalPrice} 
				purcheable = {this.state.purcheable}
				 />
				}
			</Aux>
		);
	}
}

export default BurgerBuilder;
