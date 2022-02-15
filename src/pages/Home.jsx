import React from 'react'
import Products from '../components/Products'
import Footer from "../components/Footer";
import zx9speakerMobile from "../assets/home/mobile/image-speaker-zx9.png";
import zx7speakerMobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import yx1earphonesMobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import AboutAudiophile from "../components/AboutAudiophile";
export default function Home() {
  return (
      
    <section className="home">
      <div className="home-hero">
        <div className="home-hero-content">
          <p className="overline new-product">NEW PRODUCT</p>
          <h2>XX99 Mark II Headphones</h2>
          <p className="home-hero-description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button type="button">SEE PRODUCT</button>
        </div>
      </div>

      <div className="home-content">

       <Products />

       {/* main content */}

       <div className="home-main">
         <div className="home-main-zx9">
           <div className="zx9-speaker"><img src={zx9speakerMobile} alt="" /></div>
           <div>
             <h3>ZX9 SPEAKER</h3>
             <p> Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
             <button className="brown-button">SEE PRODUCT</button>
           </div>

         </div>
         <div className="home-main-zx7">
           <div className="zx7-speaker"><img src={zx7speakerMobile} alt="" /></div>
            <div className="zx7-speaker-text">
              <h4>ZX7 SPEAKER</h4>
              <button className="transparent-button">SEE PRODUCT</button>
            </div>
         </div>

         <div className="home-main-yx1">
           <div><img src={yx1earphonesMobile} alt=""/></div>
           <div>
             <h4>YX1 EARPHONES</h4>
             <button className="transparent-button">SEE PRODUCT</button>
           </div>
         </div>
       </div>

        <AboutAudiophile />
      
        <Footer />

    </div>
  </section>
  )
}
