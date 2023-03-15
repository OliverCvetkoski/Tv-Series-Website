import classes from './WatchlistCard.module.css'
import React, { useContext } from "react";
import { GlobalCtx } from '../../Context/GlobalCtx';


export const WatchlistCard = (props) => {

    const { removeMovieFromWatchlist } = useContext(GlobalCtx);

    return (
        <div className={classes.container}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.style_div}>
                <img alt="movieImg" src={props.img} className={classes.image} />
            </div >
            <button className={classes.btn} onClick={() => removeMovieFromWatchlist(props.id)} >Remove from watchlist</button>
        </div>
    )
}
