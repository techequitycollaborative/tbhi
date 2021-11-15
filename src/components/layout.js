import * as React from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as layoutStyles from './layout.module.css'
import HeaderBackground from '../components/header-background'
import FooterBackground from '../components/footer-background'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Landscape from '../components/landscape.js'
import EquityAccordion from '../components/equity.js'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layoutStyles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tech, Bias, and Housing Initiative</title>
        <link rel="canonical" href="https://housing.techbias.org/" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://techequitycollaborative.org/wp-content/themes/radicati/dist/images/favicons/favicon-32x32.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-103596359-3"></script>
        <script type="application/ld+json">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', 'UA-103596359-3');
        `}</script>
      </Helmet>
      <div className={layoutStyles.panel + ' ' + layoutStyles.flexPanel}>
        <a id="section1"></a>
        <HeaderBackground>
          <div className={layoutStyles.topContentWrapper}>
            <a target="_blank" href="https://techequitycollaborative.org"><div className={layoutStyles.logo}><StaticImage src="../images/logo.png" alt="Logo" /></div></a>
            <div className={layoutStyles.topContent}>
              <h1>Tech, Bias, and Housing Initiative</h1>
              <p>Whether you are trying to buy a home, apply for a rental property, or you’re looking for a roommate, there are an endless number of brand new companies and digital products offering to help you do just that. They promise speed, efficiency, and a modern approach to slow and sometimes exclusionary rental or homeownership processes.</p>
              <p>These new companies are venture-backed and digitally-enabled—and they play an increasingly influential role in the economy. From new modes of housing construction to automated home buying, tech-enabled companies promise to scale to massive market share and reap higher valuations along the way.</p>
              <p>As unprecedented capital investment flows into this space, venture-backed companies’ winner-take-all approach to growth has the potential to exacerbate inequality in the housing space. Under these conditions, startups’ disruption mindset creates a risky landscape that could—without ethical frameworks and processes to ensure equitable outcomes—dramatically accelerate racial and economic inequities.</p>
              <p>The Tech, Bias, and Housing Initiative examines these potential harms and biases through comprehensive research, corporate practice, and public policy advocacy.</p>
            </div>
            <div className={layoutStyles.clearFix}></div>
          </div>

          <div className={layoutStyles.navWrapper}>
            <AnchorLink to="/#section2" title="Down" className={layoutStyles.downLink}>
              <div className={layoutStyles.chevronWrapper}><span className={layoutStyles.chevronDown}></span></div>
            </AnchorLink>
          </div>
        </HeaderBackground>
      </div>
      <div className={layoutStyles.panel + ' ' + layoutStyles.smallPanel}>
        <a id="section2"></a>
        <div className={layoutStyles.buildingContent}>
          <h2>What We're Building</h2>
          <p>The Tech, Bias, and Housing Initiative has three main components:</p>
          <div className={layoutStyles.columnWrapper}>
            <div className={layoutStyles.column}>
              <h3>Research</h3>
              <p className={layoutStyles.columnContent}>We will shed light on spaces where these new classes of companies could exacerbate—or mitigate—racial bias in the housing market.</p>
            </div>
            <div className={layoutStyles.column}>
              <h3>Policy</h3>
              <p className={layoutStyles.columnContent}>In close partnership with other organizations in the housing justice movement, we will develop and advocate for public policy that addresses the harms we identify through our research.</p>
            </div>
            <div className={layoutStyles.column}>
              <h3>Corporate Practice</h3>
              <p className={layoutStyles.columnContent}>We will work with companies who operate in this ecosystem to develop practices, standards, programming, and tools that can help prevent the types of harm identified in our research.</p>
            </div>
          </div>
        </div>
        <div className={layoutStyles.navWrapper}>
          <AnchorLink to="/#section1" title="Up" className={layoutStyles.downLink}>
            <div className={layoutStyles.chevronWrapper}><span className={layoutStyles.chevronUp}></span></div>
          </AnchorLink>
          <AnchorLink to="/#section3" title="Down" className={layoutStyles.downLink}>
            <div className={layoutStyles.chevronWrapper}><span className={layoutStyles.chevronDown}></span></div>
          </AnchorLink>
        </div>
      </div>
      <div className={layoutStyles.panel + ' ' + layoutStyles.flexPanel}>
        <a id="section3"></a>
        <Landscape></Landscape>

        <div className={layoutStyles.navWrapper}>
          <AnchorLink to="/#section2" title="Up" className={layoutStyles.downLink}>
            <div className={layoutStyles.chevronWrapper}><span className={layoutStyles.chevronUp}></span></div>
          </AnchorLink>
          <AnchorLink to="/#section4" title="Down" className={layoutStyles.downLink}>
            <div className={layoutStyles.chevronWrapper}><span className={layoutStyles.chevronDown}></span></div>
          </AnchorLink>
        </div>
      </div>
      <div className={layoutStyles.panel + ' ' + layoutStyles.flexPanel}>
        <a id="section4"></a>
        <div className={layoutStyles.bottomContentWrapper}>
          <FooterBackground>
            <div className={layoutStyles.bottomContent}>
              <h2>Potential Harms</h2>
              <p>Our initial landscape assessment revealed harms that these tools and business models could potentially exacerbate—ultimately perpetuating bias and inequity in housing. Over the next year, we will explore these issues in depth in our working papers.</p>
              <EquityAccordion></EquityAccordion>
              <div className={layoutStyles.signupSection}>
                <p>Sign up for updates on our Tech, Bias, and Housing research, educational events, and opportunities to get involved.</p>
                <a target="_blank" href="https://techequitycollaborative.org/stay-in-the-loop-with-tech-bias-and-housing/"><button className={layoutStyles.signupButton}>Sign Up</button></a>
              </div>
            </div>
            <div className={layoutStyles.clearFix}></div>
            <div className={layoutStyles.clearFix}></div>
            <div className={layoutStyles.clearFix}></div>
            <div className={layoutStyles.footer}>
              <p><strong><a target="_blank" href="https://techequitycollaborative.org/privacy-policy/">Privacy Policy</a> | <a target="_blank" href="https://techequitycollaborative.org/code-of-conduct/">Terms of Use</a></strong>&nbsp;&nbsp;&nbsp;<a href="tel:5102397472">Phone: (510) 239-7472‬</a> | <a href="mailto:info@techequitycollaborative.org">Email: info@techequitycollaborative.org</a>&nbsp;&nbsp;&nbsp;&copy; 2021 <strong><a target="_blank" href="https://techequitycollaborative.org">TechEquity Collaborative</a></strong>. All Rights Reserved.</p>
            </div>
          </FooterBackground>
        </div>

        <div className={layoutStyles.navWrapper}>
          <AnchorLink to="/#section3" title="Up" className={layoutStyles.downLink}>
            <div className={layoutStyles.chevronWrapper}><span className={layoutStyles.chevronUp}></span></div>
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Layout