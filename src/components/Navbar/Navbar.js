import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return(
        <nav className="top-nav row">
            <ul className="--col-sm-3">
                <li>
                    Warriors
                </li>
                <li>
                    49ers
                </li>
                <li>
                    Giants
                </li>
                <li>
                    Sharks
                </li>
                
            </ul>
            <ul className="navbar --col-sm-9">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Gallery</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Store</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;