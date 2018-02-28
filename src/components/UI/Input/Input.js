import React from 'react'
import PropTypes from 'prop-types'
import classes from './Input.css'

const input = (props) => {
let inputForm = null
const inputClasses = [classes.InputElement]
if (props.invalid && props.shouldValidate){
  inputClasses.push(classes.Invalid)
}
switch (props.elementType) {
  case "input":
    inputForm = <input  className={inputClasses.join(' ')}    {...props.elementConfig}  value={props.value}   onChange={props.changed} />
    break;
  case "textarea":
    inputForm = <textarea className={inputClasses} {...props.elementConfig}value={props.value}  onChange={props.changed} />
    break;
  case "select":
       inputForm =  <select   
          className={inputClasses}
          value= {props.value}
          onChange={props.changed}
          >
          
         {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
      </select>
  break;
  default:
  inputForm = <input className={inputClasses} {...props.elementConfig} value={props.value}/>

}
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputForm}
    </div>
  )
}

export default input
