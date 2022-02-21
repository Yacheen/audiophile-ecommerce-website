import React from 'react'
import CategoryBanner from '../components/CategoryBanner'
import Products from '../components/Products';
import AboutAudiophile from '../components/AboutAudiophile';
import Footer from '../components/Footer';
import yx1earphones from "../assets/product-yx1-earphones/mobile/image-product.jpg";
import Item from "../components/Item";

export default function Earphones() {
  return (
    <>
    <CategoryBanner category={"EARPHONES"}/>
      <section className="items">
        <div className="items-content">
        <Item
              description={"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."}
              isNewProduct={true}
              name={"YX1 wireless earphones"}
              picture={yx1earphones}
        />

        </div>
        <Products />
        <AboutAudiophile />
      </section>
      <Footer />
    </>
  )
}

