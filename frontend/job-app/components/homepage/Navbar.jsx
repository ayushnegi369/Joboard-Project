// Navbar.js

// import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand brand-text">
                    <img
                        src="https://img.icons8.com/metro/26/40C057/sun.png"
                        alt="Jobored Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-top ms-5 me-2"
                    />
                    Jobored
                </Link>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item me-4">
                            <Link
                                to="/findproject"
                                className="nav-link green-hover"
                            >
                                Find Project
                            </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link to="/report" className="nav-link green-hover">
                                Report
                            </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link
                                to="/mycontract"
                                className="nav-link green-hover"
                            >
                                My Contracts
                            </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link
                                to="/requestproject"
                                className="nav-link green-hover"
                            >
                                Request Project
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/fluency-systems-regular/48/737373/appointment-reminders--v1.png"
                                alt="appointment-reminders--v1"
                            />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/pastel-glyph/64/737373/bookmark-ribbon.png"
                                alt="bookmark-ribbon"
                            />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios/50/737373/filled-message.png"
                                alt="filled-message"
                            />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img
                                width="30"
                                height="30"
                                src="https://img.icons8.com/color/48/circled-user-male-skin-type-3--v1.png"
                                alt="circled-user-male-skin-type-3--v1"
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
