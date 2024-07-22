// src/components/Navbar.jsx
import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav_bar_wrapper">
            <div className="nav_bar">
                <div className="logo"><Link to="/">ProgressAI</Link></div>
                <ul className="nav_links">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Pricing">Pricing</Link></li>
                </ul>
                <div className="menu_buttons">
                    <Link to="/SignIn">Sign In</Link>
                    <button className="btn signup_btn" onClick={() => window.location.href='/SignUp'}>Try For Free</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;