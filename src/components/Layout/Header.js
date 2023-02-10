import React, { Fragment } from "react";
import classes from './Header.module.css';
import backgroundImage from '../../assets/background.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Localization System Visualization Comparison Tool</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={backgroundImage} alt="Localization data"/>
        </div>
    </Fragment>
};

export default Header;