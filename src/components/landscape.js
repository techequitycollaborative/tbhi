import React,{Component} from 'react'
import * as landscapeStyles from './landscape.module.css'
import Companies from './companies.js'
import { StaticImage } from "gatsby-plugin-image"

class Landscape extends Component{

  state = {
     visible: 'tenantScreening'
  }

  toggle = (value)=>{
      this.setState({
          visible: value
      })
  }

   render(){
       return(
            <div className={landscapeStyles.landscape}>
             <div className={landscapeStyles.header}>
               <div className={landscapeStyles.headerContent}>
                <h2>Housing + Tech Company Landscape</h2>
                <p className={landscapeStyles.description}>To lay the groundwork for the Tech, Bias, and Housing Initiative, we developed a landscape of the major subsectors of the venture-backed housing ecosystem. We’ve identified major players in each subsector and shared funding traction, product descriptions, and scale of impact for each company.</p>
                <div className={landscapeStyles.headingWrapper}>
                   <div className={landscapeStyles.heading + (this.state.visible == 'tenantScreening' ? ' ' + landscapeStyles.activeHeading : '')} onClick={() => this.toggle('tenantScreening')}>
                    <span title="Landlords are taking leasing and property management online, relying on automated background checks when selecting renters. Companies use algorithms that score potential renters based on data inputs that are often obscured to both renters and landlords.">
                      <div className={landscapeStyles.button}>
                        <StaticImage className={landscapeStyles.headingImg} src="../images/icon-ts.png" alt="Tenant Screening" />
                        <h3>Tenant Screening</h3>
                        <p>Current Market Size: $3 Billion</p>
                      </div>
                    </span>
                   </div>
                   {this.state.visible == 'tenantScreening' ? <span className={landscapeStyles.chevronDown}></span> : null }
                </div>
                <div className={landscapeStyles.headingWrapper}>
                   <div className={landscapeStyles.heading + (this.state.visible == 'homebuying' ? ' ' + landscapeStyles.activeHeading : '')} onClick={() => this.toggle('homebuying')}>
                    <span title="There are a number of uses for homebuying products. So-called “iBuyers'' use algorithms to make offers on homes that they then flip. Realty websites shorten the duration of homebuying through virtual listings and reduce the number of steps within the process, often automating the role of the real estate agent. An emerging subset of companies are expanding access to homeownership by offering alternative homebuying models, such as rent-to-own or advance cash offers.">
                      <div className={landscapeStyles.button}>
                        <StaticImage className={landscapeStyles.headingImg} src="../images/icon-hb.png" alt="Homebuying" />
                        <h3>Homebuying</h3>
                        <p>60% of home sale transactions by 2025</p>
                      </div>
                    </span>
                   </div>
                   {this.state.visible == 'homebuying' ? <span className={landscapeStyles.chevronDown}></span> : null }
                </div>
                <div className={landscapeStyles.headingWrapper}>
                   <div className={landscapeStyles.heading + (this.state.visible == 'homeFinancing' ? ' ' + landscapeStyles.activeHeading : '')} onClick={() => this.toggle('homeFinancing')}>
                    <span title="The ecosystem of mortgage brokers and lenders, appraisal and inspection, and title and insurance companies are being digitized, automated, and even replaced by non-traditional players like alternative credit lenders. Buying, maintaining, and selling a home increasingly relies on data and digital interfaces and less on direct connection with human intermediaries. Companies rely on algorithms to assess creditworthiness, approve loans, execute financial transactions, and automate documentation.">
                      <div className={landscapeStyles.button}>
                        <StaticImage className={landscapeStyles.headingImg} src="../images/icon-hf.png" alt="Home Financing" />
                        <h3>Home Financing</h3>
                        <p>Market Size:<br />$315 Billion by 2025</p>
                      </div>
                    </span>
                   </div>
                   {this.state.visible == 'homeFinancing' ? <span className={landscapeStyles.chevronDown}></span> : null }
                </div>
                <div className={landscapeStyles.headingWrapper}>
                   <div className={landscapeStyles.heading + (this.state.visible == 'construction' ? ' ' + landscapeStyles.activeHeading : '')} onClick={() => this.toggle('construction')}>
                    <span title="The construction industry relies on the coordination of stakeholder communication and collaboration as they navigate regulatory and permitting processes. These stakeholders are utilizing digital tools, computer vision, and automated decision-making to streamline communication, permitting, and project planning across organizations and job functions. These tools and platforms advertise features like “enhancing worker safety and field productivity”, reducing design, engineering, and building costs, and improving project management capability.">
                      <div className={landscapeStyles.button}>
                        <StaticImage className={landscapeStyles.headingImg} src="../images/icon-cn.png" alt="Construction" />
                        <h3>Construction</h3>
                        <p>Market Size:<br />$13 Billion by 2025</p>
                      </div>
                    </span>
                   </div>
                   {this.state.visible == 'construction' ? <span className={landscapeStyles.chevronDown}></span> : null }
                </div>
                <div className={landscapeStyles.headingWrapper}>
                   <div className={landscapeStyles.heading + (this.state.visible == 'sharedLiving' ? ' ' + landscapeStyles.activeHeading : '')} onClick={() => this.toggle('sharedLiving')}>
                    <span title="The act of finding roommates for communal living has become a digital service and product. Companies develop or acquire residential property, match roommates, offer community events, and furnish living spaces to provide more affordable, social living arrangements. Shared living spaces typically have private bedrooms but share common spaces like kitchens, living rooms, and bathrooms.">
                      <div className={landscapeStyles.button}>
                        <StaticImage className={landscapeStyles.headingImg} src="../images/icon-sl.png" alt="Shared Living" />
                        <h3>Shared Living</h3>
                        <p>Market Size:<br />$14 Billion by 2025</p>
                      </div>
                    </span>
                   </div>
                   {this.state.visible == 'sharedLiving' ? <span className={landscapeStyles.chevronDown}></span> : null }
                </div>
               </div>
             </div>
             <div className={landscapeStyles.landscapeContent}>
               {this.state.visible == 'tenantScreening' ? <Companies category="Tenant Screening"></Companies> : null }
               {this.state.visible == 'homebuying' ? <Companies category="Homebuying"></Companies> : null }
               {this.state.visible == 'homeFinancing' ? <Companies category="Home Financing"></Companies> : null }
               {this.state.visible == 'construction' ? <Companies category="Construction"></Companies> : null }
               {this.state.visible == 'sharedLiving' ? <Companies category="Shared Living"></Companies> : null }
             </div>
           </div>
       )
   }
}

export default Landscape;