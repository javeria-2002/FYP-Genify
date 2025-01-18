import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png'; // Adjust the path to your logo image
const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="GENIFY Logo" className="logo-image" />
                    <span className="logo-text">GENIFY</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>
                <div className="auth-buttons">
                    <button className="login-button">Login</button>
                    <button className="signup-button">Sign Up</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;

