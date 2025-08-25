import React from 'react'
import "./Category.css"
import Input from '../../components/Input'

const Category = ({handleChange}) => {
  return (
    <div className='sidebar-items'>
      <h2 className='sidebar-title'>Category</h2>
      <div>
        <Input 
          handle={handleChange}
          name="test"
          title="Sneakers"
          value="sneakers"
        />
        <Input 
          handle={handleChange}
          name="test"
          title="Falts"
          value="falts"
        />
        <Input 
          handle={handleChange}
          name="test"
          title="Sandals"
          value="sandals"
        />
        <Input 
          handle={handleChange}
          name="test"
          title="Heels"
          value="heels"
        />
      
      </div>
    </div>
  )
}
// phan biet ham abc() va abc

export default Category