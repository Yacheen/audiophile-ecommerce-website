import React from 'react'
import { useNavigate } from 'react-router-dom';
//components
import Reccommendations from "../../components/Reccommendations";
import Footer from "../../components/Footer";
import AboutAudiophile from "../../components/AboutAudiophile";
import Products from "../../components/Products";
import PurchaseItem from '../../components/PurchaseItem';
//images
import xx99mark1headphones from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import xx59headphones from "../../assets/product-xx59-headphones/mobile/image-product.jpg";
import zx9speaker from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import zx7speaker from "../../assets/product-zx7-speaker/mobile/image-product.jpg";
import photograph1 from "../../assets/product-zx7-speaker/mobile/image-gallery-1.jpg";
import photograph2 from "../../assets/product-zx7-speaker/mobile/image-gallery-2.jpg";
import photograph3 from "../../assets/product-zx7-speaker/mobile/image-gallery-3.jpg";
//data
import speakerData from "../../assets/data.json";
export default function ZX7Speaker() {
  const navigate = useNavigate()
  return (
    <section className="home">
      <div className="home-content">

      <p className="item-page-go-back" onClick={() => navigate(-1)}>Go Back</p>

        <PurchaseItem 
          image={zx7speaker}
          name={"ZX7 SPEAKER"}
          description={"Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."}
          price={3500}
          features={
            <p>
              Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and 
              excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made 
              from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for 
              more advanced usage.
              <br/> <br/>
              The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF 
              wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth 
              or traditional optical and RCA input. Switch input sources and control volume at your finger tips with 
              the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
            </p>
          }
          inTheBox={speakerData[4].includes}
          
          photograph1={photograph1}
          photograph2={photograph2}
          photograph3={photograph3}
        />
       
        <Reccommendations
          image1={zx9speaker}
          name1={"ZX9 SPEAKER"}
          link1={"/speakers/1"}

          image2={xx99mark1headphones}
          name2={"XX99 MARK I"}
          link2={"/headphones/2"}

          image3={xx59headphones}
          name3={"XX59"}
          link3={"/headphones/3"}
        />
        <Products />
        <AboutAudiophile />
        
      </div>
      <Footer />
    </section>
  )
}
