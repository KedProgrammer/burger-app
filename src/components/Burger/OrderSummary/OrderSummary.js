 import React from 'react'
 import Auxilary from '../../../hoc/Auxiliar'
 import Button from '../../UI/Button/Button'

 const orderSummary = (props) =>  {
 		// <li>Salad: 1</li>
 		const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
 			return <li key={igKey}>
 						<span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
 						</li>
 	});


 	return (
 			<Auxilary>
 				<h3>Your order</h3>
 				<p>A delicius burguer with the following ingredients</p>
 				<ul>
 					{ingredientSummary}
 				</ul>
 				<p>Continue checkout</p>
        <strong><p>Total sum: {props.price.toFixed(2)}</p></strong>
        <Button btnType={"Danger"} clicked={props.purchaseCanceled}>Cancel</Button>
        <Button  btnType={"Success"} clicked={props.purchaseContinue}>Acept</Button>
 			</Auxilary>
 		)
 };


 export default orderSummary;
