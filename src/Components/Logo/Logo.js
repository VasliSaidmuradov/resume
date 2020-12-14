import React from 'react'
import './Logo.scss'

const Logo = props => {
  return (
    <div className='Logo'>
      <img src={props.image} alt={props.image.split('.')[0]} />
    </div>
  )
}

export default Logo