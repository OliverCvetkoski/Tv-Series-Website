import React from "react";
import classes from "./Header.module.css";
import { useState } from "react";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import SearchBarHeader from "./SearchBarHeader";

const Header = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const toggleModalHandler = () => {
    setModalIsShown((prevModalIsShown) => !prevModalIsShown);
  };

  return (
    <nav className={classes.navbar}>
      <h1>TV series</h1>
      <SearchBarHeader />
      <ul className={classes.list}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/popular"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Popular Series
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Browse Series
        </NavLink>
        <NavLink
          to="/watchlist"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Watchlist
        </NavLink>
      </ul>
      <div className={classes.hamburger} onClick={toggleModalHandler}>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </div>
      {modalIsShown && <Modal onClose={toggleModalHandler} />}
    </nav>
  );
};

export default Header;
