import React from 'react';
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Testimonilas from './Testimonials'
import Contact from './Contact'
import Companies from './Companies'

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <div className="container">
        <hr id="services"/>
        <Services />
        <hr id="about"/>
        <About />
      </div>
      <hr id="testimonials"/>
      <Testimonilas />
        <hr id="companies"/>
      < Companies />
      <div className="container">
	      <hr id="contact"/>
        <Contact />
      </div>
    </React.Fragment>
  )
}

export default Home
