import React from 'react'
import CategoryBanner from '../components/CategoryBanner'
import Products from '../components/Products';
import AboutAudiophile from '../components/AboutAudiophile';
import Footer from '../components/Footer';
import zx9speaker from "../assets/product-zx9-speaker/mobile/image-product.jpg";
import zx7speaker from "../assets/product-zx7-speaker/mobile/image-product.jpg";
import Item from "../components/Item";
export default function speakers() {
  return (
    <>
     <CategoryBanner category={"SPEAKERS"}/>
      <section className="items">
        <div className="items-content">
          {/*zx9 and zx7 speakers */}
          <Item
            description={"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."}
            isNewProduct={true}
            name={"ZX9 Speaker"}
            picture={zx9speaker}
            link={"/speakers/1"}
          />
          <Item
            description={"ZX7 speakerStream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."}
            isNewProduct={false}
            name={"ZX7 Speaker"}
            picture={zx7speaker}
            link={"/speakers/2"}
          />
        </div>
        <Products />
        <AboutAudiophile />

      </section>
    <Footer />
    </>
  )
}
