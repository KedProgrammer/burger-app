 import React from 'react'
 import Auxilary from '../../../hoc/Auxiliar'

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
 			</Auxilary>
 		)
 };


 export default orderSummary;