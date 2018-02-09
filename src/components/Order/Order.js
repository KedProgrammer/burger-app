import React from 'react';
import classes from './Order.css'


const order = (props) => {
	let order = null;
	if (props.ingredients) {
		order = Object.keys(props.ingredients).map(key => (
					<span
						style={{
							textTransform: 'capitalize',
							display: 'inline-block',
							margin: '0 8px',
							border: '1px solid #ccc',
							padding: '6px'
						}}
					>{key}: {props.ingredients[key]}</span>

				))
	}
	return (
		<div className={classes.Order}>
			<p>Ingredients: </p>
				{order}
			<p>Price: <strong>USD {props.price}</strong></p>
		</div>
	)
}

export default order;