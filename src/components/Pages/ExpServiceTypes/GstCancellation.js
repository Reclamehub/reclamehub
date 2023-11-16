import React from 'react'
import { Container } from 'react-bootstrap'
import ExpServiceBanner from "./ExpServiceBanner"
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import {TradeMarkCards}from './TradeMarkCards'
import "./IsoCertificate.css"

const GstCancellation = () => {
  return (
    <>
    <Box bg={useColorModeValue('#fffffff', '#000')} color={useColorModeValue('#000', '#ffffff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="GST CANCELLATION" text="GST holders enjoy the option to cancel their GST registration under certain circumstances. The situation under which GST rules do not apply to their business or profession, Users who are in the process of shutting down the business, or request for tax cancellation through Tax Officers. Reclame Hub provides an exhaustive resource for businesses on various types of GST cancellation services." img="gstcanc.png"/>
  </Container>

  <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">About GST Cancellation</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>The Cancellation of GST registration refers to the process of revocation of a taxpayer applying for revocation of GST registration that comes under the framework of the Goods and Services Tax (GST) system. </p>
           <ul>
            <li>The individual applying for GST Cancellation gets an exemption from both the payment and collection of Goods and Services Tax (GST), in addition to being ineligible to claim the input tax credit. Consequently, there will be no obligation for him to submit Goods and Services Tax (GST) returns. </li>
          <li>Cancellations must occur if the tax returns are not filed by taxpayers within 30 days of receiving the cancellation order and are eligible to file for it and avoid any extra charges.</li>
           </ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">WHEN DO WE OPT FOR GST CANCELLATION?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>The initiation of the GST Cancellation process should be initiated at the earliest after the best advisory within the given timeframe with Reclame Hub GST Cancellation services.</p>
           <ul>
            <li>If the business shop is going to close or is no longer producing taxable goods as a company. When the government determines that the business no longer meets the requirements for GST registration, it reserves the right to revoke the GST registration. </li>
          <li>Revocation of GST registration if businesses fail to submit the required GST tax returns or evade the payment of GST taxes.</li>
          <li>The GST registration of businesses would get cancelled if the business is willing to re-register under the new business structure through a merger, demerger, amalgamation, or other changes in the structure of the organization.</li>
          <li>If the sole proprietorship is no longer alive, his legal representative may have to file a GST cancellation application. </li>
           </ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">When Does the Right to Cancel a Reservation Become Effective?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>When a tax official cancels the taxpayer’s registration, it applies on its own with the taxpayer's initiative. within 30 days of the cancellation order date, the taxpayer may request a review by the officer.</p>
          </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Process of GST Cancellation</heading>
        </div>
<Container fluid className='fssai_cards_main_container'> 
<wrapper className="fssai_cards_wrapper1">
  <div>
    <TradeMarkCards icon="1" text="verify your eligibility with the ReclameHub Expert team for GST cancellation before commencing the cancellation process."/>
  </div>
  <div>
    <TradeMarkCards icon="2" text="To obtain the GST cancellation application form, it is recommended to visit the official portal of the tax department or alternatively, contact the expert manager of Reclamehub from time to time for detailed instruction."/>
  </div>
  <div>
    <TradeMarkCards icon="3" text=" In accordance with the grounds for cancellation, it may be necessary to provide additional documentation alongside your application."/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper1">
  <div>
    <TradeMarkCards icon="4"  text=" settle any outstanding Goods and Services Tax (GST) dues and complete the submission of all pending GST returns up until the cancellation date."/>
  </div>
  <div>
    <TradeMarkCards icon="5"  text="We ensure that the application form is duly completed and accompanied by the necessary supporting documents, which are submitted to the relevant tax authority."/>
  </div>

  <div>
    <TradeMarkCards icon="6"  text=" The duration for processing may exhibit variability; The confirmation generally includes the date on which the cancellation becomes effective with the process of the confirmation application."/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">Documents Required for GST Cancellation</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>To initiate the cancellation of your Goods and Services Tax (GST) registration, it is necessary to furnish the pertinent GST authorities with the following documentation:</p>
           <ul>
            <li>The Permanent Account Number (PAN) card is issued by the Income Tax Department of India.</li>
          <li>Aadhaar card </li>
          <li>Tax return details for past assessing years.</li>
          <li>Company's authoritative information </li>
           </ul>
        </div>
    </Container>
    </Container>
  </Box>
  </>
  )
}
export default GstCancellation;