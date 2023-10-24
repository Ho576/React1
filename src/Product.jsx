import React from 'react'
import './Products'

function Product(props) {
  return (
    <div className='col-md-4'>
    <h3>{props.title}</h3>
    <p>{props.price}</p>
    <p>{props.desc}</p>
    
    </div>
  )
}

export default Product