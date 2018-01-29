import React from 'react'
import PropTypes from 'prop-types'
import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
  )


export default backdrop;