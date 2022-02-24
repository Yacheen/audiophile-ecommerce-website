import React from 'react'
//components
import Reccommendations from "../../components/Reccommendations";
import Footer from "../../components/Footer";
import AboutAudiophile from "../../components/AboutAudiophile";
import Products from "../../components/Products";
import PurchaseItem from '../../components/PurchaseItem';
//images
import x99mark2headphones from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import x99mark1headphones from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import x59headphones from "../../assets/product-xx59-headphones/mobile/image-product.jpg"
import zx9speaker from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import photograph1 from "../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import photograph2 from "../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import photograph3 from "../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
//data
import headphoneData from "../../assets/data.json";

import {useNavigate} from 'react-router-dom';
export default function XX99Mark2Headphones() {
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
          description={"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."}
          features={
            <p>
              Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. <br/> <br/> The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
            </p>
          }
          image={x99mark2headphones}
          inTheBox={headphoneData[3].includes}
          isNewProduct={true}
          name={"XX99 MARK II HEADPHONES"}
          price={"$ 2,999"}
          photograph1={photograph1}
          photograph2={photograph2}
          photograph3={photograph3}
        />

        <Reccommendations 
          image1={x99mark1headphones}
          image2={x59headphones}
          image3={zx9speaker}
          name1={"XX99 MARK I"}
          name2={"XX59"}
          name3={"ZX9 SPEAKER"}
        />

        <Products />
        <AboutAudiophile />
        
      </div>
      <Footer />
    </section>
  )
}
