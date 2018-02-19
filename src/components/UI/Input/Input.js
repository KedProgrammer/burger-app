import React from 'react'
import PropTypes from 'prop-types'
import classes from './Input.css'

const input = (props) => {
let inputForm = null
switch (props.elementType) {
  case "input":
    inputForm = <input  className={classes.InputElement}   {...props.elementConfig}  value={props.value}/>
    break;
  case "textarea":
    inputForm = <textarea className={classes.InputElement} {...props.elementConfig}value={props.value} />
    break;
  case "select":
       inputForm =  <select   
          className={classes.InputElement}
          value= {props.value}>
         {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
      </select>
  break;
  default:
  inputForm = <input className={classes.InputElement} {...props.elementConfig} value={props.value}/>

}
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputForm}
     
    </div>
  )
}

export default input
