import React from 'react'
import ExpServiceBanner from "./ExpServiceBanner"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Box,useColorModeValue} from "@chakra-ui/react"
import "./GST.css"
import "./IsoCertificate.css"

 export const GST = () => {
  return (
    <Box bg={useColorModeValue('#fffffff', '#000')} color={useColorModeValue('#000', '#ffffff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="Get Your MSME Registration Hassle-free!" text="Get Your MSME Registration Approved Fast with Reclame Hub in India.With Reclame, You can complete your online MSME registration, saving you time and effort. Our streamlined process ensures a hassle-free experience from start to finish."img="gstmsme.png"/>
  </Container>

  <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">About MSME Registration</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>Companies that are either manufacturing goods or providing services are known as MSMEs, and their continued growth is essential to the nation's economy. therefore, the government of India has been providing them with subsidies, financial aid, tax incentives, and programs to help them develop their skills.</text>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div mb-3'>
            <heading className="">Qualifications for MSME’s Registration </heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>Micro enterprises have a maximum annual revenue of 5 crores.</p>
            <p>Small enterprises have a turnover of up to 75 crores.</p>
           <p> Medium-sized businesses have a turnover of up to 250 crores.</p>
            </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Expert Guidance at your fingertips</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>We provide comprehensive support throughout the entire online MSME registration process. Our team of experts will guide you through each step, ensuring that you have all the necessary documentation and information required. </text>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Fast and Reliable Certification Process</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>Once your application is complete, we will swiftly process and deliver your MSME registration certificate to your doorstep. Rest assured that our Certification processes are legally valid and get authorisation from certified government authorities.</text>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Features of MSME Registration</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>Registration of your Business as an MSME brings a wide range of features including access to government schemes, available subsidies, and Priority in procurement in the following:</p>
            <p>Patent Subsidies: Small businesses and startups often fail to get patents for their inventions due to the high cost of patent registration.  Nonetheless, with MSME registration, businesses are eligible for a 50% reduction or 15 lakhs rupees (whichever is less) on the total cost of filing and processing a patent registration application.</p>
            <p>Lower interest rate: MSME registration provides lower-interest loans, delayed payment protection, tax exemptions, and credit facilities. </p>
            <p>International exposure: ISO certification reimbursement, Purchasing machinery, expanding business, increasing production capacity, reducing operational costs across India, and EXIM benefits are also available to MSME registered entities.</p>
            <p>Our Expert Services: Our experts will guide you through the registration process. With our fast and reliable certification services, you can start enjoying the benefits of MSME registration without any hassle. We also offer a variety of add-on services for further processing business MSME registration services, such as GST registration, Bank Account Opening, and Loan Assistance.</p>
        </div>
    </Container>
    </Container>

    
    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Step-by-Step MSME Udyam Registration Process</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>Go to the official website Udyam registration portal: <span style={{color:"blue"}}> <Link to= "https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm">Link</Link></span></p>
            <p>Create an account. Enter your details in the application form Including your Aadhar number, applicant name, and mobile number.</p>
            <p>Enter the OTP to validate the verification process from the registered contact number. </p>
            <div>
            <p>Fill out the registration form. Where you need to provide the following information:</p>
            <li>Company name</li>
            <li>Type of Business</li>
            <li>Industry Sector</li>
            <li>Location of the enterprise</li>
            <li>Details of the promoters/directors</li>
            <li>Details of the investment and turnover.</li>
            </div><br/>
            <p>Submit the registration form.<br/>Once the e-certification process is complete, the same shall be intimated to the business owner's contact.</p>
        </div>
    </Container>
    </Container>

     
    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Documents Required for MSME Registration</heading>
        </div>
        <div className='exp_iso_text_div'>
            <div className='doc_rq_boxes'>
              <p className='pTag_text mt-2'>You must have a PAN card of the Business owner and the Business.</p>
            </div>
            <div className='doc_rq_boxes'>
              <p className='pTag_text mt-2'>GST registration of the Business.</p>
            </div>
            <div className='doc_rq_boxes'>
              <p className='pTag_text mt-2'>Aadhar card of the business owner.</p>
            </div>
            <div className='doc_rq_boxes'>
              <p className='pTag_text mt-2'>Company name and address.</p>
            </div>
            <div className='doc_rq_boxes'>
              <p className='pTag_text mt-2'>Business owners details.</p>
            </div>
       
        </div>
    </Container>
    </Container>
  </Box>
  )
}

