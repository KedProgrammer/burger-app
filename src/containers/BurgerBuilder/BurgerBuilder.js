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
		totalPrice: 1
	}

	addItem = (ingredient) => {
		let ingredients = {...this.state.ingredients};
		ingredients[ingredient] = ingredients[ingredient] + 1;
		this.setState({ingredients: ingredients, totalPrice: Object.keys(ingredients).reduce((new1 , old) => {
			new1 = new1 +  ingredients[old]*INGREDIENT_PRICES[old]
			return new1;
		}, 0)})
		console.log("hola")
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
	}
	render(){
		return(
			<Aux>
				<Burger ingredients={this.state.ingredients} price={this.state.totalPrice} />
				<BuildControls add={this.addItem} rest={this.restItem} />
			</Aux>
		);
	}
}

export default BurgerBuilder;
