import React from 'react'
import { useMediaQuery } from '@mui/material'
import aboutGuyMobile from "../assets/shared/mobile/image-best-gear.jpg";
import aboutGuyTablet from "../assets/shared/tablet/image-best-gear.jpg";
import aboutGuyDesktop from "../assets/shared/desktop/image-best-gear.jpg";
export default function AboutAudiophile() {
  const isDesktop = useMediaQuery('(min-width: 1050px)');   
  return ( 
    <div className="about-audiophile">
      {
        isDesktop
          ?
            <>
              <div className="about-text">
                <h3>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h3>
                <p>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                    rooms available for you to browse and experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable
                    audio equipment.
                </p>
              </div>
              <div className="about-image"><img src={aboutGuyDesktop} alt=""></img></div>
            </>
          :
            <>
              <div className="about-image"><img src={aboutGuyMobile} alt=""></img></div>
              <h3>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h3>
              <p>
                  Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                  earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                  rooms available for you to browse and experience a wide range of our products. Stop by our store
                  to meet some of the fantastic people who make Audiophile the best place to buy your portable
                  audio equipment.
              </p>
            </>
      }       
    </div>
  )
}
