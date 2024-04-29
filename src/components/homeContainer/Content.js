import React from 'react'
import contentStyle from '../../css/content.module.css'
import Slide from './Slide';
import CardContainer from './CardContainer';

const Content = () => {
  return (
    <div className={contentStyle.content}>
      <Slide/>
      <CardContainer/>
    </div>
  )
}

export default Content