import React from 'react'
import { FilterArray } from './definitions'
import CheckBox from './CheckBox';

const CheckList = ({labels, stateFunctions, state}: FilterArray) => {
    const checkboxes = [];
    for (let i = 0; i < labels.length; i++) {
        checkboxes.push(<CheckBox key={i} label={labels[i]} stateFunction={stateFunctions[i]} state={state[i]}/>);
        // console.log(labels[i]);
    }
    return (
        <ul>
            {checkboxes}
        </ul>
    )
}

export default CheckList