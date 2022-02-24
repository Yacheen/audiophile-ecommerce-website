import React from 'react'
import { useNavigate } from 'react-router-dom';
import Reccommendations from "../../components/Reccommendations";
import Footer from "../../components/Footer";
import AboutAudiophile from "../../components/AboutAudiophile";
import Products from "../../components/Products";
import PurchaseItem from '../../components/PurchaseItem';
//images
import yx1wirelessearphones from "../../assets/product-yx1-earphones/mobile/image-product.jpg";
import xx99mark1headphones from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import xx59headphones from "../../assets/product-xx59-headphones/mobile/image-product.jpg";
import zx9speaker from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import photograph1 from "../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg";
import photograph2 from "../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import photograph3 from "../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg";
//data
import earphoneData from "../../assets/data.json";
export default function YX1WirelessEarphones() {
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
          image={yx1wirelessearphones}
          isNewProduct={true}
          name={"YX1 WIRELESS EARPHONES"}
          description={"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."}
          price={"$ 599"}
          features={
            <p>
              Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics 
              designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with 
              the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and 
              truly immersive sound.
              <br /> <br />
              The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants 
              built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, 
              giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in 
              an all new white and grey color scheme as well as the popular classic black.

            </p>
          }
          
          inTheBox={earphoneData[0].includes}
          
          photograph1={photograph1}
          photograph2={photograph2}
          photograph3={photograph3}
        />

        <Reccommendations 
          image1={xx99mark1headphones}
          name1={"XX99 MARK I"}

          image2={xx59headphones}
          name2={"XX59"}

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
