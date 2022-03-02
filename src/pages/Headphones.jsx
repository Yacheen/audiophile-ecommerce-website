import React from 'react'
import Products from "../components/Products";
import AboutAudiophile from "../components/AboutAudiophile";
import CategoryBanner from '../components/CategoryBanner';
import Footer from '../components/Footer';
import Item from '../components/Item';
import x99mark2headphones from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import x99mark1headphones from "../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import x59headphones from "../assets/product-xx59-headphones/mobile/image-product.jpg";
//import x59headphones from "";
export default function Headphones() {
  return (
    <>
      <CategoryBanner category={"HEADPHONES"}/>
        <section className="items">
          
          <div className="items-content">
            {/*x99mark2*/}
            <Item
              description={"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."}
              isNewProduct={true}
              name={"XX99 Mark II Headphones"}
              picture={x99mark2headphones}
              link={"/headphones/1"}
            />

            {/*x99mark1*/}
            <Item
              description={"   As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."}
              isNewProduct={false}
              name={"XX99 Mark I Headphones"}
              picture={x99mark1headphones}
              link={"/headphones/2"}
            />

            {/*x59*/}
            <Item
              description={"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."}
              isNewProduct={false}
              name={"XX59 Headphones"}
              picture={x59headphones}
              link={"/headphones/3"}
            />
          </div>
          <Products />
          <AboutAudiophile />
          
        </section>
      <Footer />
    </>
  )
}
