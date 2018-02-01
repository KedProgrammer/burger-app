import React , {Component} from 'react'
import PropTypes from 'prop-types'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
class Checkout  extends Component {


  render () {
    return (
      <div>
        <CheckoutSummary  />
      </div>
    )
  }
}

export default Checkout;
