import React,{Component} from 'react'
import JSONData from './companies.json'
import ReactModal from 'react-modal'
import * as companyStyles from './companies.module.css'
import { StaticImage } from "gatsby-plugin-image"

class Companies extends Component{
   constructor(props) {
      super(props)
         this.state = {
         modalState: 'closed',
         expanded: false
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

   handleDescriptionToggle = () => {
      this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true })
   }

   render() {
      const { category } = this.props;

      return(
         <div>
            {JSONData.content.map((data, index) => {
               if (data.title === category) {
                  return <div>
                        <div className={companyStyles.tableHeader}>
                           <h2 className={companyStyles.tableTitle}>{data.title}</h2>
                           <p className={companyStyles.tableDescription}>{data.description} <i>Click each row for more details about the company.</i></p>
                        </div>
                        <table>
                           <tbody>
                              <tr className={companyStyles.tableHeader}><th className={companyStyles.column1}>Company</th><th className={companyStyles.column2}>Type</th><th className={companyStyles.column3}>Capital Raised</th><th className={companyStyles.column4}>Key Investors</th></tr>
                              {data.companies.map((row, index) => {
                                 return <tr onClick={() => this.handleModalOpen(row.name)}>
                                    <td><div className={companyStyles.tableIcon}>
                                       {data.title === 'Tenant Screening' ? <StaticImage src="../images/icon-ts-o.png" alt="Tenant Screening" /> : null }
                                       {data.title === 'Homebuying' ? <StaticImage src="../images/icon-hb-o.png" alt="Homebuying" /> : null }
                                       {data.title === 'Home Financing' ? <StaticImage src="../images/icon-hf-o.png" alt="Home Financing" /> : null }
                                       {data.title === 'Construction' ? <StaticImage src="../images/icon-cn-o.png" alt="Construction" /> : null }
                                       {data.title === 'Shared Living' ? <StaticImage src="../images/icon-sl-o.png" alt="Shared Living" /> : null }
                                       </div>{row.name}</td>
                                    <td>{row.type}</td>
                                    <td>{row.capital}</td>
                                    <td className={companyStyles.column4}>{row.investors}</td>
                                 </tr>
                              })}
                           </tbody>
                        </table>
                        {data.title === 'Tenant Screening' ? <div className={companyStyles.buttonWrapper}><a className={companyStyles.downloadLink} target="_blank" href="https://techequitycollaborative.org/2022/02/23/tech-bias-and-housing-initiative-tenant-screening/"><button className={companyStyles.downloadButton}>Read the tenant screening paper</button></a></div> : null }
                        {data.title === 'Homebuying' ? <div className={companyStyles.buttonWrapper}><a className={companyStyles.downloadLink} target="_blank" href="https://techequitycollaborative.org/2022/06/29/sold-to-the-highest-bidder-how-tech-is-cashing-in-on-the-american-dream/"><button className={companyStyles.downloadButton}>Read the homebuying paper</button></a></div> : null }
                        {data.companies.map((row, index) => {
                           return <ReactModal
                                isOpen={this.state.modalState == row.name}
                                onRequestClose={this.handleModalClose}
                                contentLabel="Company Info"
                                style={{
                                 content: {
                                    inset: '10vh 18%',
                                    padding: '30px 40px'
                                 }
                                }}
                              >
                                 <button className={companyStyles.closeButton} onClick={this.handleModalClose}><StaticImage src="../images/close.png" alt="Close" /></button>
                                 <div className={companyStyles.companies}>
                                    <h2>{row.name}</h2>
                                    <table>
                                       <tbody>
                                          <tr><td className={companyStyles.label}>Type:</td><td>{row.type}</td></tr>
                                          <tr><td className={companyStyles.label}>Website:</td><td><a target="_blank" href={'http://' + row.url}>{row.url}</a></td></tr>
                                          <tr><td className={companyStyles.label}>Capital Raised:</td><td>{row.capital}</td></tr>
                                          <tr><td className={companyStyles.label}>Key Investors:</td><td>{row.investors}</td></tr>
                                          <tr><td className={companyStyles.label}>Description:<br /><span className={companyStyles.labelSub}>(from their website)</span></td><td><span style={this.state.expanded ? {height: '100%'} : {height: '2.8em'}} className={companyStyles.description} dangerouslySetInnerHTML={{__html: row.description}}></span>
                                             {this.state.expanded ? (
                                                <p className={companyStyles.descriptionToggle} onClick={() => this.handleDescriptionToggle()}>(see less)</p>
                                             ) : (
                                                <p className={companyStyles.descriptionToggle} onClick={() => this.handleDescriptionToggle()}>... (see more)</p>
                                             )}
                                          </td></tr>
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