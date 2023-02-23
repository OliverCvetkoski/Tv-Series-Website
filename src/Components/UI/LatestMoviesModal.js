import React from "react";
import classes from './LatestMoviesModal.module.css'
import { GlobalCtx } from "../../Context/GlobalCtx";
import { useContext } from "react";

const LatestMoviesModal = (props) => {

    const { addMovieToWatchlist, watchlist } = useContext(GlobalCtx);

    let storedMovies = watchlist.find(o => o.id === props.id);
    const watchlistDisabled = storedMovies ? true : false;

    return (
        <div className={classes.container}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.hover_modal}>
                <div >{props.genre}</div>
                <div >{props.rating}/10⭐</div>
            </div>
            <div className={classes.style_div}>
                <img alt="movieImg" src={props.img} className={classes.image} />
            </div >
            <button className={classes.btn}
                disabled={watchlistDisabled}
                onClick={() => addMovieToWatchlist(props)} >Add to watchlist</button>
        </div >
    );
};

export default LatestMoviesModal;
