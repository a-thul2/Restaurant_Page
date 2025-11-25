import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Discover our carefully curated selection of signature dishes, each crafted with premium ingredients and chef's expertise. From traditional favorites to innovative creations, every plate is designed to delight your palate and elevate your dining experience.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                          <img src={element.image} alt={element.title} />
                          <h3 className="dish-title">{element.title}</h3>
                          <button className="tagBtn">{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu