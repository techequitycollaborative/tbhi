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

        <meta itemprop="name" content="Tech, Bias, and Housing Initiative" />
        <meta itemprop="image" content="https://techequitycollaborative.org/wp-content/uploads/2022/02/Algorithms-Bias-and-Housing-event-600x365.jpg" />
        <meta
          itemprop="description"
          content="The Tech, Bias, and Housing Initiative examines the promise and perils of housing tech; where tech companies are exacerbating inequity and where they can help fix it."
        />

        <meta property="og:title" content="Tech, Bias, and Housing Initiative" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://housing.techbias.org/" />
        <meta property="og:site_name" content="Tech, Bias, and Housing Initiative" />
        <meta property="og:image" content="https://techequitycollaborative.org/wp-content/uploads/2022/02/Algorithms-Bias-and-Housing-event-600x365.jpg" />
        <meta
          property="og:description"
          content="The Tech, Bias, and Housing Initiative examines the promise and perils of housing tech; where tech companies are exacerbating inequity and where they can help fix it."
        />

        <meta name="twitter:title" content="Tech, Bias, and Housing Initiative" />
        <meta name="twitter:image" content="https://techequitycollaborative.org/wp-content/uploads/2022/02/Algorithms-Bias-and-Housing-event-600x365.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="TechEquity Collaborative logo" />
        <meta
          property="twitter:description"
          content="The Tech, Bias, and Housing Initiative examines the promise and perils of housing tech; where tech companies are exacerbating inequity and where they can help fix it."
        />

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
            <div className={layoutStyles.buttonWrapper}><a className={layoutStyles.downloadLink} target="_blank" href=""><button className={layoutStyles.downloadButton + ' ' + layoutStyles.tallButton}>Read the privacy, tech, and housing paper</button></a></div>
            <AnchorLink to="/#section2" title="Down" className={layoutStyles.downLink}>
              <p>What we know</p>
              <span className={layoutStyles.chevronDown}></span>
            </AnchorLink>
            <div className={layoutStyles.clearFix}></div>
            <div className={layoutStyles.clearFix}></div>
          </div>
        </div>
      </div>
      <div className={layoutStyles.panel + ' ' + layoutStyles.flexPanel}>
        <a id="section2"></a>
        <div className={layoutStyles.bottomContentWrapper}>
          <div className={layoutStyles.bottomContent}>
            <h2>What we know</h2>
            <p className={layoutStyles.subtitle}>the key takeaways from a year of research</p>
            <div className={layoutStyles.harmsColumnWrapper}>
              <div className={layoutStyles.harmsColumn}>
                <div className={layoutStyles.harmsIcon}><StaticImage src="../images/alternative_financing.svg" alt="Exclusionary Listings" /></div>
                <div className={layoutStyles.harmsColumnContent}>
                  <h3>Alternative financing pitfalls</h3>
                  <p>Alternative paths to homeownership like rent-to-own echo discriminatory and predatory practices of the past.</p>
                </div>
              </div>
              <div className={layoutStyles.harmsColumn}>
                <div className={layoutStyles.harmsIcon}><StaticImage src="../images/tech_bias_in_screening.svg" alt="Exclusionary Listings" /></div>
                <div className={layoutStyles.harmsColumnContent}>
                  <h3>Tech bias in screening</h3>
                  <p>Algorithms used to determine who gets housing are opaque, predictive, and frequently based on inaccurate data.</p>
                </div>
              </div>
            </div>
            <div className={layoutStyles.harmsColumnWrapper}>
              <div className={layoutStyles.harmsColumn}>
                <div className={layoutStyles.harmsIcon}><StaticImage src="../images/housing_corporatization.svg" alt="Exclusionary Listings" /></div>
                <div className={layoutStyles.harmsColumnContent}>
                  <h3>Housing corporatization</h3>
                  <p>Digital property management tools are enabling companies to acquire and manage vast portfolios of single-family properties, often optimizing profit at the renters’ expense.</p>
                </div>
              </div>
              <div className={layoutStyles.harmsColumn}>
                <div className={layoutStyles.harmsIcon}><StaticImage src="../images/venture_capital.svg" alt="Exclusionary Listings" /></div>
                <div className={layoutStyles.harmsColumnContent}>
                  <h3>Venture capital pressures</h3>
                  <p>Proptech brings in venture capital, whose model pressures companies to sacrifice what’s in the best interest of renters and potential homeowners to provide maximum returns to investors.</p>
                </div>
              </div>
            </div>
            <div className={layoutStyles.buttonWrapper}><a className={layoutStyles.downloadLink} target="_blank" href="https://techequitycollaborative.org/2023/04/25/the-promises-and-perils-of-residential-proptech-year-1-summary-report/"><button className={layoutStyles.button}>Read the summary report</button></a></div>
            <div className={layoutStyles.clearFix}></div>
            <div className={layoutStyles.clearFix}></div>
          </div>
        </div>
      </div>
      <div className={layoutStyles.panel + ' ' + layoutStyles.smallPanel}>
        <a id="section3"></a>
        <div className={layoutStyles.buildingContentWrapper}>
          <div className={layoutStyles.buildingContent}>
            <h2>What we can do</h2>
            <p className={layoutStyles.subtitle}>an ethical practice guide for proptech companies</p>
            <p>Proptech companies can adopt business practices today that reduce (and even reverse) existing bias and inequity. The Ethical Practice Guide offers a framework to ensure their work helps end our housing crisis, not make it worse.</p>
            <div className={layoutStyles.columnWrapper}>
              <div className={layoutStyles.column}>
                <h3>1. education</h3>
                <p className={layoutStyles.columnContent}>Implement a company-wide education program that highlights the history and context of housing inequity and explores the way your company fits into that story</p>
              </div>
              <div className={layoutStyles.column}>
                <h3>2. testing</h3>
                <p className={layoutStyles.columnContent}>Utilize a data minimization framework and discrimination testing to proactively reduce harm and measure impact</p>
              </div>
              <div className={layoutStyles.column}>
                <h3>3. employee engagement</h3>
                <p className={layoutStyles.columnContent}>Provide clear, actionable pathways for employees to raise ideas, concerns, and opportunities for improvement</p>
              </div>
            </div>
            <div className={layoutStyles.columnWrapper}>
              <div className={layoutStyles.column}>
                <h3>4. transparency</h3>
                <p className={layoutStyles.columnContent}>Provide transparent and easy-to-understand information for users and customers</p>
              </div>
              <div className={layoutStyles.column}>
                <h3>5. recourse</h3>
                <p className={layoutStyles.columnContent}>Provide opportunities for customers or stakeholders who feel like they’ve been harmed to seek recourse</p>
              </div>
              <div className={layoutStyles.column}>
                <h3>6. community engagement</h3>
                <p className={layoutStyles.columnContent}>Engage in the broader societal conversation about housing—and use your position to advocate for change</p>
              </div>
            </div>
            <div className={layoutStyles.buttonWrapper}><a className={layoutStyles.downloadLink} target="_blank" href="https://techequitycollaborative.org/2023/04/25/residential-proptech-ethical-practice-guide/"><button className={layoutStyles.button + ' ' + layoutStyles.buttonDark}>Download the guide</button></a></div>
          </div>
        </div>
      </div>
      <div className={layoutStyles.panel + ' ' + layoutStyles.smallPanel}>
        <a id="section4"></a>
        <div className={layoutStyles.goingContentWrapper}>
          <div className={layoutStyles.goingContent}>
            <h2>Where we're going</h2>
            <p className={layoutStyles.subtitle}>the initiative focus for the coming years</p>
            <div className={layoutStyles.goingColumnWrapper}>
              <div className={layoutStyles.goingColumn}>
                <h3>policy advocacy</h3>
                <p className={layoutStyles.goingColumnContent}>Working closely with partners from across the housing ecosystem, we’ll advance public policy that protects against the worst potential harms of Proptech. We’re starting by investigating tenant screening tools to understand whether and how they may result in discrimination. We’ll use this research to craft strategic, targeted policy solutions.</p>
              </div>
              <div className={layoutStyles.goingColumn}>
                <h3>corporate practice</h3>
                <p className={layoutStyles.goingColumnContent}>Over the course of our research we’ve connected with Proptech founders, executives, and employees who express a desire to develop better ethical practices as they grow their companies. We have outlined a practice guide that all Proptech companies can adopt to mitigate harm and we’ll provide resources and guidance to those that take action to implement it.</p>
              </div>
              <div className={layoutStyles.goingColumn}>
                <h3>continued research</h3>
                <p className={layoutStyles.goingColumnContent}>The Proptech sector is extremely fluid, and the market dynamics are changing quickly. We’ll continue to follow the space and produce reports as new areas of interest or concern emerge. We’re currently tracking the rise of crypto and blockchain in the Proptech sector and plan to release a briefing on the topic in mid-2023.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={layoutStyles.panel + ' ' + layoutStyles.smallPanel}>
          <a id="section5"></a>
          <div className={layoutStyles.paperContent}>
            <div className={layoutStyles.paperContentTitleWrapper}>
              <h2>Our research</h2>
              <p className={layoutStyles.subtitle}>Read our research papers for a deeper dive</p>
            </div>
            <div className={layoutStyles.paperWrapper}>
              <div className={layoutStyles.paperPanelWrapper}>
                <a className={layoutStyles.moreLink} target="_blank" href="https://techequitycollaborative.org/2022/02/23/tech-bias-and-housing-initiative-tenant-screening/">
                  <div className={layoutStyles.paperPanel}>
                    <div className={layoutStyles.paperPanelContent}>
                      <h2>Tech bias in tenant screening</h2>
                      <p>It’s time to take a closer look at tenant screening tools that can be the gateway to rental housing and the impact they have on housing accessibility.</p>
                      <div className={layoutStyles.moreButton}>
                        More <StaticImage className={layoutStyles.moreImage} src="../images/right.svg" alt="More" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className={layoutStyles.paperPanelWrapper}>
                <a className={layoutStyles.moreLink} target="_blank" href="https://techequitycollaborative.org/2022/11/01/rent-to-own-the-american-dream-paper/">
                  <div className={layoutStyles.paperPanel + ' ' + layoutStyles.paperPanelSecond}>
                    <div className={layoutStyles.paperPanelContent}>
                      <h2>Rent to own the American dream</h2>
                      <p>Aspiring homeowners are turning to alternative home financing options such as rent-to-own. But this model can be just as perilous as it is promising.</p>
                      <div className={layoutStyles.moreButton}>
                        More <StaticImage className={layoutStyles.moreImage} src="../images/right.svg" alt="More" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className={layoutStyles.paperPanelWrapper}>
                <a className={layoutStyles.moreLink} target="_blank" href="https://techequitycollaborative.org/2022/06/29/sold-to-the-highest-bidder-how-tech-is-cashing-in-on-the-american-dream/">
                  <div className={layoutStyles.paperPanel}>
                    <div className={layoutStyles.paperPanelContent}>
                      <h2>Sold to the highest bidder</h2>
                      <p>Tech is enabling an emerging new class of corporate landlords that exacerbate harm and take advantage of increasingly desperate renters and would-be homeowners.</p>
                      <div className={layoutStyles.moreButton}>
                        More <StaticImage className={layoutStyles.moreImage} src="../images/right.svg" alt="More" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className={layoutStyles.paperPanelWrapper}>
                <a className={layoutStyles.moreLink} target="_blank" href="">
                  <div className={layoutStyles.paperPanel + ' ' + layoutStyles.paperPanelLast}>
                    <div className={layoutStyles.paperPanelContent}>
                      <h2>Privacy, tech, and fair housing</h2>
                      <p>Algorithms and data are playing an increasing role in housing. We need to protect privacy and the right to housing in an increasingly digital world.</p>
                      <div className={layoutStyles.moreButton}>
                        More <StaticImage className={layoutStyles.moreImage} src="../images/right.svg" alt="More" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={layoutStyles.panel + ' ' + layoutStyles.smallPanel}>
        <div className={layoutStyles.footerContent}>
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