import React from 'react'

export default function CategoryBanner({category}) {
  return (
    <section className="category-banner">
        <div className="category-banner-content">
            <h5>{category}</h5>
        </div>
    </section>
  )
}
