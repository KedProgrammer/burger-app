
import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <div>Price: {props.price}</div>
      {controls.map(ctr => (
        <BuildControl key={ctr.label} label={ctr.label} add={() => props.add(ctr.type)} rest={() => props.rest(ctr.type)} disabled={props.disabledControl[ctr.type]} />
      ))}
      <button className={classes.OrderButton} disabled={!props.purcheable} onClick={props.show}>ORDER NOW</button>
    </div>
  )
}

export default buildControls;
