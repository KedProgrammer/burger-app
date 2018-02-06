import React , {Component} from 'react'
import PropTypes from 'prop-types'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
class Checkout  extends Component {

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render () {
    return (
      <div>
        <CheckoutSummary checkoutCancelled={this.checkoutCancelledHandler} checkoutContinued={this.checkoutContinuedHandler}  />
      </div>
    )
  }
}

export default Checkout;
