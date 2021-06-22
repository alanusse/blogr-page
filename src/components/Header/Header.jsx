import React, { useState, useEffect, useRef } from 'react'
import logo from '../../assets/logo.svg'
import { ReactComponent as HamburgerMenu } from '../../assets/icon-hamburger.svg';
import './Header.css';

function Header() {
  const headerRef = useRef()
  const [background, setBackground] = useState(false)
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

  return (
    <header ref={headerRef} className={`header ${background && 'header--background'}`}>
      <img src={logo} alt="Blogr logo" />
      <HamburgerMenu />
    </header>
  )
}

export default Header
