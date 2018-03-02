import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'




class BurgerBuilder extends Component {
	//constructor(props){
	//	super(props);
	//	this.state = {}
	// }
	state = {

		showModal: false,
		loading: false
	}

	componentDidMount() {
		// axios.get('https://burguer-app.firebaseio.com/Ingredients.json')
		// .then(response => {
		//	this.setState({ingredients: response.data});
		// })
	}

	checkPurcheable(updatedIngredients) {

		let sum = Object.keys(updatedIngredients).reduce((suma, item) => {
			return suma + updatedIngredients[item]

		}, 0)

		return sum > 0

	}

	toggleModal = () => {
		this.setState({ showModal: true })

	}


	purchaseCancelHandler = () => {
		this.setState({ showModal: false })
	}

	purchaseContinueHandler = () => {
		this.props.history.push('/checkout')
	}


	render() {
		let ingredients = { ...this.props.ings }
		for (let key in ingredients) {
			ingredients[key] = ingredients[key] <= 0;
		}
		let orderSummary = null;

		let burger = <Spinner />
		if (this.props.ings) {
			burger =
				<Aux>
					<Burger ingredients={this.props.ings} price={this.props.totalPrice} />
					<BuildControls add={this.props.onIngredientAdded} rest={this.props.onIngredientRemove} disabledControl={ingredients} price={this.props.totalPrice}
						purcheable={this.checkPurcheable(this.props.ings)}
						show={this.toggleModal}
					/>
				</Aux>
			orderSummary = <OrderSummary purchaseContinue={this.purchaseContinueHandler} purchaseCanceled={this.purchaseCancelHandler} ingredients={this.props.ings} show={this.state.showModal} price={this.props.totalPrice} />

		}
		if (this.state.loading) {
			orderSummary = <Spinner />

		}

		return (

			<Aux>
				<Modal show={this.state.showModal} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

const mapStateToProps = stat => {
	return {
		ings: stat.ingredients,
		totalPrice: stat.totalPrice
	}

}
const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: (ing) => dispatch({ type: actionTypes.ADD_BURGUER, ingredientName: ing }),
		onIngredientRemove: (ing) => dispatch({ type: actionTypes.REMOVE_BURGUER, ingredientName: ing })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
