import React from "react";
import classes from "./Header.module.css"
import { useState } from "react";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import SearchBarHeader from "./SearchBarHeader";


const Header = (props) => {
    const [modalIsShown, setModalIsShown] = useState(false);

    const showModalHandler = () => {
        setModalIsShown(true);
    };

    const hideModalHandler = () => {
        setModalIsShown(false);
    };


    return (

        <nav className={classes.navbar} >
            <h1>The best TV series site</h1>
            <SearchBarHeader />
            <ul className={classes.list} >
                <li><NavLink to="/" className={({ isActive }) => isActive ? classes.active : ''}>Home</NavLink></li>
                <li><NavLink to="/popular" className={({ isActive }) => isActive ? classes.active : ''} >Popular Series</NavLink></li>
                <li><NavLink to="/search" className={({ isActive }) => isActive ? classes.active : ''} >Browse Series</NavLink></li>
                <li><NavLink to="/watchlist" className={({ isActive }) => isActive ? classes.active : ''} >Watchlist</NavLink></li>
            </ul >
            <div className={classes.hamburger} onClick={showModalHandler} >
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
            </div>
            {modalIsShown && <Modal onClose={hideModalHandler} />}
        </nav >

    )
}


export default Header;