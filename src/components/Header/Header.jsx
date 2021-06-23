import React, { useState, useEffect, useRef } from 'react'
import Button from '../Button/Button';
import logo from '../../assets/logo.svg'
import { ReactComponent as HamburgerMenu } from '../../assets/icon-hamburger.svg'
import { ReactComponent as CloseMenu } from '../../assets/icon-close.svg'
import { ReactComponent as Arrow } from '../../assets/icon-arrow-dark.svg'
import navigationContent from '../../content/navigationContent.json'
import './Header.css';

function Header() {
  const headerRef = useRef()
  const [background, setBackground] = useState(false)
  const [menuState, setMenuState] = useState(false)
  const [menuSection, setMenuSection] = useState('')
  useEffect(() => {
    window.addEventListener('scroll', changeBackgound)
    return () => {
      window.removeEventListener('scroll', changeBackgound)
    }
  }, [])

  const changeBackgound = () => {
    if (window.pageYOffset > headerRef.current.offsetTop) {
      setBackground(true)
    } else {
      setBackground(false)
    }
  }

  const handleMenuState = () => setMenuState(prev => !prev)

  const handleMenuSection = (section) => setMenuSection(prev => (
    prev === section ? '' : section
  ))

  const mobileMenu = () => (
    <div className='header__mobile-menu'>
      <nav className='header__mobile-menu-nav'>
        <ul className='header__mobile-menu-list'>
          {navigationContent.navigation.map(content => (
            <li key={content.section} className='header__mobile-menu-sections-list'>
              <button
                className={`header__mobile-menu-section ${menuSection === content.section ? 'header__mobile-menu-section--selected' : ''}`}
                onClick={() => handleMenuSection(content.section)}
              >
                {content.section}
                <Arrow className={`header__mobile-menu-arrow ${menuSection === content.section && 'header__mobile-menu-arrow--selected'}`} />
              </button>
              {menuSection === content.section && (
                <div className='header__mobile-menu-links'>
                  <ul className='header__mobile-menu-links-container'>
                    {content.anchors.map(anchor => (
                      <li key={anchor.title} className='header__mobile-menu-link-item'>
                        <a className='header__mobile-menu-link' href={anchor.url}>{anchor.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <Button text='Login' type='transparent' />
      <Button text='Sign Up' type='gradient' />
    </div>
  )

  return (
    <header ref={headerRef} className={`header ${background && 'header--background'}`}>
      <img src={logo} alt="Blogr logo" />
      {menuState
        ? (
          <>
            <CloseMenu className='header__mobile-menu-toggle' onClick={handleMenuState} />
            {mobileMenu()}
          </>
        )
        : (
          <HamburgerMenu className='header__mobile-menu-toggle' onClick={handleMenuState} />
        )}
    </header>
  )
}

export default Header
