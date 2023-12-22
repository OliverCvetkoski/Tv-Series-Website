import React from "react";
import classes from "./SearchCard.module.css";

export const SearchCard = (props) => {
  return (
    <div className={classes.container}>
      <img alt="movieImg" src={props.img} className={classes.image}></img>
      <div className={classes.styleDiv}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.date}>{props.releaseDate}</p>
      </div>
    </div>
  );
};

export default SearchCard;
