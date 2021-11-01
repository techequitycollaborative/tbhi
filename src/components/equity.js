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
                   <span className={this.state.accordionState == '1' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Brief description of issue
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('2')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '2' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Brief description of issue
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('3')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '3' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Brief description of issue
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('4')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '4' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Brief description of issue
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className={equityStyles.heading} onClick={() => this.toggle('5')}>
                <AccordionItemButton className={equityStyles.button}>
                   <span className={this.state.accordionState == '5' ? equityStyles.chevronBottom : equityStyles.chevronRight}></span>Brief description of issue
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
    )
  }
}

export default EquityAccordion