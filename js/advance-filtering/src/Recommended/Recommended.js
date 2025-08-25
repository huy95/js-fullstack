import React from 'react'
import "./Recommended.css"

const Recommended = () => {
  return (
    <>
    <div className='recommended-container'>
        <h2 className=''>
            Recommended
        </h2>
        <div className='recommended-btns'>
        <button className='btns'>All Products</button>
        <button className='btns'>Nike</button>
        <button className='btns'>Adidas</button>
        <button className='btns'>Puma</button>
        <button className='btns'>Vans</button>
        </div>
    </div>
    </>
  )
}

export default Recommended