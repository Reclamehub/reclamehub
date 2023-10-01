import React from 'react'
import ExpServiceBanner from "./ExpServiceBanner"
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Box,useColorModeValue} from "@chakra-ui/react"
import FssaiCards from './FssaiCards'
import "./Fssai.css"

 export const Fssai = () => {
  return (
    <Box bg={useColorModeValue('#fffffff', '#000')} color={useColorModeValue('#000', '#ffffff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="FSSAI Registration" text ="Reclame Hub helps businesses with the whole FSSAI Licensing process. Our team of experts helps businesses and makes sure that all the requirements are met. We also help businesses with other FSSAI business compliance requirements such as GST registration, company formation, etc. "img="expfssai.png"/>
  </Container>

  <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">About FSSAI Registration</heading>
        </div>
        <div className='exp_iso_text_div'>
           <p>The Food Safety and Standards Authority of India (FSSAI) is a statutory authority operating under the Ministry of Health and Family Welfare, Government of India. FSSAI is committed to ensuring the highest standards of quality and safety of food products across the nation for all food products available in India. </p>
           <p>Are you a part of the active food production or distribution industry? The Food Safety and Standards Authority of India (FSSAI) being a regulatory body mandates for all food business operators to undergo a registration process. This essential step not only demonstrates your commitment to excellence but also ensures compliance with the stringent regulations set forth by FSSAI. It guarantees that the food you procure and offer to your customers is of the highest quality and safety standards.</p>
           <p>If you're venturing into the realm of food manufacturing, selling, or distribution, it's essential to familiarize yourself with the FSSAI licence. When it comes to obtaining the necessary licences for your food business, the Food Safety and Standards Authority of India (FSSAI) offers two distinct types:</p>
        <li>State Licence: This licence is a mandatory requirement for businesses operating within one state on a medium scale.</li>
        <li>Central Licence: The Central License is a mandatory requirement for businesses with headquarters operating in multiple states. With this essential licence, you can access a world of opportunities to showcase your unique offerings.</li>
        <p>f you want to get an FSSAI licence, your business needs to meet certain requirements. You have to get a registered place and qualified personnel. The application process can be complex, so businesses might want to consider getting professional help from us.</p>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Who Needs An FSSAI License?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>The FSSAI License is a mandatory requirement for various entities involved in the food business. Whether you are a manufacturer, distributor, retailer, or even Wholesaler, Supplier, Food Processor, Transporter, Distributor, Canteen, restaurant, Club, storage, or others.</text>
        </div>
    </Container>
    </Container>
{/*  */}
    <Container fluid className='box-shadow'>
  <Container className='inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Features of FSSAI Registration</heading>
        </div>
<Container fluid className='fssai_cards_main_container'> 
<wrapper className="fssai_cards_wrapper1">
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Compliance and Government Recognition" text="Obtaining the FSSAI licence will offer a broader range of opportunities and the advantage of expanding to any geographical location. FSSAI licence are designed to ensure that businesses comply with food safety regulations. Companies can utilise this method to safeguard themselves against legal action and potential fines."/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Building Customer Trust and Safety" text="Obtaining an FSSAI licence showcases a company's dedication to upholding food safety standards, thereby installing a sense of trust and confidence in consumers. We prioritize the well-being of our customers by ensuring that they receive a safe and untainted food supply. "/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Global Sales Opportunities with FSSAI Certification" text="The FSSAI licence offers numerous advantages, including the opportunity for businesses to explore their operations in various geographic locations and seize growth opportunities with ease. "/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper2">
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Lowering the risk of food recalls" text="FSSAI licence guarantee that businesses adhere to proper food safety procedures. "/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Government Funding and Loans" text="The registration process for obtaining a Food License provides food business operators (FBOs) with valuable opportunities to access government loans and funding. These financial resources are readily available to support and empower FBOs in their food-related ventures."/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Key Steps for Successful FSSAI Registration Online</heading>
        </div>
      <wrapper className="big_cards_wrapper">
        <div className='big_card1_div'>
          <p className="big_card_title">Begin by scheduling a consultation</p>
          <p className='big_card_text'>Feel free to contact our specialists for a complimentary consultation. At our website, we take pride in providing a comprehensive evaluation of your requirements and expert guidance throughout the entire process.</p>
        </div>

        <div className='big_card2_div'>
          <p className="big_card_title"> Comprehensive Documentation</p>
          <p className='big_card_text'>Help us in collecting all the necessary documents that are required for FSSAI registration with confidence. Our team is excited to assist you with the preparation and organisation of every necessary document!</p>
        </div>

        <div className='big_card3_div'>
          <p className="big_card_title"> Application and Follow-up</p>
          <p className='big_card_text'>Make sure to carefully review your application to ensure all the details are complete. We will handle the entire application process on your behalf, ensuring that all necessary information is accurately provided. </p>
        </div>
      </wrapper>
    </Container>
    </Container>
  </Box>
  )
}

