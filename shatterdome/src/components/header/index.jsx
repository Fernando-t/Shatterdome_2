import React from "react";
import CartWidget from '../CartWidget';
import './styles.css';


const Header = () => {

    return(

        <header className="header">
            <a href="/" className="logo">Shatterdome</a>
            <input type="checkbox" className="side-menu" id="side-menu"/>
            <label className="hamb" for="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">
                    <CartWidget />
                    </a></li>
                </ul>
            </nav>
        </header>


    );
}

export default Header;


