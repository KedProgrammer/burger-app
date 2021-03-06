import React from 'react'
import PropTypes from 'prop-types'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it test well</h1>
      <div style={{with: '300px', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
    </div>
  )
}

export default checkoutSummary;
