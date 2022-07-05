import React from 'react'
import "./Heading.css"

const Heading = () => {
  return (
    <div className='heading'>
        <h3>Search properties to rent</h3>

        <input type="text" placeholder='search'/>
    </div>
  )
}

export default Heading