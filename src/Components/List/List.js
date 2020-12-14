import React from 'react'
import './List.scss'

const List = props => {
  return (
    <div className='List'>
      {
        props.data && props.data.title
          ? <>
            <p className='List__title'>
              <a href={props.data && props.data.site} target='_blank' rel='noreferrer'>
                <strong><mark>{props.data && props.data.title}</mark></strong>
              </a>&nbsp;
                -&nbsp;{props.data && props.data.position}
            </p>
            <p className='List__date'>{props.data && props.data.date}</p>
          </>
          : null
      }
      <ul className='List__list'>
        {
          props.data && !props.isTwoColumn && props.data.list.map((item, index) => {
            return (
              <li className='List__item' key={index}>
                {typeof item === 'string' ? item : <a href={item.link} target="_blank" rel='noreferrer'>{item.text}</a>}
              </li>
            )
          })
        }
      </ul>
      {
        props.data && props.isTwoColumn
          ? <div style={{ display: 'flex', }}>
            <ul className='List__list' style={{ width: '50%' }}>
              {props.data && props.isTwoColumn && props.data.list.slice(0, Math.ceil(props.data.list.length / 2)).map((item, index) => {
                return (
                  <li className='List__item' key={index}>{item}</li>
                )
              })}
            </ul>
            <ul className='List__list'>
              {props.data && props.isTwoColumn && props.data.list.slice(Math.ceil(props.data.list.length / 2)).map((item, index) => {
                return (
                  <li className='List__item' key={index}>{item}</li>
                )
              })}
            </ul>
          </div>
          : null
      }
    </div>
  )
}

export default List