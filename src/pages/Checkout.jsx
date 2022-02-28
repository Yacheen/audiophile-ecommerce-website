import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';
export default function Checkout() {
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <section className="checkout">
      <p style={{width: "90%",
        margin: "0 auto",
        padding: "2rem 0",
        opacity: "0.8",
        fontWeight: 600,
        fontSize: "1.2rem",
        cursor: "pointer"
       }}
      onClick={() => navigate(-1)}>Go Back</p>

      <div className="checkout-content">
        <div className="checkout-details">
          <h5>CHECKOUT</h5>
          <div className="checkout-billing">
            <p className="checkout-section-text">BILLING DETAILS</p>
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

          <div className="checkout-shipping">
            <p className="checkout-section-text">SHIPPING INFO</p>
            <div className="checkout-input-container">
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
    <div className="checkout-content">
      <div className="checkout-summary">
          <h6>SUMMARY</h6>
          <div className="summary-products">
            {
              cart.map(product => {
                return(
                  <div className="summary-product">
                    <img src={product.image} alt="" />
                    <div className="summary-product-label">
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </div>
                    <p>x{product.quantity}</p>
                  </div>
                )
              })
            }
          </div>

          <div className="summary-calculation">
            <p className="label">TOTAL</p> <p className="calculation">{/*insert total here */}</p>
          </div>

          <div className="summary-calculation">
            <p className="label">SHIPPING</p> <p className="calculation">$ 50.00</p>
          </div>

          <div className="summary-calculation">
            <p className="label">VAT (INCLUDED)</p> <p className="calculation">$ 1,079.00</p>
          </div>

          <div className="summary-calculation">
            <p className="label">GRAND TOTAL</p> <p className="calculation">{/*insert grand total here*/}</p>
          </div>

          <button className="brown-button">{"CONTINUE & PAY"}</button>

          
        </div>
      </div>
         Go back

Checkout  

Billing details
Name
Email address
Phone number

Shipping info
Address
ZIP code
City
Country

Payment details
Payment method
e-Money
Cash on delivery
e-Money number
e-money PIN

The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives 
at your residence. Just make sure your address is correct so that your order will not be cancelled.

Summary
XX99 MK II x1
$2,999

XX59 x2
$899

YX1 x1
$599

Total $5,396
Shipping $10
VAT $120

Grand total $5,526

Continue & pay
    </section>
  )
}
