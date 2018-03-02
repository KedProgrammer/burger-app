
import React , {Component} from 'react'
import PropTypes from 'prop-types'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'
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
        <CheckoutSummary checkoutCancelled={this.checkoutCancelledHandler} checkoutContinued={this.checkoutContinuedHandler} ingredients={this.props.ings}  />
        <Route path={this.props.match.path + '/contact-data'} component={ContactData} />)} />
      </div>
    )
  }
}

const mapStateToProps = (stat) => {
  return {
    ings: stat.ingredients,
    totalP: stat.totalPrice
  }
}

export default connect(mapStateToProps)(Checkout);
