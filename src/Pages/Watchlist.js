import React, { useContext } from "react";
import { GlobalCtx } from "../context/GlobalCtx";
import { WatchlistCard } from "../Components/UI/WatchlistCard";
import classes from './Watchlist.module.css'

const Watchlist = (props) => {
    const { watchlist } = useContext(GlobalCtx);

    return (
        <div className={classes.container}>
            {watchlist.map((movie) => (<WatchlistCard
                key={movie.id}
                name={movie.name}
                genre={movie.genre}
                rating={movie.rating}
                img={movie.img}

            />))}
        </div>
    )
}

export default Watchlist;