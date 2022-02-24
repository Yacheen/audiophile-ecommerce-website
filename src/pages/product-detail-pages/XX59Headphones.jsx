import React from 'react'
import Reccommendations from "../../components/Reccommendations";
import Footer from "../../components/Footer";
import AboutAudiophile from "../../components/AboutAudiophile";
import Products from "../../components/Products";
import PurchaseItem from "../../components/PurchaseItem";
import xx59headphones from "../../assets/product-xx59-headphones/mobile/image-product.jpg";
import xx99mark2headphones from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx99mark1headphones from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";

import photograph1 from "../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import photograph2 from "../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg";
import photograph3 from "../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg";



export default function XX59Headphones() {
  return (
    <section className="home">
      <div className="home-content">
      <p style={{
          opacity: "0.4",
          marginBottom: "2rem",
          fontSize: "1.4rem",
          textAlign: "left",
          width: "100%",
          cursor: "pointer"
          
        }}
        onClick={() => navigate(-1)}
        >Go Back</p>

        <PurchaseItem
          image={}
          isNewProduct={false}

          name={}
          description={}
          price={"$ 899"}

          

        
        />

        <Reccommendations
          image1={}
          name1={}

          image2={}
          name2={}

          image3={}
          name3={}
        />
        <Products />
        <AboutAudiophile />
        
      </div>
      <Footer />
    </section>
  )
}
