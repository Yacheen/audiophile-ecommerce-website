import React, {useState} from 'react'

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
  const [quantity, setQuantity] = useState(0);
  const handleQuantity = (argument) => {
    switch(argument) {
      case "subtract":
        if(quantity === 0) {
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
  
  return (
    <section className="purchase-item">
      <div className="product-details">
        <img src={image} alt="" />
        {isNewProduct ? <p className="overline"><span>NEW PRODUCT</span></p> : null}
        <h4>{name}</h4>
        <p className="product-name">{description}</p>
        <h6 className="product-price">{price}</h6>

        <div className="purchase-buttons">
          <div className="change-quantity-buttons">
            <div className="subtract" onClick={() => handleQuantity("subtract")}>-</div>
            <p>{quantity}</p>
            <div className="add" onClick={() => handleQuantity("add")}>+</div>
          </div>

          <button className="brown-button">ADD TO CART</button>
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
            console.log(thing.item);
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
