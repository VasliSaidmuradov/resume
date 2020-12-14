import React from 'react'
import './FullName.scss'

const FullName = props => {

  return (
    <div className='FullName__wrap'>
      <p className='FullName'>{props.person.getFullName()}</p>
      <p className='Position'>{props.person.position}</p>
    </div>
  )
}

export default FullName