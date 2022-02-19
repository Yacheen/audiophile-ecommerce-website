import React, {useState} from "react";
//react router
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../pages/Home";
import Headphones from "../pages/Headphones";
//material ui 
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Products from "./Products";

export default function Navbar() {
    const [navDisplay, setNavDisplay] = useState(false);
    return (
        <Router>
            <nav id="nav">
                {/*change background via classname based on route*/}
                
                <div className="nav-content">
                    {/* add navigation panel for phone here */}
                    
                    <div className="burger-button" onClick={() => setNavDisplay(!navDisplay)}>
                        <MenuIcon className="nav-icon" fontSize="large"/>
                    </div>
                    <Link to="/"><h4>audiophile</h4></Link>
                    <div className="cart-button">
                        <ShoppingCartOutlinedIcon className="nav-icon" fontSize="large" />
                    </div>
                </div>
            </nav>
            {
                navDisplay
                ?
                <div className="navigation-links" data-aos="fade-down" data-aos-duration="300">
                    <Products />
                </div>
                :
                null

            }
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/headphones" element={<Headphones />} />
            </Routes>
        </Router>
    )
}
