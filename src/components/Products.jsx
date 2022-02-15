import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
export default function Products() {
    
  return (
    <section className="products">
        
        <div className="product">
            <img src={headphones} alt="" />
            <p>HEADPHONES</p>
            <div className="product-shop-now">
                <span>SHOP</span> <ArrowForwardIosIcon className="arrow-icon" />
            </div>
        </div>

        <div className="product">
            <img src={speakers} alt="" />
                <p>HEADPHONES</p>
                <div className="product-shop-now">
                    <span>SHOP</span> <ArrowForwardIosIcon className="arrow-icon" />
            </div>
        </div>

        <div className="product">
            <img src={earphones} alt="" />
                <p>HEADPHONES</p>
                <div className="product-shop-now">
                    <span>SHOP</span> <ArrowForwardIosIcon className="arrow-icon" />
            </div>
        </div>
    </section>
  )
}
