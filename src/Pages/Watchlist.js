import React, { useContext } from "react";
import { GlobalCtx } from "../Context/GlobalCtx";
import { WatchlistCard } from "../Components/UI/WatchlistCard";
import classes from './Watchlist.module.css'

const Watchlist = (props) => {
    const { watchlist } = useContext(GlobalCtx);

    return (
        <div className={classes.container}>
            <h1>My Watchlist</h1>
            {watchlist.length > 0 ? (
                watchlist.map((movie) => (
                    <WatchlistCard
                        key={movie.id}
                        id={movie.id}
                        name={movie.name}
                        genre={movie.genre}
                        rating={movie.rating}
                        img={movie.img}
                    />
                ))) : (<div className={classes.noResultsDiv}><p>No series in the watchlist, add some.</p></div>
            )}
        </div>
    );
};

export default Watchlist;