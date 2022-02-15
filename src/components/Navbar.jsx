import React from "react";
//react router
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../pages/Home";
//material ui 
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Navbar() {
    return (
        <Router>
            <nav id="nav">
                <div className="nav-content">
                    <div className="burger-button">
                        <MenuIcon className="nav-icon" fontSize="large"/>
                    </div>
                    <Link to="/"><h4>audiophile</h4></Link>
                    <div className="cart-button">
                        <ShoppingCartOutlinedIcon className="nav-icon" fontSize="large" />
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}
