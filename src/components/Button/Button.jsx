import React from 'react'
import './Button.css'

const BUTTON_STYLES = {
  transparent: 'button--transparent',
  transparentWithBorder: 'button--transparentWithBorder',
  white: 'button--white',
  gradient: 'button--gradient'
}

function Button({ text, type, isLink, to }) {
  return (
    <button className={`button ${BUTTON_STYLES[type] || ''}`}>
      {isLink
        ? (
          <a href={to}>{text}</a>
        ) : (
          text
        )}
    </button>
  )
}

export default Button
