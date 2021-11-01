import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as layoutStyles from './layout.module.css'
import HeaderBackground from '../components/header-background'
import FooterBackground from '../components/footer-background'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Landscape from '../components/landscape.js'
import EquityAccordion from '../components/equity.js'
import CTAs from '../components/ctas.js'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.panel}>
        <HeaderBackground>
          <div className={layoutStyles.topContent}>
            <h1>Tech, Bias, and Housing Initiative</h1>
            <h2>[TBD Project subtitle. TBD Project subtitle. TBD Project subtitle.]</h2>
            <p>Project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description.</p>
            <p>Project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description.</p>
            <h3>Housing tech is predicted to be a $XX billion dollar business by XXXX.</h3>
          </div>
          <AnchorLink to="/#section2" title="section2" className={layoutStyles.downLink}>
            <p><span>Explore the Company Landscape</span></p>
            <div className={layoutStyles.right}><StaticImage src="../images/right.svg" alt="Down" /></div>
          </AnchorLink>
        </HeaderBackground>
      </div>
      <div className={layoutStyles.panel}>
        <a id="section2"></a>
        <Landscape></Landscape>
      </div>
      <div className={layoutStyles.panel}>
        <FooterBackground>
          <div className={layoutStyles.bottomContent}>
            <h1>Equity Issues</h1>
            <p>Description of equity issues description of equity issues description of equity issues description of equity issues description of equity issues description of equity issues description of equity issues description of equity issues description of equity issues. Here are some of the equity issues we’re tracking:</p>
            <EquityAccordion></EquityAccordion>
          </div>
          <div className={layoutStyles.footer}>
            <h1>Take Action</h1>
            <CTAs></CTAs>
            <p>&copy;2021 TechEquity Collaborative. <a href="https://techequitycollaborative.org">About us.</a></p>
          </div>
        </FooterBackground>
      </div>
    </div>
  )
}

export default Layout