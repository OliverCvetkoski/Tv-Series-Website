import { createContext, useReducer, useEffect } from "react"
import React from 'react'
import AppReducer from "./AppReducer"

const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
};

export const GlobalCtx = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
    }, [state]);

    const addMovieToWatchlist = movie => {
        dispatch({ type: "ADD", payload: movie })
        console.log(movie.id)
    };

    const removeMovieFromWatchlist = id => {
        dispatch({ type: "REMOVE", payload: id });

    };

    return (
        <GlobalCtx.Provider value={{ watchlist: state.watchlist, addMovieToWatchlist, removeMovieFromWatchlist }}>
            {props.children}
        </GlobalCtx.Provider>
    )

};





