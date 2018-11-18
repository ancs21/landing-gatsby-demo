import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import Header from '../components/header'
import Jumbotron from '../components/jumpotron'
import Clients from '../components/clients'
import Features from '../components/features'
import Testimonials from '../components/testimonials'
import Pricing from '../components/pricing'
import Footer from '../components/footer'

class IndexPage extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal').default
      const sr = (window.sr = ScrollReveal())
      sr.reveal('.hero-shapes', {
        duration: 1000,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'right',
      })

      sr.reveal('.header-sun', {
        delay: 200,
        duration: 1000,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'top',
      })

      sr.reveal('.hero-media', {
        delay: 200,
        duration: 1000,
        rotate: {
          y: 50,
        },
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      })

      sr.reveal('.feature-extended-image', {
        duration: 600,
        scale: 0.9,
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        viewFactor: 0.5,
      })

      sr.reveal('.testimonial, .pricing-table', {
        duration: 600,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 100,
        origin: 'bottom',
        viewFactor: 0.5,
      })
    }
  }
  render() {
    return (
      <Layout>
        <Header />
        <main>
          <Jumbotron />
          <Clients />
          <Features />
          <Testimonials />
          <Pricing />
          <Footer />
        </main>
      </Layout>
    )
  }
}

export default IndexPage
