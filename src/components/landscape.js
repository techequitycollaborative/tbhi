import React,{Component} from 'react'
import * as landscapeStyles from './landscape.module.css'
import Companies from './companies.js'

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
                 <div className={landscapeStyles.heading} onClick={() => this.toggle('tenantScreening')}>
                  <div className={landscapeStyles.button}>
                    <h3>Tenant Screening</h3>
                    <p>$XX billion invested by XXXX</p>
                  </div>
                 </div>
                 <div className={landscapeStyles.heading} onClick={() => this.toggle('homebuying')}>
                  <div className={landscapeStyles.button}>
                    <h3>Homebuying</h3>
                    <p>$XX billion invested by XXXX</p>
                  </div>
                 </div>
                 <div className={landscapeStyles.heading} onClick={() => this.toggle('homeFinancing')}>
                  <div className={landscapeStyles.button}>
                    <h3>Home Financing</h3>
                    <p>$XX billion invested by XXXX</p>
                  </div>
                 </div>
                 <div className={landscapeStyles.heading} onClick={() => this.toggle('construction')}>
                  <div className={landscapeStyles.button}>
                    <h3>Construction</h3>
                    <p>$XX billion invested by XXXX</p>
                  </div>
                 </div>
                 <div className={landscapeStyles.heading} onClick={() => this.toggle('sharedLiving')}>
                  <div className={landscapeStyles.button}>
                    <h3>Shared Living</h3>
                    <p>$XX billion invested by XXXX</p>
                  </div>
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