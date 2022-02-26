import React, { useState, useContext, useEffect } from "react";
import {CartContext} from '../Contexts/CartContext'
export default function CartModal() {
    const [cart, setCart] = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const handleQuantity = (argument, product) => {
      //filter for product selected, then change quantity based on argument
      let item = cart.filter(item => item.name !== product);

      switch(argument) {
        case "subtract":
          if(item.quantity === 1) {
            break;
          }
          else {
            setCart({...item, [item.quantity]: item.quantity - 1});
            break;
          }
  
        case "add":
          setCart({...item, [item.quantity]: item.quantity + 1});
          break;
        
        default:
          break;
      }
    }

    const cartTotal = () => {
      cart.forEach(product => {
        console.log('total loopin')
        let totalOfItem = product.quantity * product.price
        setTotal(total + totalOfItem);
      });
    }
    
    useEffect(() => {
      console.log('it looping');
      cartTotal();
      

    }, [cart]);


    return (
      <div className="cart">
        <div className="cart-content">
          
            <div className="cart-length">
              <p>CART ({cart.length})</p>
              <p>Remove all</p>
            </div>

            <div className="cart-products">
              {
                cart.map((product, index) => {
                  return(
                    <div className="cart-product" key={index}>
                      <img src={product.image} alt="" />
                      <div className="product-label">
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">$ {product.price}</p>
                      </div>
                      <div className="change-quantity-buttons">
                        <div className="subtract" onClick={() => handleQuantity("subtract", product.name)}>-</div>
                          <p>{product.quantity}</p>
                        <div className="add" onClick={() => handleQuantity("add", product.name)}>+</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="cart-total">
              <p>TOTAL</p>
              <p>$ {total}</p>
            </div>

            <div className="brown-button">
              CHECKOUT
            </div>

          </div>
        </div>
     
    )
}
