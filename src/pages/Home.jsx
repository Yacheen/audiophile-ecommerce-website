import React from "react";
import Products from "../components/Products";
import Footer from "../components/Footer";
import zx9speakerMobile from "../assets/home/mobile/image-speaker-zx9.png";
import zx7speakerMobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import yx1earphonesMobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import zx9backgroundpattern from "../assets/home/desktop/pattern-circles.svg";
import AboutAudiophile from "../components/AboutAudiophile";
export default function Home() {
    return (
        <section className="home">
            <div className="home-hero">
                <div className="home-hero-content">
                    <p className="overline new-product">NEW PRODUCT</p>
                    <h2>XX99 Mark II Headphones</h2>
                    <p className="home-hero-description">
                        Experience natural, lifelike audio and exceptional build quality made for the
                        passionate music enthusiast.
                    </p>
                    <button type="button">SEE PRODUCT</button>
                </div>
            </div>

            <div className="home-content">
                <Products />

                {/* main content */}

                <div className="home-main">
                    <div className="home-main-zx9">
                        <div className="zx9-background-pattern">
                            <img src={zx9backgroundpattern} alt="" />
                        </div>
                        
                        <div className="zx9-speaker">
                            <img src={zx9speakerMobile} alt="" />
                        </div>
                        <div className="zx9-description">
                            <h3>ZX9 <br/>SPEAKER</h3>
                            <p>
                                {" "}
                                Upgrade to premium speakers that are phenomenally built to deliver truly
                                remarkable sound.
                            </p>
                            <button className="black-button">SEE PRODUCT</button>
                        </div>
                    </div>
                    
                    <div className="home-main-zx7">
                        <div className="zx7-speaker-text">
                                <h3>ZX7 SPEAKER</h3>
                                <button className="transparent-button">SEE PRODUCT</button>
                        </div>

                        <div className="zx7-speaker">
                            <img src={zx7speakerMobile} alt="" />
                        </div>
                        
                    </div>

                    <div className="home-main-yx1">
                        <div className="yx1-earphones">
                            <img src={yx1earphonesMobile} alt="" />
                        </div>
                        <div className="yx1-description">
                            <div className="yx1-content">
                                <h3>YX1 EARPHONES</h3>
                                <button className="transparent-button">SEE PRODUCT</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <AboutAudiophile />  
            </div>
            
            <Footer />
            
        </section>
    );
}
