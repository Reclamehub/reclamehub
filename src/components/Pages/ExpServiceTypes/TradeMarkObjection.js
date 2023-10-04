import React from 'react'
import ExpServiceBanner from "./ExpServiceBanner"
import { Container } from 'react-bootstrap'
import {Box,useColorModeValue} from "@chakra-ui/react"
import FssaiCards from './FssaiCards'
import "./IsoCertificate.css"
import "./TAN.css"
import { TradeMarkCards } from './TradeMarkCards'

const TradeMarkObjection = () => {
  return (
    <Box bg={useColorModeValue('#fff', '#000')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="Trademark Objection" text="Reclame Hub is highly efficient and reliable in trademark objection services. Our Trademark objection services are conducted through analysis of individuals and businesses facing trademark disputes and of the trademark in question and its distinctiveness before moving ahead with trademark objection."img="trademark2.png"/>
  </Container>

  <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">About Trademark Objection</heading>
        </div>
        <div className='exp_iso_text_div'>
          <p>Trademark Objection is a comprehensive advertising platform that offers a wide range of features and services to help businesses effectively promote their products and services. It serves as a unified solution for all advertising needs. </p>
          <p>Reclame Hub offers a range of unique features and advantages that make it an exceptional choice for handling trademark objections. Users can benefit from its most advanced technology and services for efficient processes. We identify potential trademark conflicts, saving users valuable time and effort.</p>
          <p>We navigate through the various steps involved that contain a vast collection of trademark information. The Trademark monitoring capabilities allow users to stay informed about potential objections. We scan trademark databases, ensuring timely detection of any objection that may arise.</p>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">key points of trademark objection</heading>
        </div>
<Container fluid className='fssai_cards_main_container'> 
<wrapper className="fssai_cards_wrapper1">
  <div>
    <FssaiCards img="expfssaiicon.png" title1="How to resolve Trademark Objection?" text="The process of resolving a trademark objection involves various steps such as evidence demonstrating distinctive character and prior use while addressing the concerns raised by the objecting party and obtaining clearance for the trademark in question. "/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="What are the fees associated with filing a Trademark Objection?" text="The fee for trademark objection within the notice period is ₹2500, whereas the fee for trademark objection during the counter statement filing process is ₹3000. However, there are no prescribed charges associated with the third, fourth, and fifth stages."/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="What is the importance of trademark objection in intellectual property?" text="Trademark objection is essential for the protection of trademark owners. The maintenance of trademark integrity and exclusivity promotes a fair and competitive market."/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper2">
  <div>
    <FssaiCards img="expfssaiicon.png" title1="What is Trademark Objection?" text="The term “Trademark Objection” refers to the legal process in which an official authority questions the registration of a trademark due to potential conflicts with existing trademark or other legal requirements.When the trademark examiner expresses disapproval of the trademark. The trademark must adhere to all applicable rules and regulations. The trademark objection must be responded to within a period of thirty days. "/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="What is the duration for responding to a Trademark Objection?" text="The response to trademark objection is prepared by the trademark experts and must submit a response within three days."/>
  </div>
</wrapper>
</Container>
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
    <TradeMarkCards icon="1" text="The report and overview of authorized documents for trademark objection including the officially sanctioned and approved documents by the appropriate authority. "/>
  </div>
  <div>
    <TradeMarkCards icon="2" text="The report must present a concise analysis of the features and significance of the basis of objection."/>
  </div>
  <div>
    <TradeMarkCards icon="3" text="The document must contain consideration of the report pertaining to the examination of a trademark."/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper2">
  <div>
    <TradeMarkCards icon="4"  text="The application fee should be paid as per the direction of our Officials."/>
  </div>
  <div>
    <TradeMarkCards icon="5"  text="The trademark objection must be varified from our expert ends before forwarding to the deputy registrar."/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>
  </Box>
  )
}

export default TradeMarkObjection