import React from 'react'
import { Container } from 'react-bootstrap'
import ExpServiceBanner from "./ExpServiceBanner"
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import {TradeMarkCards}from './TradeMarkCards'
import "./IsoCertificate.css"

const GstRegistration = () => {
  return (
    <>
    <Box bg={useColorModeValue('#fffffff', '#000')} color={useColorModeValue('#000', '#ffffff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="GST Registration" text="Take your business to the next height with the GST Registration process. The integration of Goods and Service Tax is a new experience that hits the right spot when it comes to goods and services consumed by users. GST helps in sweeping away indirect taxes like excise duty, VAT, and service tax for individuals and businesses. The GST has been up and fast since the Goods and Service Tax Act, 2017." img="GSTImg.png"/>
  </Container>


  <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">About GST Registration</heading>
        </div>
        <div className='exp_iso_text_div'>
           <p>A taxable person of Goods and Services Tax (GST) refers to an individual or business entity that is legally obligated to comply with the provisions and regulations of the GST framework and is liable to pay GST.</p>
           <p>Individuals or Service Providers are obligated to obtain GST registration if their aggregate annual turnover exceeds Rs. 20 lakhs in a given year. The Goods and Services Tax (GST) turnover threshold for service providers in special categories has been established at Rs. 10 lakhs.</p>
           <p>Additionally, GST registration is mandatory for businesses whose business supplies goods and whose annual turnover is more than 40 lakhs rupees. </p>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">When is GST Registration Mandatory in India?</heading>
        </div>
        <div className='exp_iso_text_div'>
           <ul>
            <li>Turnover Criteria All taxpayers who have an annual turnover above ₹40 lakhs are required to get new GST registration. For Service supply, Turnover limit is ₹20 lakhs.</li>
          <li>Causal taxpayer  If you supply goods or services in events/exhibitions where you do not have a permanent place of business, you need to get online registration for GST before starting a business. Such a dealer has to pay GST on the basis of an estimated turnover of 90 days. The validity of causal GST Registration is 90 days.</li>
           </ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">Categories of GST Registration </heading>
        </div>
        <div className='exp_iso_text_div'>
          <p>There are different categories of GST registration including regular and occasional taxable persons, non-resident taxable persons, and operators of e-commerce businesses. Additionally, the GST registration number is mandatory no matter their annual revenue threshold for all casual taxable persons, non-resident taxable persons, and operators of e-commerce businesses. </p>
           <ul>
            <li>Casual Taxable Person: The GST act classifies casual Business entities that engage in periodic supply of goods or services within a state or union territory, without a permanent establishment including the operation of temporary businesses at fairs, exhibitions, or seasonal ventures.</li>
          <li>E-commerce Operators: An individual who possesses, oversees, or administers a digital or electronic infrastructure or platform designed for the purpose of conducting electronic commerce are considered e-commerce operators and are obligated to register for Goods and Services Tax (GST), regardless of their business turnover.</li>
          <li>Non-Resident Taxable Person: The GST Act classifies non-resident taxable persons as individuals, businesses, and not-for-profit entities that engage in the supply of goods or services without a permanent establishment or residence within the geographical boundaries of India. Additionally, an individual, business, or organisation from a foreign country that provides goods or services to India is to be classified as a non-resident taxable entity. </li>
           </ul>
        </div>
    </Container>
    </Container>
{/* not-completed */}
    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">What is GSTIN? </heading>
        </div>
        <div className='exp_iso_text_div'>
          <p>The Goods and Services Tax Identification Number (GSTIN), is allocated to business entities that possess a GST registration number. The Goods and Services Tax Identification Number (GSTIN) consists of 15 characters. The process of assigning a Goods and Services Tax Identification Number is determined by the Permanent Account number and the state in which the applicant is located. </p>
          
        </div>
    </Container>
    </Container>
    {/*  */}
    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">Advantages of GST Registration </heading>
        </div>
        <div className='exp_iso_text_div'>
          <p>The GST registration enables businesses to comply with tax regulations. There are several advantages of Goods and Services Tax (GST) registration that is:</p>
          <ul>
            <li>The registration of Goods and Services Tax (GST) and filing of GST returns plays a crucial role in proving the legitimacy of a business and establishing a comprehensive record of its activities. </li>
            <li>The Banks and Non-banking financial companies (NBFCs) extend credit facilities to businesses based on the data derived from goods and services tax (GST) returns. </li>
            <li>The registration process helps businesses in the formalization of business operations and enables access to credit facilities.</li>
            <li>The GST filing and GST returns are important in formalisation of business operations and enabling access to credit facilities.</li>
            <li>The GST registration is a prerequisite for the operation in online sales operations across diverse platforms such as Zomato, Swiggy, Amazon, Flipkart, Snapdeal, and others. </li>
            <li>The GST Registration process (GST) potentially contributes to the expansion of one’s business operations through establishing partnerships with companies. In this process, it is required for the supplier or purchaser to undergo the process of registration during the onboarding process.</li>
            <li>It leads to potential tax savings and increased profit margins. </li>
          </ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">Penalty for Not Registered under GST </heading>
        </div>
        <div className='exp_iso_text_div'>
          <p>In accordance with section 122 of the CGST Act, the penalty for not obtaining GST registration in India within time is INR 10,000/- or 10% of tax due from the supply made, whichever is higher.</p>
          <ul>
            <li>Goods and vehicles may be held in detention. </li>
            <li>Goods and vehicles may be confiscated.</li>
            <li>He person or supplier would not be eligible to claim input tax credit.</li>
            <li>The person or supplier would be unable to transfer the input tax credit.</li>
           </ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Upload the Required Documents & Information to Our Web Portal</heading>
        </div>
<Container fluid className='fssai_cards_main_container'> 
<wrapper className="fssai_cards_wrapper1">
  <div>
    <TradeMarkCards icon="1" text="Connect with Reclame Hub to complete the GST registration process within a week."/>
  </div>
  <div>
    <TradeMarkCards icon="2" text="Our Team of experts starts the GST registration process when you provide your full name, telephone number, and email address to initiate the procedure."/>
  </div>
  <div>
    <TradeMarkCards icon="3" text="Upon receiving your registration request, our GST registration team will contact you in order to gain a comprehensive understanding of your business operations. "/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper1">
  <div>
    <TradeMarkCards icon="4"  text="The GST registration process gathers and authenticates the necessary information for the purpose of acquiring GST registration. "/>
  </div>
  <div>
    <TradeMarkCards icon="5"  text="The initiation of payment commences the process of registering for Goods and Services Tax (GST) and proceeding to upload all relevant applications onto the GST portal."/>
  </div>

  <div>
    <TradeMarkCards icon="6"  text="Our team provides a support system to track the progress of the application and stay updated with the progress of your project, the remaining parts, and all."/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">How to Check GST Registration Application Status?</heading>
        </div>
        <div className='exp_iso_text_div'>
          <ul>
            <li>Visit the GST portal at www.gst.gov.in</li>
            <li>Click on the Services tab and select the Registration option.</li>
            <li>Click on the Track Application Status option.</li>
            <li>Enter the ARN (Application Reference Number) received while filing the GST registration application.</li>
            <li>Enter the captcha code shown on the screen.</li>
            <li>Click on the Search button to check the application status.</li>
            <li>The status of the application will be displayed on the screen. It may show one of the following status:- Submitted- Pending for verification- Pending for clarification- Rejected- Approved</li>
            <li>If the application is rejected, the reason for rejection will also be mentioned.</li>
            <li>If the status is pending for clarification, the applicant needs to provide the required information and submit the application again.</li>
            <li>Once the application is approved, the applicant will receive the GST registration certificate.</li>
           </ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">Documents Required for GST Registration</heading>
        </div>
        <div className='exp_iso_text_div'>
          <p>The following is the list of compilation required at the time of GST registration to upload:</p>
          <ul>
            <li>Business premise address proof</li>
            <li>PAN card, Aadhaar card, or Bank details including information such as the account number, bank name, bank branch, and IFSC code. </li>
            <li>The documents pertaining to the grant of permission or approval such as the Electricity bill (latest) for the proposed premise, Telephone Bill, property tax receipt (of the proposed land), and lease/rent agreement.</li>
            <li>Incorporation certificate (In case of a company or LLP).</li>
            <li>Consent letter if there is no lease agreement. </li>
            </ul>
        </div>
    </Container>
    </Container>

  </Box>
  </>
  )
}

export default GstRegistration
