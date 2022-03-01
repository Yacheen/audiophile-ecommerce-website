import React, { useState, useContext, useEffect } from "react";
import {CartContext} from '../Contexts/CartContext'
export default function CartModal() {
    const [cart, setCart] = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
      if(cart.length > 0) {
        let totalOfCart = 0;
        cart.forEach(item => {
          totalOfCart += item.quantity * item.price;
        })
        setTotal(totalOfCart);
      }

      else {
        setTotal(0);
      }

  }, [cart]);

    const handleQuantity = (argument, productName) => {
      //filter for product selected, then change quantity based on argument
      switch(argument) {
        case "subtract":
          let item = cart.filter(item => item.name === productName);
          if(item[0].quantity === 1) {
            break;
          }
        
          else {
            setCart(prevCart =>
              prevCart.map(item => 
                item.name === productName
                ?  
                  {...item, quantity: item.quantity - 1}
                :
                  item
              )
            )
            break;
          }
  
        case "add":
          cart.forEach((item, index) => {
            if(item.name === productName) {
              setCart(prevCart =>
                prevCart.map(item => 
                  item.name === productName
                  ?  
                    {...item, quantity: item.quantity + 1}
                  :
                    item
                )
              )
              
            }
          })
          break;
        
        default:
          break;
      }
    }

    const removeAll = () => {
      setCart([]);
    }

    const formatCurrency = (amount) => {
      let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return dollarUS.format(amount);
    }


    return (
      
      <div className="cart" data-aos="zoom-in" data-aos-duration="500">
        <div className="cart-content">
          
            <div className="cart-length">
              <p style={{fontWeight: 700, fontSize: "1.6rem"}}>CART ({cart.length})</p>
              <p style={{textDecoration: "underline", opacity: 0.6, cursor: "pointer"}} onClick={() => removeAll()}>Remove all</p>
            </div>

            <div className="cart-products">
              
              {
                cart.map((product, index) => {
                  return(
                    <div className="cart-product" key={index}>
                      <img src={product.image} alt="" />
                      <div className="product-label">
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{formatCurrency(product.price)}</p>
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
              <p style={{opacity: 0.8, fontSize: "1.4rem"}}>TOTAL</p>
              <p className="cart-total-price">{formatCurrency(total)}</p>
            </div>
            <a href="/checkout">
            <div className="brown-button">
              CHECKOUT
            </div>
            </a>

          </div>
        </div>
    )
}
