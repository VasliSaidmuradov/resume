import React from 'react'
import './MainContent.scss'
import Title from '../Title/Title'
import List from '../List/List'
import gData from '../../gData'

const MainContent = props => {

  return (
    <div className="MainContent">
      <Title title='Skills' />
      <List data={gData.skills} isTwoColumn={true} />
      <Title title='Опыт работы' />
      <div>
        {gData.experience.list.map((el, i) => <List data={el} key={i} />)}
      </div>
      <Title title='Образование' />
      <div>
        {gData.education.list.map((el, i) => <List data={el} key={i} />)}
      </div>
    </div>
  )
}

export default MainContent