import React from 'react'
import Reccommendations from "../../components/Reccommendations";
import Footer from "../../components/Footer";
import AboutAudiophile from "../../components/AboutAudiophile";
import Products from "../../components/Products";
import PurchaseItem from '../../components/PurchaseItem';
import xx99mark2headphones from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx99mark1headphones from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import xx59headphones from "../../assets/product-xx59-headphones/mobile/image-product.jpg";
import zx9speaker from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import photograph1 from "../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import photograph2 from "../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import photograph3 from "../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";
import headphoneData from '../../assets/data.json';

import {useNavigate} from 'react-router-dom';
export default function XX99Mark1headphones() {
  const navigate = useNavigate();
  return (
    <section className="home">
      <div className="home-content">

      <p className="item-page-go-back" onClick={() => navigate(-1)}>Go Back</p>

        <PurchaseItem
          image={xx99mark1headphones}
          name={"XX99 MARK I HEADPHONES"}
          description={"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."}
          price={1750}
          features={
            <p>
              As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades 
              of audio expertise, redefining the critical listening experience. This pair of closed-back headphones 
              are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.

              From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, 
              the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers 
              up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. 
              For connectivity, a specially tuned cable is included with a balanced gold connector.
            </p>
          }
          isNewProduct={false}
          inTheBox={headphoneData[2].includes}
          photograph1={photograph1}
          photograph2={photograph2}
          photograph3={photograph3}
        />
        
        
        <Reccommendations
         image1={xx99mark2headphones}
         name1={"XX99 MARK II"}
         link1={"/headphones/1"}

         image2={xx59headphones}
         name2={"XX59"}
         link2={"/headphones/3"}

         image3={zx9speaker}
         name3={"ZX9 SPEAKER"}
         link3={"/speakers/1"}
         />

        <Products />
        <AboutAudiophile />
        
      </div>
      <Footer />
    </section>
  )
}
