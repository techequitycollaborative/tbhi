import React,{Component} from 'react'
import JSONData from './companies.json'
import ReactModal from 'react-modal'
import { Link } from 'gatsby'
import * as companyStyles from './companies.module.css'
import { StaticImage } from "gatsby-plugin-image"

class Companies extends Component{
   constructor(props) {
      super(props)
         this.state = {
         modalState: 'closed',
      }
   }
   handleModalOpen(modalName) {
      // console.log('handleModalOpen: ', event);
      this.setState({ modalState: modalName })
   }

   handleModalClose = event => {
      // console.log('handleModalOpen: ', event);
      this.setState({ modalState: 'closed' })
   }

   render() {
      const { category } = this.props;

      return(
         <div>
            {JSONData.content.map((data, index) => {
               if (data.title == category) {
                  return <div>
                        <h2>{data.title} (click row for more details)</h2>
                        <table>
                           <tbody>
                              <tr><th className={companyStyles.column1}>Company Name</th><th className={companyStyles.column2}>Software Type</th><th className={companyStyles.column3}>Capital Raised</th><th className={companyStyles.column4}>Backers</th></tr>
                              {data.companies.map((row, index) => {
                                 return <tr onClick={() => this.handleModalOpen(row.name)}><td>{row.name}</td><td>{row.type}</td><td>{row.capital}</td><td>{row.investors}</td></tr>
                              })}
                           </tbody>
                        </table>
                        {data.companies.map((row, index) => {
                           return <ReactModal
                                isOpen={this.state.modalState == row.name}
                                onRequestClose={this.handleModalClose}
                                contentLabel="Example Modal In Gatsby"
                              >
                                 <button className={companyStyles.closeButton} onClick={this.handleModalClose}><StaticImage src="../images/close.png" alt="Close" /></button>
                                 <div className={companyStyles.companies}>
                                    <h1>{row.name}</h1>
                                    <table>
                                       <tbody>
                                          <tr><td className={companyStyles.label}>Type:</td><td>{row.type}</td></tr>
                                          <tr><td className={companyStyles.label}>URL:</td><td>{row.url}</td></tr>
                                          <tr><td className={companyStyles.label}>Capital Raised:</td><td>{row.capital}</td></tr>
                                          <tr><td className={companyStyles.label}>Investors:</td><td>{row.investors}</td></tr>
                                          <tr><td className={companyStyles.label}>Description:</td><td dangerouslySetInnerHTML={{__html: row.description}}></td></tr>
                                          <tr><td className={companyStyles.label}>Target Customer:</td><td>{row.target}</td></tr>
                                          <tr><td className={companyStyles.label}>Scale of Impact:</td><td>{row.scale}</td></tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </ReactModal>
                        })}

                     </div>
               }
            })}
         </div>
      )
   }
}

export default Companies;