import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Fragment>
            <nav className="navbar">
                <div className="nav-center"> 
                    <div className="nav-header">    
                        <Link to="/">
                            <img src={Logo} alt="Beach Resort" />
                        </Link>
                        <button type="button" onClick={handleToggle} className="nav-btn">
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}
