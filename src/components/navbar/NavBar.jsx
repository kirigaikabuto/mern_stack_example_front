import React from 'react';
import "./navbar.css"
import Logo from "../../assets/img/navbar-logo.svg"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} className="navbar__logo" alt=""/>
                <div className="navbar__header">Mern cloud</div>
                <div className="navbar__login">Войти</div>
                <div className="navbar__register"><NavLink to="/register">Регистрация</NavLink></div>
            </div>

        </div>
    );
};

export default NavBar;