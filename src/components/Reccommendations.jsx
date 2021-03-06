import React from 'react'

export default function Reccommendations({
  image1,
  image2,
  image3,
  name1,
  name2,
  name3,
  link1,
  link2,
  link3
}) {
  return (
    <section className="reccommendations">
      <h5 style={{
        textAlign: "center",
        marginBottom: "6rem"
      }}>YOU MAY ALSO LIKE</h5>
      <div className="reccommendations-content">
        <div className="reccommendation">
          <div className="image-background">
            <img src={image1} alt=""></img>
          </div>

          <h4>{name1}</h4>
          <a href={link1}>
            <button className="brown-button">SEE PRODUCT</button>
          </a>
        </div>

        <div className="reccommendation">
          <div className="image-background">
            <img src={image2} alt=""></img>
          </div>
          <h4>{name2}</h4>
          <a href={link2}>
            <button className="brown-button">SEE PRODUCT</button>
          </a>
        </div>

        <div className="reccommendation">
          <div className="image-background">
            <img src={image3} alt=""></img>
          </div>
          <h4>{name3}</h4>
          <a href={link3}>
            <button className="brown-button">SEE PRODUCT</button>
          </a>
        </div>

      </div>
    </section>
  )
}
