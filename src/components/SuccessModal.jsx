import React, { useContext, useEffect, useState } from 'react'
import {CartContext} from "../Contexts/CartContext";
import CheckIcon from '@mui/icons-material/Check';

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
    <div className="success-container">
      <div style={{maxHeight: "60rem", top: "50%"}} className="cart">
        <div style={{maxHeight: "60rem"}} className="cart-content">
          <div className="checkmark-circle">
            <CheckIcon className="checkmark-icon" />
          </div>
          <h5>THANK YOU <br/> FOR YOUR ORDER</h5>
          <p className="success-email-confirmation">You will receive an email confirmation shortly.</p>

          <div className="success-products">
            <div className="success-products-content">

              <div className="success-product">
                  <img src={cart[0].image} alt="" />
                  <div className="success-label">
                    <p className="success-name">{cart[0].name}</p>
                    <p className="success-price">{formatCurrency(cart[0].price)}</p>
                  </div>
                  <p>x{cart[0].quantity}</p>
              </div>

              <hr style={{opacity: 0.3}} />
              <p className="success-other-items">and {cart.length - 1} other item(s)</p>
            </div>

              <div className="success-grand-total">
                <div className="grand-total-content">
                  <p className="grand-total">GRAND TOTAL</p>
                  <p className="grand-total-price">{formatCurrency(total)}</p>
                </div>
              </div>
          </div>

          <button onClick={() => handleBackToHome()} className="brown-button">BACK TO HOME</button>

        </div>

      </div>
    </div>
  )
}
