import React from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'
import FullName from '../FullName/FullName'
import PersonImage from '../../assets/images/001.jpg'

class Header extends React.Component {
  state = {
    person: {
      firstName: 'Vasli',
      lastName: 'Saidmuradov',
      position: 'FRONTEND DEVELOPER',
      getFullName() {
        return `${this.firstName} ${this.lastName}`
      },
      image: PersonImage
    }
  }

  render() {
    return (
      <header className='Header'>
        <div className='Header__bg'></div>
        <Logo image={this.state.person.image} />
        <FullName person={this.state.person} />
      </header>
    )
  }
}

export default Header