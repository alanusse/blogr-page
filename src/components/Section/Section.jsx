import React from 'react'
import TextBlock from '../TextBlock/TextBlock'
import './Section.css'

function Section({ title, image, textBlocks, highlight, backgroundPattern }) {
  return (
    <section className={`section ${highlight && 'section--highlight'}`}>
      {title && <h2 className='section__title'>{title}</h2>}
      <div
        className='section__contentContainer'>
        <img
          className='section__image'
          src={process.env.PUBLIC_URL + image.mobile}
          alt={title || textBlocks[0].title}
        />
        <div className='section__textsContainer'>
          {textBlocks.map(block => (
            <TextBlock
              key={block.title}
              title={block.title}
              text={block.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section
