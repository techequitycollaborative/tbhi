import React,{Component} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'
import * as equityStyles from './equity.module.css'

class EquityAccordion extends Component{
    constructor(props) {
        super(props)
            this.state = {
            accordionState: 'closed',
        }
    }

    toggle = (value)=>{
        if (this.state.accordionState == value) {
            this.setState({
                accordionState: 'closed'
            })
        }
        else {
            this.setState({
                accordionState: value
            })
        }
    }


  render() {
    return (
    <div className={equityStyles.container}>
      <Accordion className={equityStyles.content} allowZeroExpanded="true">
        <AccordionItem className={equityStyles.item}>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('1')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '1' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Inaccurate Background Checks
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>Tenant screening includes background checks that may search outdated or <a target="_blank" title="Inaccurate Databases" href="https://themarkup.org/locked-out/2021/01/11/the-obscure-yet-powerful-tenant-screening-industry-is-finally-getting-some-scrutiny">inaccurate databases</a>. In particular, criminal history records can show expunged convictions or unlawful arrests that did not lead to any charges. Eviction records are notoriously inaccurate, which will undoubtedly come into play as the COVID eviction moratoria begin to lift. Landlords may unknowingly make a housing determination based on inaccurate information when they’re only shown the final outcome of an applicant’s third-party assessment, rather than the underlying reports. When this happens, prospective tenants can be barred from housing without justification or <a target="_blank" title="Legal Rights" href="https://www.dfeh.ca.gov/wp-content/uploads/sites/32/2020/04/FairHousingCriminalHistoryFAQ_ENG.pdf">their legal right</a> to an <a target="_blank" title="Individualized Assessment" href="https://www.hud.gov/sites/documents/HUD_OGCGUIDAPPFHASTANDCR.PDF">individualized assessment</a>.</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className={equityStyles.item}>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('2')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '2' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Predatory Ownership Schemes
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>Payment plan, rent-to-own, and home swap homebuying models have historically targeted low-income communities of color with home “ownership” programs that place all of the risk and almost none of the benefit of homeownership onto the borrower. Do rent-to-own and other payment plan homeownership companies put a shine on age-old <a target="_blank" title="Contract-for-deed" href="https://www.npr.org/local/309/2019/05/30/728122642/contract-buying-robbed-black-families-in-chicago-of-billions">contract-for-deed</a> schemes that conned homeowners of color out of wealth-building opportunities for generations? How might those contract terms, such as the potential for eviction based on one late payment, exacerbate housing instability for vulnerable people, historically and disproportionately people of color?</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className={equityStyles.item}>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('3')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '3' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Exclusionary Listings
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>Companies like Redfin restrict listing privileges and white-glove services to owners with homes valued above a certain amount. Because of <a target="_blank" title="Racism in Home Appraisal" href="https://www.npr.org/2021/05/21/998536881/a-black-woman-says-she-had-to-hide-her-race-to-get-a-fair-home-appraisal">longstanding racism in the home appraisal process</a>, this practice can <a target="_blank" title="Limiting Access" href="https://www.jsonline.com/story/news/local/milwaukee/2020/10/29/milwaukee-cited-redfin-lawsuit-alleging-redlining-discrimination/6070558002/">unfairly limit access to tools for homeowners of color</a>, potentially violating the Fair Housing Act.</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className={equityStyles.item}>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('4')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '4' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Hard-Coding Exclusionary Lending
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>Many years of <a target="_blank" title="Exclusionary Lending" href="https://www.theatlantic.com/business/archive/2014/05/the-racist-housing-policy-that-made-your-neighborhood/371439/">exclusionary lending</a> by banks contributed to the housing segregation and racial wealth inequities we see today. If existing housing market data shaped by <a target="_blank" title="Racist Housing Policies" href="https://www.nytimes.com/2020/09/18/business/digital-mortgages.html">racist housing policies</a> are used to train loan origination software, bias will be hard-coded in digital home financing products—the very products that promise to expand access to customers that traditional banks have discriminated against. This may cause first-time buyers to be targeted for <a target="_blank" title="Onerous Loan Terms" href="https://www.theatlantic.com/business/archive/2018/04/rent-to-own-redlining/557588/">onerous loan terms</a> and higher interest rates when navigating these pathways to homeownership. Bias in lending decisions will only exacerbate inequity for those who are not served by traditional financing, and could contribute to regressive homeownership costs.</p>
            </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
    )
  }
}

export default EquityAccordion