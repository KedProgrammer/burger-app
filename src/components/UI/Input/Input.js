import React from 'react'
import PropTypes from 'prop-types'
import classes from './Input.css'

const input = (props) => {
let inputForm = null
switch (props.inputType) {
  case "input":
    inputForm = <input  {...props} />
    break;
  case "textarea":
    inputForm = <textarea {...props} />
    break;
  default:
  inputForm = <input {...props} />

}
  return (
    <div>
      <label>{props.label}</label>
      {inputForm}
    </div>
  )
}

export default input
