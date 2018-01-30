import React from 'react'
import PropTypes from 'prop-types'
import classes from './Spinner.css'


const spinner = (props) => {
  return (
    <div className={classes.loader}>Loading...</div>
  )
}

export default spinner;
