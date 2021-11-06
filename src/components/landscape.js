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
                <h2>A Snapshot of the Housing Company Landscape</h2>
                <div className={landscapeStyles.headingWrapper}>
                   <div className={landscapeStyles.heading + (this.state.visible == 'tenantScreening' ? ' ' + landscapeStyles.activeHeading : '')} onClick={() => this.toggle('tenantScreening')}>
                    <div className={landscapeStyles.button}>
                      <StaticImage className={landscapeStyles.headingImg} src="../images/icon-ts.png" alt="Tenant Screening" />
                      <h3>Tenant Screening</h3>
                      <p>Current market size: $3 billion</p>
                    </div>
                   </div>
                   {this.state.visible == 'tenantScreening' ? <span className={landscapeStyles.chevronDown}></span> : null }
                </div>
                <div className={landscapeStyles.headingWrapper}>
                   <div className={landscapeStyles.heading + (this.state.visible == 'homebuying' ? ' ' + landscapeStyles.activeHeading : '')} onClick={() => this.toggle('homebuying')}>
                    <div className={landscapeStyles.button}>
                      <StaticImage className={landscapeStyles.headingImg} src="../images/icon-hb.png" alt="Homebuying" />
                      <h3>Homebuying</h3>
                      <p>60% of home sales by 2025</p>
                    </div>
                   </div>
                   {this.state.visible == 'homebuying' ? <span className={landscapeStyles.chevronDown}></span> : null }
                </div>
                <div className={landscapeStyles.headingWrapper}>
                   <div className={landscapeStyles.heading + (this.state.visible == 'homeFinancing' ? ' ' + landscapeStyles.activeHeading : '')} onClick={() => this.toggle('homeFinancing')}>
                    <div className={landscapeStyles.button}>
                      <StaticImage className={landscapeStyles.headingImg} src="../images/icon-hf.png" alt="Home Financing" />
                      <h3>Home Financing</h3>
                      <p>$315 billion market by 2025</p>
                    </div>
                   </div>
                   {this.state.visible == 'homeFinancing' ? <span className={landscapeStyles.chevronDown}></span> : null }
                </div>
                <div className={landscapeStyles.headingWrapper}>
                   <div className={landscapeStyles.heading + (this.state.visible == 'construction' ? ' ' + landscapeStyles.activeHeading : '')} onClick={() => this.toggle('construction')}>
                    <div className={landscapeStyles.button}>
                      <StaticImage className={landscapeStyles.headingImg} src="../images/icon-cn.png" alt="Construction" />
                      <h3>Construction</h3>
                      <p>$13 billion market by 2025</p>
                    </div>
                   </div>
                   {this.state.visible == 'construction' ? <span className={landscapeStyles.chevronDown}></span> : null }
                </div>
                <div className={landscapeStyles.headingWrapper}>
                   <div className={landscapeStyles.heading + (this.state.visible == 'sharedLiving' ? ' ' + landscapeStyles.activeHeading : '')} onClick={() => this.toggle('sharedLiving')}>
                    <div className={landscapeStyles.button}>
                      <StaticImage className={landscapeStyles.headingImg} src="../images/icon-sl.png" alt="Shared Living" />
                      <h3>Shared Living</h3>
                      <p>$14 billion market by 2025</p>
                    </div>
                   </div>
                   {this.state.visible == 'sharedLiving' ? <span className={landscapeStyles.chevronDown}></span> : null }
                </div>
               </div>
             </div>
             <div className={landscapeStyles.landscapeContent}>
               <p>To lay the groundwork for the Tech, Bias, and Housing Initiative, we developed a landscape of the major subsectors of the venture-backed housing ecosystem. Company snapshots below give a sense of funding traction, product descriptions, and scale of impact across these subsectors.</p>
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