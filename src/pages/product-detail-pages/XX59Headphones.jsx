import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reccommendations from "../../components/Reccommendations";
import Footer from "../../components/Footer";
import AboutAudiophile from "../../components/AboutAudiophile";
import Products from "../../components/Products";
import PurchaseItem from "../../components/PurchaseItem";
import xx59headphones from "../../assets/product-xx59-headphones/mobile/image-product.jpg";
import xx99mark2headphones from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx99mark1headphones from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import zx9speaker from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import headphoneData from "../../assets/data.json";

import photograph1 from "../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import photograph2 from "../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg";
import photograph3 from "../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg";



export default function XX59Headphones() {
  const navigate = useNavigate();
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
          image={xx59headphones}
          isNewProduct={false}

          name={"XX59 HEADPHONES"}
          description={"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."}
          price={899}
          
          features={
            <p>
              These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact
              folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the
              latest wireless technology engineered for audio synchronization with videos.
              <br/> <br/>
              More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free
              calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access
              touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an
              impressive 30-hour battery life that can be rapidly recharged via USB-C.
            </p>
          }

          inTheBox={headphoneData[1].includes}
          
          photograph1={photograph1}
          photograph2={photograph2}
          photograph3={photograph3}

        />

        <Reccommendations
          image1={xx99mark2headphones}
          name1={"XX99 MARK II"}

          image2={xx99mark1headphones}
          name2={"XX99 MARK I"}

          image3={zx9speaker}
          name3={"ZX9 SPEAKER"}
        />
        <Products />
        <AboutAudiophile />
        
      </div>
      <Footer />
    </section>
  )
}
