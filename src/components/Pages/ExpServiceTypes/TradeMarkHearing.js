import React from 'react'
import ExpServiceBanner from "./ExpServiceBanner"
import { Container } from 'react-bootstrap'
import {Box,useColorModeValue} from "@chakra-ui/react"
import FssaiCards from './FssaiCards'
import "./IsoCertificate.css"
import "./TAN.css"
import { TradeMarkCards } from './TradeMarkCards'

const TradeMarkHearing = () => {
  return (
    <Box bg={useColorModeValue('#fff', '#000')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="trademark hearing" text="Welcome to Reclame Hub, the perfect destination for trademarks and safeguarding. We recognize the immense value of your brand and the paramount importance of safeguarding its legal protection."img="trademark3.png"/>
  </Container>

  <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">About Trademark Hearing</heading>
        </div>
        <div className='exp_iso_text_div'>
          <p>The Trademark Registry hosts a trademark hearing to address any issues or objections raised during the trademark registration process. The application to register or oppose a trademark and trademark hearing serves as a forum for trademark owners and other interested parties to make their cases, provide supporting documentation, and raise objections in relation to the application to register or oppose a trademark. Trademark hearings are conducted in order to guarantee fair and impartial decision-making. Its main objective is to thoroughly assess a trademark application's registration and validity.</p>
          <p>Get ready to be captivated, enthralled, and utterly amazed by this one-of-a-kind event.Immerse yourself in a world of trademark brilliance, where every moment is filled with anticipation and excitement.</p>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">What Does Our Trademark Hearing Process Include?</heading>
        </div>
<Container fluid className='fssai_cards_main_container'> 
<wrapper className="fssai_cards_wrapper1">
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Put in an opposition notice" text="You must submit a notice of opposition to the relevant authority if you are opposing a trademark application. The grounds for opposition should be stated in this notice in full, along with any supporting documentation."/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Legal Representation" text=" Our comprehensive trademark registration service includes the trademark objections or opposition process. We ensure that your interests are protected and advocated effectively. Our solid legal presence helps craft persuasive arguments to defend and uphold the rights of your esteemed brand."/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Complete solution" text="Our team is here to provide responses and objectives in a timely and effective manner. We guarantee our comprehensive assistance in preparing all essential legal documentation for the hearing with utmost effectiveness."/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper2">
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Consultation from expert legal professionals" text="Our highly skilled team will conduct a meticulous examination of your trademark application, ensuring a thorough review. Subsequently, we will offer a comprehensive consultation, providing you with detailed insights and expert advice."/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Prepare the required paperwork" text="Collect all the necessary paperwork, including the trademark application, usage records, and any other documents that support your claim."/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">OUR PROCESS</heading>
        </div>
<Container fluid className='fssai_cards_main_container'> 
<wrapper className="fssai_cards_wrapper1">
  <div>
    <TradeMarkCards icon="1" text="Visit www.reclamehub.in and register through the form fill-up. Make sure that you have submitted the trademark application to the relevant Indian authorities. Information such as the trademark itself, the products and services it refers to, and other supplementary documentation."/>
  </div>
  <div>
    <TradeMarkCards icon="2" text="Our expert team contacts you for discussion and requirements through a scheduled consultation. "/>
  </div>
  <div>
    <TradeMarkCards icon="3" text="You need to provide all necessary information, like prior use of the trademark, based on which the trademark office will conduct an examination after receiving your application and issue an examination report."/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper2">
  <div>
    <TradeMarkCards icon="4"  text="Once the necessary information has been received, the trademark hearing process begins"/>
  </div>
  <div>
    <TradeMarkCards icon="5"  text="The updates and information regarding the trademark hearing of your business are successfully registered."/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>
  </Box>
  )
}

export default TradeMarkHearing