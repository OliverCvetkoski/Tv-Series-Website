import classes from './WatchlistCard.module.css'
import React, { useContext } from "react";
import { GlobalCtx } from '../../context/GlobalCtx';


export const WatchlistCard = (props) => {

    const { removeMovieFromWatchlist } = useContext(GlobalCtx);

    return (
        <div className={classes.container}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.genre} >{props.genre}</div>
            <div className={classes.rating} >{props.rating}/10⭐</div>
            <div className={classes.style_div}>
                <img alt="movieImg" src={props.img} className={classes.image} />
            </div >
            <button className={classes.btn} onClick={() => removeMovieFromWatchlist(props)} >Remove from watchlist</button>
        </div>
    )
}
