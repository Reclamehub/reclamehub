import React from 'react'
import Card from './Card';
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Container } from 'react-bootstrap'
import "./ExpService.css"

const ExpService = () => {
  return (
    <>
 <Container className="exp_service_container">
        <div className='exp_heading_wrapper'>
          <div className='exp_heading_div' >
            <heading className="exp_heading" >Our services</heading>
          </div>
          <div className='exp_text_div' style={{ width: "auto" }}>
            <text className='exphelp_heading'>Setup & Delivered 2,00,000 + New Companies and Business Licenses for MSMEs in India and continuing.</text>
          </div>
        </div>
        <div className='exp_service_card_wrapper'>
          <div>
            <Card img="expvector3.png" title1="iso" text="the iso certificate helps to enhance the credibility and authority of your company as well as the overall effectiveness of the company ." />
            <Card img="expvector2.png" title1="copy right" text="copyright is the legal right of the owner of intellectual property which means that the creator of products and anyone they give permission to are the ones the only with the exclusive right to reproduce the work." />
            <Card img="expvector1.png" title1="fssai" text="FSSAI is an independent agency that reports to the Indian Ministry of Health and Family Welfare. Through the regulation and oversight of food safety." />
          </div>
          <div>
            <Card img="expvector3.png" title1="trademark" text="a trademark registration is the process that proves ownership and the brand , logo , or name . it also protects brand from any illegal use by a third party." />
            <Card img="expvector2.png" title1="gst msme" text="gST registration is required for firms that have a turnover exceeding INR  20 lakh. also the limit is 10 lakh in northern hilly states." />

          </div>
        </div>
      </Container>
      </>
  )
}

export default ExpService