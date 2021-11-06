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
        this.setState({
            accordionState: value
        })
    }


  render() {
    return (
    <div className={equityStyles.container}>
      <Accordion className={equityStyles.content}>
        <AccordionItem>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('1')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '1' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Unfair tenant screening
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>Tenant screening includes background checks that may search outdated or inaccurate databases. In particular, criminal history records can show expunged convictions or unlawful arrests that did not lead to any charges. When landlords rely on assessments based on inaccurate information, prospective tenants can be barred from housing without their legal right to an Individualized Assessment.</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('2')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '2' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Predatory payment plan models
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>Payment plan, rent-to-own or home swap home-buying models include fine print that can end up costing the homebuyer thousands more than traditional lending recipients pay for their homes. Home “owners” can be at risk of losing their homes if they miss one payment, and have few protections for defaulting on the loan. Do rent-to-own and other innovative homeownership replicate age-old contract-for-deed schemes that exploited Black families and barred them from wealth-building opportunities for generations?</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('3')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '3' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Restricting listing privileges
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>Restricting listing privileges or ‘white glove’ services for homes valued under a certain price could result in racial steering and violations of the Fair Housing Act. iBuying and Multiple Listing Services (MLS) platforms consolidate intermediaries, products, and services. What are the equity implications of these platforms that have millions of users?</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('4')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '4' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Reinforcement of historical exclusionary lending
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>Many years of exclusionary lending by banks contribute to the housing segregation and racial wealth inequity we see today. If current housing market data shaped by racist housing policies are used to train loan origination software, bias will be hard-coded into product deployment and decision-making processes.</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('5')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '5' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Onerous loan terms and interest rates
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>Digital housing and loan products expand access to customers who have been discriminated against by traditional lending or financial institutions. While offering a pathway into homeownership is promising, these first-time homeowners may fall prey to onerous loan terms and higher interest rates. Could new home financing products worsen income inequality for those who cannot access traditional credit for those who have the least means to pay more?</p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('6')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '6' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Shared living catering to single, high-income professionals
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>As shared living properties age and depreciate, they are not suitable for affordable housing because they are configured for niche renters: often single, higher-income professionals. From an accessibility standpoint, families and people with disabilities will be unable to inhabit shared living buildings as they are. Conversely, many currently affordable shared living spaces flout local zoning by converting single-family homes into multi-family housing and can conceal the management fees charged in rent.</p>
            </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
    )
  }
}

export default EquityAccordion