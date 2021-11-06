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
            <p>Today, TechEquity Collaborative is announcing the launch of our Tech, Bias, and Housing Initiative. The goal of the initiative is to examine the promise and perils of housing technology, identify areas where tech companies may exacerbate inequities, and advance policies that will ensure twenty-first-century housing innovations do not carry with them the racial injustices of the past. We will work with advocates, community members, and companies in the housing space who recognize the need to build ethically and mitigate potential harms through corporate practice.</p>
            <p>Whether you are trying to buy a home, apply for a rental property, or look for a roommate—there are dozens upon dozens of new companies offering to help you do just that— promising speed, efficiency, and a modern approach to woefully slow and sometimes exclusionary opportunities to rent or own a home.</p>
            <p>These companies—venture-backed housing technology firms—play an increasingly influential role in the economy. From new modes of housing construction to automating home buying, these companies promise to scale to massive market share and reap higher valuations along the way.</p>
          </div>
          <AnchorLink to="/#section2" title="section2" className={layoutStyles.downLink}>
            <p><span className={layoutStyles.buttonText}>Explore the Company Landscape</span><StaticImage className={layoutStyles.image} src="../images/right.svg" alt="Down" /></p>
          </AnchorLink>
        </HeaderBackground>
      </div>
      <div className={layoutStyles.panel}>
        <a id="section2"></a>
        <Landscape></Landscape>
        <AnchorLink to="/#section3" title="section3" className={layoutStyles.downLink + ' ' + layoutStyles.downLink2}>
          <p><span className={layoutStyles.buttonText}>See the Initial Takeaways</span><StaticImage className={layoutStyles.image} src="../images/right.svg" alt="Down" /></p>
        </AnchorLink>
      </div>
      <div className={layoutStyles.panel}>
        <a id="section3"></a>
        <FooterBackground>
          <div className={layoutStyles.bottomContent}>
            <h1>Initial Takeaways</h1>
            <p>Below are the initial takeaways from our landscape analysis that we will explore further in a series of working papers throughout the next year:</p>
            <EquityAccordion></EquityAccordion>
          </div>
          <CTAs></CTAs>
          <div className={layoutStyles.footer}>
            <p><strong><a href="https://techequitycollaborative.org/privacy-policy/">Privacy Policy</a> | <a href="https://techequitycollaborative.org/code-of-conduct/">Terms of Use</a></strong>&nbsp;&nbsp;&nbsp;<a href="tel:5102397472">Phone: (510) 239-7472‬</a> | <a href="mailto:info@techequitycollaborative.org">Email: info@techequitycollaborative.org</a>&nbsp;&nbsp;&nbsp;&copy;2021 TechEquity Collaborative. All Rights Reserved.</p>
          </div>
        </FooterBackground>
      </div>
    </div>
  )
}

export default Layout