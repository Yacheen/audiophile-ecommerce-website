import React from 'react'

export default function Reccommendations({
  image1,
  image2,
  image3,
  name1,
  name2,
  name3
}) {
  return (
    <section className="reccommendations">
      <div className="reccommendation">
        <img src={image1} alt=""></img>
        <h4>{name1}</h4>
        <button className="brown-button">SEE PRODUCT</button>
      </div>

      <div className="reccommendation">
        <img src={image2} alt=""></img>
        <h4>{name2}</h4>
        <button className="brown-button">SEE PRODUCT</button>
      </div>

      <div className="reccommendation">
        <img src={image3} alt=""></img>
        <h4>{name3}</h4>
        <button className="brown-button">SEE PRODUCT</button>
      </div>
    </section>
  )
}
