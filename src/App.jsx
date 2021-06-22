import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import sectionsContent from './content/sectionsContent.json'
import './App.css'
import './normalize.css'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      { sectionsContent.sections.map(section => (
        <Section
          key={section.id}
          title={section.title}
          image={section.image}
          textBlocks={section.textBlocks}
          highlight={section.highlight}
          backgroundPattern={section.backgroundPattern}
        />
      )) }
      <Footer />
    </div>
  )
}

export default App