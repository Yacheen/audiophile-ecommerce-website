import React, {useState} from "react";
//react router
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//components
import Home from "../pages/Home";
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers";
import Earphones from "../pages/Earphones";
import Products from "./Products";
import CartModal from "./CartModal";
//material ui 
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
//images
import XX59Headphones from "../pages/product-detail-pages/XX59Headphones";
import XX99Mark1Headphones from "../pages/product-detail-pages/XX99Mark1Headphones";
import XX99Mark2Headphones from "../pages/product-detail-pages/XX99Mark2Headphones";
import ZX9Speaker from "../pages/product-detail-pages/ZX9Speaker";
import ZX7Speaker from "../pages/product-detail-pages/ZX7Speaker";
import YX1WirelessEarphones from "../pages/product-detail-pages/YX1WirelessEarphones";
export default function Navbar() {
    const [navDisplay, setNavDisplay] = useState(false);
    const [cartDisplay, setCartDisplay] = useState(false);

    return (
        <Router>
            <nav id="nav">
                {/*change background via classname based on route*/}
                
                <div className="nav-content">
                    {/* add navigation panel for phone here */}
                    
                    <div className="burger-button" onClick={() => setNavDisplay(!navDisplay)}>
                        {
                            navDisplay ? <CloseIcon className="nav-icon" fontSize="large" /> : <MenuIcon className="nav-icon" fontSize="large"/>
                        }
                    </div>
                    <Link to="/" onClick={() =>setNavDisplay(false)}><h4>audiophile</h4></Link>
                    <div className="cart-button" onClick={() => setCartDisplay(!cartDisplay)}>
                        <ShoppingCartOutlinedIcon className="nav-icon" fontSize="large" />
                    </div>
                </div>
            </nav>
            {/*cart*/}
            {
                cartDisplay

                ?
                    <>
                    <div className="navigation-background" onClick={() => setNavDisplay(false)} data-aos="fade" data-aos-duration="300">
                        
                        </div>
                        <CartModal setCartDisplay={setCartDisplay}  />
                    </>
  
                :
                null

            }
            {/*navigation pane*/}
            {
                navDisplay
                ?
                <>
                    <div className="navigation-background" onClick={() => setNavDisplay(false)} data-aos="fade" data-aos-duration="300">
                        
                    </div>
                    <div className="navigation-links" data-aos="fade-down" data-aos-duration="300">
                        <Products setNavDisplay={setNavDisplay} />
                    </div>
                    
                </>
                :
                null
            }
            
            <Routes>
                <Route path="/" element={<Home />} />
                {/*headphones*/}
                <Route exact path="/headphones" element={<Headphones />} />
                <Route exact path="/headphones/1" element={<XX99Mark2Headphones />} />
                <Route exact path="/headphones/2" element={<XX99Mark1Headphones />} />
                <Route exact path="/headphones/3" element={<XX59Headphones />} />
                
                {/*speakers*/}
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/speakers/1" element={<ZX9Speaker />} />
                <Route path="/speakers/2" element={<ZX7Speaker />} />
                
                {/*earphones*/}
                <Route path="/earphones" element={<Earphones />} />
                <Route path="/earphones/1" element={<YX1WirelessEarphones />} />
            </Routes>
        </Router>
    )
}
