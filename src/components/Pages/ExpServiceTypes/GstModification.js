import React from 'react'
import { Container } from 'react-bootstrap'
import ExpServiceBanner from "./ExpServiceBanner"
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import {TradeMarkCards}from './TradeMarkCards'
import "./IsoCertificate.css"

const GstModification = () => {
  return (
    <>
    <Box bg={useColorModeValue('#fffffff', '#000')} color={useColorModeValue('#000', '#ffffff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="GST Modification" text="Changing the process you handle taxes! Experience the potential of modification of your GST registration or the details within your GST certificate. " img="gstmodi.png"/>
  </Container>

  <Container fluid className='box-shadow mt-5'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">ABOUT GST MODIFICATION</heading>
        </div>
        <div className='exp_iso_text_div'>
           <p>GST modification refers to the modification or alteration made to the GST Registration or any of the details recorded in the GST certificate. These modifications are implemented when an individual wishes to transition from a composite scheme to a regular scheme or in the event of an error occurring during the initial GST registration process. </p>
           <p>The necessity for GST modifications arises in instances where inaccurate information pertaining to taxable individuals has been furnished during the process of GST registration. It is important to note that the alteration of PAN is not feasible within the framework of GST Registration. The appropriate course of action entails submitting a new application for GST registration while relinquishing the old GSTIN (GST Identification Number) that contains inaccurate PAN information.</p>
           <p>In case of the modification of information for the grant of GST registration during the registration process or after registration, an application for GST modification is submitted in the appropriate form within the specified timeframe. </p>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">What is GST Modification?</heading>
        </div>
        <div className='exp_iso_text_div'>
           <p>GST Modification refers to any modification or changes made to the information in registration of the Goods and Services Tax (GST) or the information provided in the GST certificate.</p>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">Why is the GST Modification Required?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>GST modification is provided for existing taxpayers or new GST-registered persons who need to make changes to their GST registration. GST modification is processed with the GST Form REG 14 fillup through the GST portal. GST modification GST modification is required due to the following reasons:</p>
           <ul>
            <li>Modification or changes in the original GST registration. </li>
          <li>Changing your Company’s name or location, T&C applies.</li>
          <li>Changes in contact information.</li>
          <li>Changes in the number of partners or board members.</li>
          <li>Adaptation of new business conditions.</li>
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
    <TradeMarkCards icon="1" text="Connect with the Expert team of Reclame Hub to discuss specific requirements for your GST Modification through the form fillup provided on www.ReclameHub.in."/>
  </div>
  <div>
    <TradeMarkCards icon="2" text="An application in form GST REG 14 for GST modification must be lodged within 15 days of the event of information to the modification through Goods and Services Tax (GST)."/>
  </div>
  <div>
    <TradeMarkCards icon="3" text="The application must accompany the submission of the documents for justifications for the changes."/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper1">
  <div>
    <TradeMarkCards icon="4"  text="A charge of GST application is required for submission with the cost that varies based on the kind of alteration being sought."/>
  </div>
  <div>
    <TradeMarkCards icon="5"  text="The changes in Goods and Services Tax (GST) must be accompanied by guidance from a qualified GST expert."/>
  </div>

  <div>
    <TradeMarkCards icon="6"  text="The approval of the application is processed after conducting proper verification from officers."/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">Documents Required for GST Modification</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>The documents required for primary authorized signature are the requirements of the primary signatory—the alteration in the principal signatory information. </p>
           <ul>
            <li>Accepted address proof.</li>
          <li>Own premises or Rented Premises.</li>
          <li>Documents supporting ownership.</li>
          <li>SEZ documents.</li>
          <li>GST Certificate.</li>
          <li>Documentary proof of changes, such as new address proof, name change etc.</li>
           </ul>
        </div>
    </Container>
    </Container>
  </Box>
</>
)
}
export default GstModification