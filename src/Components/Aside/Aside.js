import React from 'react'
import './Aside.scss'
import '../Content.scss'
import Title from '../Title/Title'
import gData from '../../gData'
import List from '../List/List'
import { Envelope, Telephone, Cursor } from 'react-bootstrap-icons'


class Aside extends React.Component {
  state = {
    title: ''
  }
  render() {
    return (
      <div className="Aside">
        <Title title='Career objective' />
        <div className='Content'>
          {gData.goals.map((goal, i) => <p className='Content__text' key={i}>{goal}</p>)}
        </div>
        <Title title='Contacts' />
        <div className='Content'>
          {
            gData.contacts.map((contact, i) => {
              return(
                <p className='Content__text' key={i}>
                  {
                    contact.icon === 'Envelope' 
                    ? <Envelope className='Content__icon' />
                    : contact.icon === 'Telephone'
                      ? <Telephone className='Content__icon' />
                      : contact.icon === 'Cursor'
                        ? <Cursor className='Content__icon' />
                        : null
                  }
                  <a href={contact.link} className='Content__link' style={{marginLeft: 10}}>{contact.text}</a>
                </p>
              )
            })
          }
        </div>
        <Title title='About' />
        <List data={gData.aboutMe} />
        {/* <Title title='Хобби' /> */}
        <div className='Content'>
          {
            gData.hobby.list.map((el, i) => {
              return(
              <span key={i} className='icon'>{el}</span>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Aside