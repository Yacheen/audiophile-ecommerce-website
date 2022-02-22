import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
      
        <div className="footer-buttons">
        <h5>audiophile</h5>
          <p>HOME</p>
          <p>HEADPHONES</p>
          <p>SPEAKERS</p>
          <p>EARPHONES</p>
        </div>
        <div className="footer-description">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
            and sound specialists who are devoted to helping you get the most out of personal audio. Come and
            visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="footer-socials">
            <FacebookIcon style={{fontSize: 36}} />
            <TwitterIcon style={{fontSize: 36}} />
            <InstagramIcon style={{fontSize: 36}} />
          </div>
        </div>
      
        <p>Copyright 2021. All Rights Reserved.<br/>Mockup from <a href="https://www.frontendmentor.io/challenges" target="_blank" rel="noreferrer">frontendmentors</a></p>
        
      </div>
    </footer>
  )
}
