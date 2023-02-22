import React from 'react'
import classes from "./SearchCard.module.css"

export const SearchCard = (props) => {
    return (
        <div className={classes.container}
            onBlur={props.onBlur}>
            <img alt='movieImg' src={props.img} className={classes.image}></img>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.date}>{props.releaseDate}</p>
        </div>
    )
}

export default SearchCard;
