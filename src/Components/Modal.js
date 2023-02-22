import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "./Modal.css"


const Modal = (props) => {

    const Backdrop = (props) => {
        return <div className="backdrop" onClick={props.onClose} />
    };

    const ModalOverlay = () => {
        return <div className="modal" >
            <ul className="list2" >
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/popular">Popular Series</NavLink></li>
                <li><NavLink to="/watchlist">Watchlist</NavLink></li>
            </ul >
        </div>
    };
    const portalOverlay = document.getElementById("overlays");

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalOverlay)}
            {ReactDOM.createPortal(<ModalOverlay />, portalOverlay)}
        </Fragment>
    );
};

export default Modal;


