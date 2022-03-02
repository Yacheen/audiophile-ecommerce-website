import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';
import Footer from '../components/Footer';
export default function Checkout({setGrandTotal, setSuccessDisplay}) {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [cartIsEmpty, setCartIsEmpty] = useState(cart.length > 0 ? false : true);

  const navigate = useNavigate();
  {/*total function, calculations, and maintian state
    via local/session stprage is todo.
  */}
  //useEffect setting cart to localStorage
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
    
    console.log(total);
  }, [cart]);

  const handlePay = (grand_total) => {
    if(grand_total === 0) return;

    setGrandTotal(grand_total);
    setSuccessDisplay(true);
  }

  return (
    <>
    <div className="checkout-background">
      <p style={{
          background: "hsl(0, 0%, 95%)",
          padding: "2rem 0",
          opacity: "0.8",
          fontWeight: 600,
          fontSize: "1.2rem",
          cursor: "pointer",
          width: "90%",
          margin: "0 auto",
        }}
        onClick={() => navigate(-1)}>Go Back</p>
      
     
        <div className="checkout-content-container">
        <div style={{maxWidth: "68.9rem"}} className="checkout-content">
        
          <div className="checkout-details">
            <h5 style={{padding: "2rem 0 0 0"}}>CHECKOUT</h5>
            <div className="checkout-billing">
              <p className="checkout-section-text">BILLING DETAILS</p>
              <div className="checkout-inputs">

              <div className="checkout-input-container">
                <p>Name</p>
                <input className="checkout-input" type="text" placeholder="Your Name"></input>
              </div>

              <div className="checkout-input-container">
                <p>Email Address</p>
                <input className="checkout-input" type="email" placeholder="youremail@hotmail.com"></input>
              </div>

              <div className="checkout-input-container">
                <p>Phone Number</p>
                <input className="checkout-input" type="text" placeholder="+1 234-567-8901"></input>
              </div>

              </div>
            </div>

            <div className="checkout-shipping">
              <p className="checkout-section-text">SHIPPING INFO</p>
              <div className="checkout-inputs">
              <div className="checkout-input-container checkout-address">
                <p>Your Address</p>
                <input className="checkout-input" type="text" placeholder="CandyLand, 123 St, 1337"></input>
              </div>

              <div className="checkout-input-container">
                <p>ZIP Code</p>
                <input className="checkout-input" type="text" placeholder="A1B 2C3"></input>
              </div>

              <div className="checkout-input-container">
                <p>City</p>
                <input className="checkout-input" type="text" placeholder="Some City"></input>
              </div>

              <div className="checkout-input-container">
                <p>Country</p>
                <input className="checkout-input" type="text" placeholder="Canada"></input>
              </div>

              </div>

            </div>

            <div className="checkout-payment">
              <p className="checkout-section-text">PAYMENT DETAILS</p>

              <div className="checkout-input-container">
                <p>Payment Method</p>

                <div className="radio-container">
                    <input className="radio-button" type="radio" id="e-money" name="payment-method"></input>
                    <p>e-Money</p>
                </div>

                <div className="radio-container">
                  <input className="radio-button" type="radio" id="cash-on-delivery" name="payment-method"></input>
                  <p>Cash On Delivery</p>
                </div>
              </div>

              <div className="checkout-input-container">
                <p>e-Money Number</p>
                <input className="checkout-input" type="text" placeholder="123456789"></input>
              </div>

              <div className="checkout-input-container">
                <p>e-Money PIN</p>
                <input className="checkout-input" type="text" placeholder="1234"></input>
              </div>
  
            </div>

          </div>
        </div>


      <div className="checkout-content summary">
        <div className="checkout-summary">
            <h6 style={{padding: "2rem 0 0 0"}}>SUMMARY</h6>
            <div className="summary-products">
              {
                cart.map(product => {
                  return(
                    <div className="summary-product">
                      <div className="summary-product-left-side">
                        <img src={product.image} alt="" />
                        <div className="summary-product-label">
                          <p style={{fontWeight: 700, fontSize: "1.4rem"}}>{product.name}</p>
                          <p style={{width: "100%", fontSize: "1.2rem"}}>{formatCurrency(product.price)}</p>
                        </div>
                      </div>
                      <p style={{fontSize: "1.4rem", opacity: 0.7 }}>x{product.quantity}</p>
                    </div>
                  )
                })
              }
            </div>

            <div className="summary-calculation">
              <p className="label">TOTAL</p>
              <p className="calculation">{formatCurrency(total)}</p>
            </div>

            <div className="summary-calculation">
              <p className="label">SHIPPING</p>
              <p className="calculation">{cart.length === 0 ? "$0.00" : "$ 50.00"}</p>
            </div>

            <div className="summary-calculation">
              <p className="label">VAT (INCLUDED)</p>
              <p className="calculation">{cart.length === 0 ? "$0.00" : "$ 1,079.00"}</p>
            </div>

            <div className="summary-calculation">
              <p className="label">GRAND TOTAL</p>
              <p className="calculation grand-total">{cart.length === 0 ? "$0.00" : formatCurrency(total + 50 + 1079)}</p>
            </div>

            <button  disabled={cartIsEmpty} onClick={() => handlePay(cart.length === 0 ? 0 : total + 50 + 1079)} className="brown-button">{cartIsEmpty ? `Please add to cart to continue` : "CONTINUE & PAY"}</button>

          </div>
        </div>
        </div>
    </div>
    <Footer />
    </>
    
  )
}
