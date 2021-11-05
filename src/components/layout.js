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
          <a href="https://techequitycollaborative.org"><div className={layoutStyles.logo}><StaticImage src="../images/logo.png" alt="Logo" /></div></a>
          <div className={layoutStyles.topContent}>
            <h1>Tech, Bias, and Housing Initiative</h1>
            <h2>[TBD Project subtitle. TBD Project subtitle.]</h2>
            <p>Project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description.</p>
            <p>Project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description project description.</p>
            <h3>Housing tech is predicted to be a $XX billion dollar business by XXXX.</h3>
          </div>
          <AnchorLink to="/#section2" title="section2" className={layoutStyles.downLink}>
            <p><span className={layoutStyles.buttonText}>Explore the Company Landscape</span><StaticImage src="../images/right.svg" alt="Down" /></p>
          </AnchorLink>
        </HeaderBackground>
      </div>
      <div className={layoutStyles.panel}>
        <a id="section2"></a>
        <Landscape></Landscape>
        <AnchorLink to="/#section3" title="section3" className={layoutStyles.downLink + ' ' + layoutStyles.downLink2}>
          <p><span>What's Next?</span></p>
        </AnchorLink>
      </div>
      <div className={layoutStyles.panel}>
        <a id="section3"></a>
        <FooterBackground>
          <div className={layoutStyles.bottomContent}>
            <h1>Equity Issues</h1>
            <p>Description of equity issues description of equity issues description of equity issues description of equity issues description of equity issues description of equity issues description of equity issues description of equity issues description of equity issues. Here are some of the equity issues we’re tracking:</p>
            <EquityAccordion></EquityAccordion>
          </div>
          <div className={layoutStyles.footer}>
            <h1>Take Action</h1>
            <CTAs></CTAs>
            <p><strong><a href="https://techequitycollaborative.org/privacy-policy/">Privacy Policy</a> | <a href="https://techequitycollaborative.org/code-of-conduct/">Terms of Use</a></strong>&nbsp;&nbsp;&nbsp;<a href="tel:5102397472">Phone: (510) 239-7472‬</a> | <a href="mailto:info@techequitycollaborative.org">Email: info@techequitycollaborative.org</a>&nbsp;&nbsp;&nbsp;&copy;2021 TechEquity Collaborative. All Rights Reserved.</p>
          </div>
        </FooterBackground>
      </div>
    </div>
  )
}

export default Layout