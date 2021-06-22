import React from 'react'
import Button from '../Button/Button';
import './Hero.css';

function Hero() {
  return (
    <section className='hero'>
      <h1 className='hero__title'>A modern publishing platform</h1>
      <h2 className='hero__subtitle'>Grow your audience and build your online brand</h2>
      <div className='hero__buttonsContainer'>
        <Button type='white' text='Start for Free' />
        <Button type='transparentWithBorder' text='Learn More' />
      </div>
    </section>
  )
}

export default Hero
