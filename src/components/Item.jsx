import React from 'react'

export default function Item({picture, isNewItem, name, description, link}) {
  return (
    <div className="item">
        <img src={picture} alt=""/>
        {isNewItem ? <p className="overline new-product">NEW PRODUCT</p> : null}
        <h4>{name}</h4>
        <p className="product-description">{description}</p>
        <a href={link}>
          <button className="brown-button">SEE PRODUCT</button> 
        </a>
    </div>
  )
}
