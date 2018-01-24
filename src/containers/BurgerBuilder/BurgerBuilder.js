import React, {Component} from 'react'
import Aux from '../../hoc/Auxiliar'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
	//constructor(props){
	//	super(props);
	//	this.state = {}
	// }
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 2,
			meat: 0
		}
	}
	render(){
		return(
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<div>Burguer Controllers</div>
			</Aux>
		);
	}
}

export default BurgerBuilder;
