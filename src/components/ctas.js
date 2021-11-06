import React,{Component} from 'react'
import * as ctaStyles from './ctas.module.css'

class CTAs extends Component{
   render(){
       return(
          <div className={ctaStyles.container}>
            <button className={ctaStyles.button}>Subscribe</button>
            <button className={ctaStyles.button}>Speak With Us</button>
            <button className={ctaStyles.button}>Share your Experience</button>
          </div>
       )
   }
}

export default CTAs;