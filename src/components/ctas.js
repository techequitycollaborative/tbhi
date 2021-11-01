import React,{Component} from 'react'
import * as ctaStyles from './ctas.module.css'

class CTAs extends Component{
   render(){
       return(
          <div className={ctaStyles.container}>
            <button className={ctaStyles.button}>CTA 1</button>
            <button className={ctaStyles.button}>CTA 2</button>
          </div>
       )
   }
}

export default CTAs;