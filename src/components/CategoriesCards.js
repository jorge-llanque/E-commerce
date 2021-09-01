import React from 'react'
import categories from '../utils/categories'
import './styles/CategoriesCards.scss'

export default function CategoriesCards() {


  return (
    <div className="CategoriesCards">
      {
        categories[0].content.map(obj => (
          <div className="CategoriesCards__Card">
            <img src={obj.icon} alt="swed"/>
            {obj.title}
            <span>Hasta {obj.discount}%</span>
          </div>
          
        ))
      }
    </div>
  )
}
