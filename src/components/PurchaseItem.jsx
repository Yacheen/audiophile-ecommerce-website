import React, { useState, useContext } from 'react'
import {CartContext} from "../Contexts/CartContext";

export default function PurchaseItem({
    image,
    isNewProduct,
    name,
    description,
    price,
    features,
    inTheBox,
    photograph1,
    photograph2,
    photograph3
}) {
  const [cart, setCart] = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);  
  
  const handleModalQuantity = (argument) => {
    switch(argument) {
      case "subtract":
        if(quantity === 1) {
          break;
        }
        else {
          setQuantity(quantity - 1);
          break;
        }

      case "add":
        setQuantity(quantity + 1);
        break;
      
      default:
        break;
    }
  }
  const formatCurrency = (amount) => {
    let dollarUS = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return dollarUS.format(amount);
  }

  const addToCart = (name, quantity, price) => {
    
    if(cart.length === 0) {
      setCart([...cart, {name: name, quantity: quantity, price: price, image: image}]);
      
    }
    else {
      cart.forEach((item, index) => {
        let cartSet = false;
        if(item.name === name && !cartSet) {
          item.quantity = item.quantity + quantity;
          cartSet = true;
        }
        else if (!cartSet){
          setCart([...cart, {name: name, quantity: quantity, price: price, image: image}]);
          cartSet = true;
        }
        
      })
    }

  }
  
  return (
    <section className="purchase-item">
      <div className="product-details">
        <img src={image} alt="" />
        {isNewProduct ? <p className="overline"><span>NEW PRODUCT</span></p> : null}
        <h4>{name}</h4>
        <p className="product-name">{description}</p>
        <h6 className="product-price">{formatCurrency(price)}</h6>

        <div className="purchase-buttons">
          <div className="change-quantity-buttons">
            <div className="subtract" onClick={() => handleModalQuantity("subtract")}>-</div>
            <p>{quantity}</p>
            <div className="add" onClick={() => handleModalQuantity("add")}>+</div>
          </div>

          <button className="brown-button" onClick={() => addToCart(name, quantity, price)}>ADD TO CART</button>
        </div>
      </div>

      <div className="product-features">
        <h5>FEATURES</h5>
        {features}
      </div>
      <div className="product-in-the-box">

      
      <h5>IN THE BOX</h5>
        {/*map through, for each json object, put its key and value pair*/}
        {
          inTheBox.map((thing, index) => {
            return(
              <div className="thing" key={index}>
                <p className="thing-quantity">{thing.quantity}X</p>
                <p className="thing-name">{thing.item}</p>
              </div>
            )
          })

        }
      </div>
      <div className="photography">
        <img src={photograph1} alt="" />
        <img src={photograph2} alt="" />
        <img src={photograph3} alt="" />
      </div>
    
    </section>
  )
}
