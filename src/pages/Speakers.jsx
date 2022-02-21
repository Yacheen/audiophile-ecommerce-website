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
              name={"XX59 Headphones"}
              picture={zx9speaker}
        />
            <Item
              description={"ZX7 speakerStream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."}
              isNewProduct={false}
              name={"XX59 Headphones"}
              picture={zx7speaker}
        />
        </div>
        <Products />
        <AboutAudiophile />

      </section>
    <Footer />
    </>
  )
}
