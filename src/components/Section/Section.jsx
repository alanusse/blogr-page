import React from 'react'
import TextBlock from '../TextBlock/TextBlock'
import './Section.css'

function Section({ title, image, textBlocks, highlight }) {
  return (
    <section className={`section ${highlight && 'section--highlight'}`}>
      {title && <h2 className='section__title'>{title}</h2>}
      <div
        className={`section__contentContainer ${image.imagePosition === 'right' && 'section__contentContainer--reverse'}`}>
        <img
          className='section__image section__image--mobile'
          src={process.env.PUBLIC_URL + image.mobile}
          alt={title || textBlocks[0].title}
        />
        <img
          className='section__image section__image--desktop'
          src={process.env.PUBLIC_URL + image.desktop}
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
