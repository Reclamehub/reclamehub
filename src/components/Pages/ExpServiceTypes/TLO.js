import React from 'react'
import ExpServiceBanner from "./ExpServiceBanner"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Box,useColorModeValue} from "@chakra-ui/react"
import "./IsoCertificate.css"

export const TLO = () => {
  return (
    <Box bg={useColorModeValue('#fff', '#000')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="Trade License Online" text="Proceed on your entrepreneurial adventure in the vibrant heart of your city and effortlessly secure your official Trade License registration, free from the burdensome red tape and paperwork. Let’s begin towards life-changing adventure leading to legendary success, commencing right here, right now."img="tlo.png"/>
  </Container>

  <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">Trade License Meaning</heading>
        </div>
        <div className='exp_iso_text_div'>
          <p>A trade license also known as a business license refers to a legal document or permit issued by a governing authority that grants an individual or entity legal permission to participate in a certain trade or commercial endeavor within a specified territory. It's a certificate to carry a particular trade within the limits of issued authority. Trade licenses can be obtained from the concerned state government, local corporation, or municipality.</p>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">Essential Things to know while applying for Trade License</heading>
        </div>
        <div className='exp_iso_text_div'>
<ul>
  <li> Trade License in Delhi should be obtained within the thirty days of business commencement.</li>
  <li> The applicant also needs to apply for the renewal of trade license before one month of the expiry date.</li>
  <li> During the renewal process of the trade license in Delhi, you will need to again submit the required documents.</li>
  <li>It is possible to face fines, jail, and the shutdown of your business if you choose not to apply for a trading license.</li>
  <li> Businesses must adhere to standards as per the Delhi shops and establishment act, 1954 to get the trade license in Delhi.</li>
</ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div mb-2'>
            <heading className="">Start Looking for Information on the Requirements for a Business License</heading>
        </div>
        <div className='exp_iso_text_div'>
          <p>Partner, listen up now. In this town of India, if you aim to run a business, you best be gettin' yourself a Trade License first.</p>
<ul>
  <li>Within 30 days of opening the company, you must apply for and get a Trade License from the local authorities.</li>
  <li> The applicant needs to submit an application for the renewal of their business license at least one month prior to the day on which the license will expire.</li>
  <li> All documents must be resubmitted while renewing a trade license.</li>
  <li>Not applying for a trade license may result in penalties, put in jail, or a business shut down.</li>
  <li>The trade license can be obtained after showing compliance and the standards with the state laws as in Delhi one must comply with the standards set by the Delhi Shops and Establishment Act, 1954.</li>
</ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div mb-2'>
            <heading className="">Documents Required to Apply for a Trade License</heading>
        </div>
        <div className='exp_iso_text_div'>
          <p>To apply for a trade license, you need to gather the necessary documents that include proof of identity, such as:</p>
<ul>
  <li>A valid government-issued ID card or passport, </li>
  <li> Proof of Address (in the form of Utility bill or rental agreement)</li>
  <li> Copy of Business registration certificate.</li>
  <li>List of Directors</li>
  <li>Partnership or Proprietorship documents (if required)</li>
  <li>NOC from Landlord</li>
  <li>NOC from the water and fire department </li>
  <li>Consent from Pollution Department</li>
  <li>PAN card copy of your Business</li>
  <li>Information in particular of equipment & raw material.</li>
  <li>Municipal corporation Tax Receipts</li>
</ul>
        </div>
    </Container>
    </Container>


  </Box>
  )
}

