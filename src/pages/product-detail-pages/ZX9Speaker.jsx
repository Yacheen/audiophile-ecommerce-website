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
import xx59headphones from "../../assets/product-xx59-headphones/mobile/image-product.jpg"
import zx9speaker from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import zx7speaker from "../../assets/product-zx7-speaker/mobile/image-product.jpg";
import photograph1 from "../../assets/product-zx9-speaker/mobile/image-gallery-1.jpg";
import photograph2 from "../../assets/product-zx9-speaker/mobile/image-gallery-2.jpg";
import photograph3 from "../../assets/product-zx9-speaker/mobile/image-gallery-3.jpg";
//data

import speakerData from "../../assets/data.json";
export default function ZX9Speaker() {
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
          image={zx9speaker}
          isNewProduct={true}
          name={"ZX9 SPEAKER"}
          description={"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."}
          price={"$ 4,500"}
          features={
            <p>
              Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, 
              USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices 
              connected for easy switching. Improved bluetooth technology offers near lossless audio quality at 
              up to 328ft (100m).
              <br /> <br />
              Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm 
              tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass 
              unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you 
              will experience new sensations from old songs since it can respond to even the subtle waveforms.
            </p>
          }
          inTheBox={speakerData[5].includes}
          photograph1={photograph1}
          photograph2={photograph2}
          photograph3={photograph3}
        />

        <Reccommendations
          image1={zx7speaker}
          name1={"ZX7 SPEAKER"}

          image2={xx99mark1headphones}
          name2={"XX99 MARK I"}

          image3={xx59headphones}
          name3={"XX59"}
        />

        <Products />
        <AboutAudiophile />
        
      </div>
      <Footer />
    </section>
  )
}
