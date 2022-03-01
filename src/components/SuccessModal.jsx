import React, { useContext, useEffect, useState } from 'react'
import {CartContext} from "../Contexts/CartContext";

export default function SuccessModal() {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const formatCurrency = (amount) => {
    let dollarUS = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return dollarUS.format(amount);
  }

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

const handleBackToHome = () => {
  window.location.href="/";
  setCart([]);
  setTotal(0);
}

  return (
    <div className="cart">
      <div className="cart-content">
        <div className="checkmark-circle">

        </div>
        <h5>THANK YOU <br/> FOR YOUR ORDER</h5>
        <p>You will receive an email confirmation shortly.</p>

        <div className="success-products">
          <div className="success-product">
            <img src={cart[0].image} alt="" />
            <div className="success-label">
              <p>{cart[0].name}</p>
              <p>{formatCurrency(cart[0].price)}</p>
            </div>
            <p>x{cart[0].quantity}</p>
          </div>
          <p className="success-other-items">and {cart.length - 1} other item(s)</p>

          <div className="success-grand-total">
            <p>GRAND TOTAL</p>

            <p>{formatCurrency(total)}</p>
          </div>
        </div>

        <button onClick={() => handleBackToHome()} className="brown-button">BACK TO HOME</button>

      </div>

  XX99 MK II x 1
  $2,999
  and 2 other item(s)

  Grand total
  $5,526

  Back to home
    </div>
  )
}
