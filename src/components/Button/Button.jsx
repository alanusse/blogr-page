import React from 'react'
import './Button.css'

const BUTTON_STYLES = {
  transparentWithBorder: 'button__transparentWithBorder',
  white: 'button__white',
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
