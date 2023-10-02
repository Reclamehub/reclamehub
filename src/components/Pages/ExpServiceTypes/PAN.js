import React from 'react'
import ExpServiceBanner from "./ExpServiceBanner"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Box,useColorModeValue} from "@chakra-ui/react"
import "./IsoCertificate.css"
import "./PAN.css"

export const PAN = () => {
  return (
    <Box bg={useColorModeValue('#fff', '#000')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="Get Your Essential PAN Card Here!" text="Get your PAN card now and secure your future transactions! It is an absolute must-have! Get your PAN card registration, update, or correction done within 2 business days, all from the comfort of your own home!"img="pan.png"/>
  </Container>

  <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Benefits of the Pan Card</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>The Permanent Account Number (PAN) card holds a multitude of advantages for individuals seeking to establish their financial identity and engage in various financial transactions. This unique identifier number, issued by the Income Tax Department of India, serves as a unique identifier for taxpayers and includes numerous other benefits such as:</p>
             <ul>
              <li>Effortlessly initiate the process of the creation of your personal bank account.</li>
              <li>No impediment to the completion of any commercial deal.</li>
              <li>One can claim their IT refunds and rebates by following the necessary procedures and requirements.</li>
              <li>The tax deduction at source (TDS) rebate applies to savings deposits.</li>
              <li>Request for the initiation of a demat account opening process.</li>
              <li>Access to Loan Facility</li>
              <li>Real Estate Transactions</li>
             </ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Process of PAN Card Registration</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>The PAN card registration process is a crucial step in establishing one's financial identity and ensuring compliance with tax regulations. This comprehensive procedure involves several key stages that must be meticulously followed to achieve a successful outcome. </p>
            <p>1. Firstly, the new PAN card applicant needs to visit the Income Tax Department website to find out whether a PAN has been allotted to him or not. </p>
       <p>2. Form 49A is issued by the Income Tax department for submission of applications for allotment of new PAN by Indian Citizens including those who are located outside India.</p>
       <p>3. Form 49AA is issued by the Income Tax Department to be filled by foreign citizens</p>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className= " pan_card">
        <div className='exp_iso_heading_div mb-2 '>
            <heading className="">Who Can Apply for a Pan Card?</heading>
        </div>
        <div className='exp_iso_text_div ' style={{textAlign:"center"}}>
            <p>Every person in India including Individuals, Hindu Undivided Families (HUFs), Businesses, Associations of Persons (AOPs), Body Corporates (BOIs) Trusts, Municipal Corporations, Limited liability Partnerships (LLPs), and other types of artificial legal entities and businesses are required to have Permanent Account Number (PAN). </p>
            </div>
    </Container>
    </Container>
  </Box>
  )
}

