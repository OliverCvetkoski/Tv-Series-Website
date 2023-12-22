import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
  };

  const ModalOverlay = () => {
    return (
      <div className={classes.modal}>
        <div className={classes.list}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/popular">Popular Series</NavLink>
          <NavLink to="/search">Search Series</NavLink>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </div>
      </div>
    );
  };
  const portalOverlay = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalOverlay
      )}
      {ReactDOM.createPortal(<ModalOverlay />, portalOverlay)}
    </Fragment>
  );
};

export default Modal;
