import React from 'react'
import { ReactComponent as Logo} from '../../assets/logo.svg'
import navigationContent from '../../content/navigationContent.json'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <Logo className='footer__logo' />
      <nav className='footer__navigation'>
        <ul className='footer__navigation-list'>
          {navigationContent.navigation.map(content => (
            <li key={content.section} className='footer__navigation-item'>
              <p className='footer__navigation-title'>{content.section}</p>
              {content.anchors.map(anchor => (
                <a
                  key={anchor.title}
                  className='footer__navigation-anchor'
                  href={anchor.url}>{anchor.title}
                </a>
              ))}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
