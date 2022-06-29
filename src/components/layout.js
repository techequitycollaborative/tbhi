import * as React from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as layoutStyles from './layout.module.css'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Landscape from '../components/landscape.js'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layoutStyles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tech, Bias, and Housing Initiative</title>
        <link rel="canonical" href="https://housing.techbias.org/" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://techequitycollaborative.org/wp-content/themes/radicati/dist/images/favicons/favicon-32x32.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L5JR6KH2WN"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L5JR6KH2WN');
        `}</script>
      </Helmet>
      <div className={layoutStyles.panel + ' ' + layoutStyles.flexPanel}>
        <a id="section1"></a>
        <div className={layoutStyles.topContentWrapper}>
          <a target="_blank" href="https://techequitycollaborative.org"><div className={layoutStyles.logo}><StaticImage src="../images/logo.png" alt="Logo" /></div></a>
          <div className={layoutStyles.topContent}>
            <h1>Tech, <span className={layoutStyles.accent}>Bias,</span> and<span className={layoutStyles.titleBreak}><br /></span>Housing Initiative</h1>
            <div className={layoutStyles.introText}>
              <p>Whether you are trying to buy a home, apply for a rental property, or you’re looking for a roommate, there are an endless number of brand new companies and digital products offering to help you do just that. They promise speed, efficiency, and a modern approach to slow and sometimes exclusionary rental or homeownership processes.</p>
              <p>These new companies are venture-backed and digitally-enabled—and they play an increasingly influential role in the economy. From new modes of housing construction to automated home buying, tech-enabled companies promise to scale to massive market share and reap higher valuations along the way.</p>
              <p>As unprecedented capital investment flows into this space, venture-backed companies’ winner-take-all approach to growth has the potential to exacerbate inequality in the housing space. Under these conditions, startups’ disruption mindset creates a risky landscape that could—without ethical frameworks and processes to ensure equitable outcomes—dramatically accelerate racial and economic inequities.</p>
              <p>The Tech, Bias, and Housing Initiative examines these potential harms and biases through comprehensive research, corporate practice, and public policy advocacy.</p>
            </div>
            <div className={layoutStyles.buttonWrapper}><a className={layoutStyles.downloadLink} target="_blank" href="https://techequitycollaborative.org/2022/06/29/sold-to-the-highest-bidder-how-tech-is-cashing-in-on-the-american-dream/"><button className={layoutStyles.downloadButton + ' ' + layoutStyles.tallButton}>Sold to the highest bidder:<br />Read the paper</button></a></div>
            <AnchorLink to="/#section2" title="Down" className={layoutStyles.downLink}>
              <p>What we're building</p>
              <span className={layoutStyles.chevronDown}></span>
            </AnchorLink>
            <div className={layoutStyles.clearFix}></div>
            <div className={layoutStyles.clearFix}></div>
          </div>
        </div>
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
      </div>
      <div className={layoutStyles.panel + ' ' + layoutStyles.flexPanel}>
        <a id="section4"></a>
        <Landscape></Landscape>
      </div>
      <div className={layoutStyles.panel + ' ' + layoutStyles.flexPanel}>
        <a id="section4"></a>
        <div className={layoutStyles.bottomContentWrapper}>
          <div className={layoutStyles.bottomContent}>
            <h2>Areas for Research</h2>
            <p>Our initial landscape assessment revealed harms that these tools and business models could potentially exacerbate—ultimately perpetuating bias and inequity in housing. Over the next year, we will explore these issues in depth in our working papers.</p>
            <div className={layoutStyles.clearFix}></div>
            <div className={layoutStyles.harmsItem}>
              <div className={layoutStyles.harmsIconLg}><StaticImage src="../images/harms1.png" alt="Exclusionary Listings" /></div>
              <h3>Inaccurate Background Checks</h3>
              <p>Tenant screening includes background checks that may search outdated or <a target="_blank" title="Inaccurate Databases" href="https://themarkup.org/locked-out/2021/01/11/the-obscure-yet-powerful-tenant-screening-industry-is-finally-getting-some-scrutiny">inaccurate databases</a>. In particular, criminal history records can show expunged convictions or unlawful arrests that did not lead to any charges. Eviction records are notoriously inaccurate, which will undoubtedly come into play as the COVID eviction moratoria begin to lift. Landlords may unknowingly make a housing determination based on inaccurate information when they’re only shown the final outcome of an applicant’s third-party assessment, rather than the underlying reports. When this happens, prospective tenants can be barred from housing without justification or <a target="_blank" title="Legal Rights" href="https://www.dfeh.ca.gov/wp-content/uploads/sites/32/2020/04/FairHousingCriminalHistoryFAQ_ENG.pdf">their legal right</a> to an <a target="_blank" title="Individualized Assessment" href="https://www.hud.gov/sites/documents/HUD_OGCGUIDAPPFHASTANDCR.PDF">individualized assessment</a>.</p>
            </div>
            <div className={layoutStyles.harmsItem}>
              <div className={layoutStyles.harmsIcon}><StaticImage src="../images/harms2.png" alt="Exclusionary Listings" /></div>
              <h3>Predatory Ownership Schemes</h3>
              <p>Payment plan, rent-to-own, and home swap homebuying models have historically targeted low-income communities of color with home “ownership” programs that place all of the risk and almost none of the benefit of homeownership onto the borrower. Do rent-to-own and other payment plan homeownership companies put a shine on age-old <a target="_blank" title="Contract-for-deed" href="https://www.npr.org/local/309/2019/05/30/728122642/contract-buying-robbed-black-families-in-chicago-of-billions">contract-for-deed</a> schemes that conned homeowners of color out of wealth-building opportunities for generations? How might those contract terms, such as the potential for eviction based on one late payment, exacerbate housing instability for vulnerable people, historically and disproportionately people of color?</p>
            </div>
            <div className={layoutStyles.harmsItem}>
              <div className={layoutStyles.harmsIcon}><StaticImage src="../images/harms3.png" alt="Exclusionary Listings" /></div>
              <h3>Exclusionary Listings</h3>
              <p>Companies like Redfin restrict listing privileges and white-glove services to owners with homes valued above a certain amount. Because of <a target="_blank" title="Racism in Home Appraisal" href="https://www.npr.org/2021/05/21/998536881/a-black-woman-says-she-had-to-hide-her-race-to-get-a-fair-home-appraisal">longstanding racism in the home appraisal process</a>, this practice can <a target="_blank" title="Limiting Access" href="https://www.jsonline.com/story/news/local/milwaukee/2020/10/29/milwaukee-cited-redfin-lawsuit-alleging-redlining-discrimination/6070558002/">unfairly limit access to tools for homeowners of color</a>, potentially violating the Fair Housing Act.</p>
            </div>
            <div className={layoutStyles.harmsItem}>
              <div className={layoutStyles.harmsIconLg}><StaticImage src="../images/harms4.png" alt="Exclusionary Listings" /></div>
              <h3>Hard-Coding Exclusionary Lending</h3>
              <p>Many years of <a target="_blank" title="Exclusionary Lending" href="https://www.theatlantic.com/business/archive/2014/05/the-racist-housing-policy-that-made-your-neighborhood/371439/">exclusionary lending</a> by banks contributed to the housing segregation and racial wealth inequities we see today. If existing housing market data shaped by <a target="_blank" title="Racist Housing Policies" href="https://www.nytimes.com/2020/09/18/business/digital-mortgages.html">racist housing policies</a> are used to train loan origination software, bias will be hard-coded in digital home financing products—the very products that promise to expand access to customers that traditional banks have discriminated against. This may cause first-time buyers to be targeted for <a target="_blank" title="Onerous Loan Terms" href="https://www.theatlantic.com/business/archive/2018/04/rent-to-own-redlining/557588/">onerous loan terms</a> and higher interest rates when navigating these pathways to homeownership. Bias in lending decisions will only exacerbate inequity for those who are not served by traditional financing, and could contribute to regressive homeownership costs.</p>
            </div>
            <div className={layoutStyles.clearFix}></div>
            <div className={layoutStyles.clearFix}></div>
          </div>
        </div>
      </div>
      <div className={layoutStyles.panel + ' ' + layoutStyles.smallPanel}>
        <div class={layoutStyles.footerContent}>
          <div className={layoutStyles.signupSection}>
            <h2>TAKE ACTION</h2>
            <p>Sign up for updates on our Tech, Bias, and Housing research, educational events, and opportunities to get involved.</p>
            <a target="_blank" href="https://techequitycollaborative.org/stay-in-the-loop-with-tech-bias-and-housing/"><button className={layoutStyles.signupButton}>Sign Up</button></a>
          </div>
          <div className={layoutStyles.footer}>
            <p><strong><a target="_blank" href="https://techequitycollaborative.org/privacy-policy/">Privacy Policy</a> | <a target="_blank" href="https://techequitycollaborative.org/code-of-conduct/">Terms of Use</a></strong>&nbsp;&nbsp;&nbsp;<a href="tel:5102397472">Phone: (510) 239-7472‬</a> | <a href="mailto:info@techequitycollaborative.org">Email: info@techequitycollaborative.org</a>&nbsp;&nbsp;&nbsp;&copy; 2021 <strong><a target="_blank" href="https://techequitycollaborative.org">TechEquity Collaborative</a></strong>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout