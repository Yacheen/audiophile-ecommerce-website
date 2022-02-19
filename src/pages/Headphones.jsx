import React from 'react'
import Products from "../components/Products";
import AboutAudiophile from "../components/AboutAudiophile";
import CategoryBanner from '../components/CategoryBanner';

export default function Headphones() {
  return (
    <section className="headphones">
      <CategoryBanner category={"HEADPHONES"}/>

      
      
        Home
  Headphones
  Speakers
  Earphones

  Headphones

  New product
  
  XX99 Mark II Headphones
  The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium 
  headphone experience by reproducing the balanced depth and precision of studio-quality sound.
  
  See product

  XX99 Mark I Headphones
  As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio 
  reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
  
  See product

  XX59 Headphones
  Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. 
  The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
  
  See product

  <Products />
  <AboutAudiophile />

  
    </section>
  )
}
