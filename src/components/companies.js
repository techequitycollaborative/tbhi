import React,{Component} from 'react'
import JSONData from './companies.json'
import ReactModal from 'react-modal'
import { Link } from 'gatsby'
import * as companyStyles from './companies.module.css'
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={companyStyles.sliderPrev} onClick={onClick}></div>
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={companyStyles.sliderNext} onClick={onClick}></div>
  );
}

class Companies extends Component{
   constructor(props) {
      super(props)
         this.state = {
         expanded: false
      }
   }

   handleDescriptionToggle = () => {
      this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true })
   }

   render() {
      const { category } = this.props;

      const settings = {
         dots: false,
         infinite: true,
         autoplay: false,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         nextArrow: <NextArrow />,
         prevArrow: <PrevArrow />
      }

      return(
         <div>
            {JSONData.content.map((data, index) => {
               if (data.title == category) {
                  return <div>
                        <div className={companyStyles.tableHeader}>
                           <h2 className={companyStyles.tableTitle}>{data.title}</h2>
                           <p className={companyStyles.tableDescription}>{data.description}</p>
                        </div>
                        <div className={companyStyles.sliderWrapper}>
                           <div className={companyStyles.sliderContent}>
                              <Slider {...settings} className="overflow-hidden">
                              {data.companies.map((row, index) => {
                                 return <div>
                                       <div className={companyStyles.companies}>
                                          <h3>{row.name}</h3>
                                          <div className={companyStyles.descriptionWrapper}>
                                             <p style={this.state.expanded ? {height: '100%'} : {height: '2.8em'}} className={companyStyles.description}><span className={companyStyles.descriptionLabel}>Description (from their website):</span> <span dangerouslySetInnerHTML={{__html: row.description}}></span></p>
                                             {this.state.expanded ? (
                                                <p className={companyStyles.descriptionToggle} onClick={() => this.handleDescriptionToggle()}>(see less)</p>
                                             ) : (
                                                <p className={companyStyles.descriptionToggle} onClick={() => this.handleDescriptionToggle()}>... (see more)</p>
                                             )}
                                          </div>
                                          <table className={companyStyles.twoCol}>
                                             <tbody>
                                                <tr><td><span className={companyStyles.label}>Type:</span> {row.type}</td><td><span className={companyStyles.label}>Capital Raised:</span> {row.capital}</td></tr>
                                                <tr><td><span className={companyStyles.label}>Website:</span> <a target="_blank" href={row.url}>{row.url}</a></td><td><span className={companyStyles.label}>Key Investors:</span> {row.investors}</td></tr>
                                                <tr><td><span className={companyStyles.label}>Target Customer:</span> {row.target}</td><td><span className={companyStyles.label}>Scale of Impact:</span> {row.scale}</td></tr>
                                             </tbody>
                                          </table>
                                          <table className={companyStyles.oneCol}>
                                             <tbody>
                                                <tr><td className={companyStyles.label}>Type:</td><td>{row.type}</td></tr>
                                                <tr><td className={companyStyles.label}>Website:</td><td><a target="_blank" href={row.url}>{row.url}</a></td></tr>
                                                <tr><td className={companyStyles.label}>Target Customer:</td><td>{row.target}</td></tr>
                                                <tr><td className={companyStyles.label}>Capital Raised:</td><td>{row.capital}</td></tr>
                                                <tr><td className={companyStyles.label}>Key Investors:</td><td>{row.investors}</td></tr>
                                                <tr><td className={companyStyles.label}>Scale of Impact:</td><td>{row.scale}</td></tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                              })}
                              </Slider>
                           </div>
                        </div>
                     </div>
               }
            })}
         </div>
      )
   }
}

export default Companies;