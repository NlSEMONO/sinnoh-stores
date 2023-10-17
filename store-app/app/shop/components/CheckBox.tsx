import React from 'react'
import { Filter } from './definitions'

const CheckBox = ({label, stateFunction, state}: Filter) => {
  return (
    <li> 
        <input type='checkbox' onChange={() => stateFunction()} checked={state}></input>
        <label>{"    "+label}</label>
    </li>
  )
}

export default CheckBox