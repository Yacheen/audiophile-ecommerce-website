import React from 'react'
import Reccommendations from "../../components/Reccommendations";
import Footer from "../../components/Footer";
import AboutAudiophile from "../../components/AboutAudiophile";
import Products from "../../components/Products";

export default function XX99Mark1headphones() {
  return (
    <section className="home">
      <div className="home-content">

        <Reccommendations />
        <Products />
        <AboutAudiophile />
        
      </div>
      <Footer />
    </section>
  )
}
