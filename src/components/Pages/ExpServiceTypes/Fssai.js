import React from 'react'
import ExpServiceBanner from "./ExpServiceBanner"
import { Container } from 'react-bootstrap'
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
            <heading className="">What is FSSAI ?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>FSSAI License and Registration is required for any food business in India that manufactures, stores, transports, or distributes food. Depending on the size and nature of the company, FSSAI registration or license may be required. In the FSSAI Registration process, the FBO will get a 14 digit number that needs to be printed on food packages. Obtaining a FSSAI license can provide the food business with legal benefits, build goodwill, ensure food safety, create consumer awareness, and assist in business expansion. IndiaFilings can help you obtain an FSSAI license throughout the country very quickly. We also help to get FSSAI registration. Our experts will guide you in selecting the proper food category and license.</text>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">HOW TO APPLY FSSAI REGISTRATION ONLINE ?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>The Food Safety and Standards Authority of India (FSSAI) is a statutory authority operating under the Ministry of Health and Family Welfare, Government of India. FSSAI is committed to ensuring the highest standards of quality and safety of food products across the nation for all food products available in India. </text>
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
    <FssaiCards img="expfssaiicon.png" title="Lowering the risk of food recalls" text="FSSAI licence guarantee that businesses adhere to proper food safety procedures. "/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title="Government Funding and Loans" text="The registration process for obtaining a Food License provides food business operators (FBOs) with valuable opportunities to access government loans and funding. These financial resources are readily available to support and empower FBOs in their food-related ventures."/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>
  </Box>
  )
}

