import React from 'react'

export default function Item({picture, isNewProduct, name, description, link, isReversed}) {
  return (
    <div className={`item ${isReversed ? "reversed-item" : null}`}>
        <img src={picture} alt=""/>
        
        <div className="item-description">
          {isNewProduct ? <p className="overline new-product">NEW PRODUCT</p> : null}
          <h4>{name}</h4>
          <p className="product-description">{description}</p>
          <a href={link}>
            <button className="brown-button">SEE PRODUCT</button> 
          </a>
        </div>
    </div>
  )
}
