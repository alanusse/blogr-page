import React from 'react'
import './TextBlock.css'

function TextBlock({ title, text }) {
  return (
    <div className='textBlock'>
      <h3 className='textBlock__title'>{title}</h3>
      <p className='textBlock__text'>{text}</p>
    </div>
  )
}

export default TextBlock
