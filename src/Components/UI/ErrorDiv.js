import React from 'react'
import classes from './ErrorDiv.module.css'

const ErrorDiv = (props) => {
    return (
        <div className={classes.error_div}>Error: {props.error}</div>
    )
}

export default ErrorDiv;
