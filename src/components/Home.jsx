import React from 'react';
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Testimonilas from './Testimonials'
import Contact from './Contact'

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <div className="container">
        <hr id="about"/>
        <About />
        <hr id="services"/>
        <Services />
	      <hr id="testimonials"/>
      </div>
      <Testimonilas />
      <div className="container">
	      <hr id="contact"/>
        <Contact />
      </div>
    </React.Fragment>
  )
}

export default Home
