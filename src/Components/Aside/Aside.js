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
        <Title title='Цель' />
        <div className='Content'>
          {gData.goals.map((goal, i) => <p className='Content__text' key={i}>{goal}</p>)}
        </div>
        <Title title='Контакты' />
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
        <Title title='Обо мне' />
        <List data={gData.aboutMe} />
        <Title title='Хобби' />
        {/* <List data={gData.hobby} /> */}
        <div className='Content'>
          {
            gData.hobby.list.map((el, i) => {
              return(
              <p key={i} className='Content__text'>{el}</p>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Aside