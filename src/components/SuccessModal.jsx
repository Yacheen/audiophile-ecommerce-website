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
    <div style={{maxHeight: "60rem", top: "50%"}} className="cart">
      <div style={{maxHeight: "60rem"}} className="cart-content">
        <div className="checkmark-circle">
          <CheckIcon className="checkmark-icon" />
        </div>
        <h5>THANK YOU <br/> FOR YOUR ORDER</h5>
        <p style={{fontSize: "1.4rem", maxWidth: "90%", opacity: 0.7, marginBottom: "4rem"}}>You will receive an email confirmation shortly.</p>

        <div className="success-products">
          <div className="success-products-content">

            <div className="success-product">
                <img src={cart[0].image} alt="" />
                <div style={{maxWidth: "50%"}} className="success-label">
                  <p style={{fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.2rem"}}>{cart[0].name}</p>
                  <p style={{fontSize: "1.2rem", fontWeight: 700, opacity: 0.7}}>{formatCurrency(cart[0].price)}</p>
                </div>
                <p style={{fontSize: "1.4rem", fontWeight: 700, opacity: 0.7}}>x{cart[0].quantity}</p>
            </div>

            <hr style={{opacity: 0.3}} />
            <p style={{fontWeight: 600, opacity: 0.7, fontSize: "1.2rem"}} className="success-other-items">and {cart.length - 1} other item(s)</p>
          </div>

            <div className="success-grand-total">
              <div className="grand-total-content">
                <p style={{opacity: 0.6, color: "hsl(0, 0%, 90%)", fontSize: "1.2rem", letterSpacing: "0.1rem"}}>GRAND TOTAL</p>
                <p style={{color: "hsl(0, 0%, 100%)", fontSize: "1.6rem", fontWeight: 600}}>{formatCurrency(total)}</p>
              </div>
            </div>
        </div>

        <button onClick={() => handleBackToHome()} className="brown-button">BACK TO HOME</button>

      </div>

    </div>
  )
}
