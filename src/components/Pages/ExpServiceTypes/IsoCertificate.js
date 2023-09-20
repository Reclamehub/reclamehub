import React from 'react'
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import ExpBanner from '../Explore/ExpBanner'
import ExpServiceTypeForm from "./ExpServiceTypeForm"
import { Container } from 'react-bootstrap'
import "./IsoCertificate.css"

const IsoCertificate = () => {
    const { colorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('#fffffff', '#000')} color={useColorModeValue('#000', '#ffffff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
      <ExpBanner/>
    </Container>

    {/* <Container>
    <div className='exp_iso_heading_div' >
              <heading className="exp_iso_heading">About ISO Certification </heading>
            </div>
    </Container> */}
    
    {/* <Container className='exp_srvctype_formcontainer'>
<ExpServiceTypeForm/>
    </Container> */}



    <Container>
        <div className='exp_iso_heading_div'>
            <heading className="exp_iso_heading">What is ISO?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>An ISO Certification is Management System Certification of any Single ISO Standard (i.e ISO 9001) or Multiple standard Management System Certification together (i.e ISO 9001, ISO 14001, ISO 45001 etc so on) -There are many contractual ISO Standards which is published by International Organization for Standardization (ISO). These Contractual Standards are ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, ISO 13485 etc and many more. Which are being adopted by the organization for implementation and ISO Certification. These Standards are the contractual standards. Developed by Technical committee members of International Organization for Standardization. These ISO Standards adherence to the World Trade Organization (WTO) principles in the Technical Barriers to Trade (TBT). Where each ISO Standard has their own specific purpose for use in the organization for ISO Certification. All the requirements provided in the Management System Standards are in generic in nature, that is it can be adopted for implementation by any type, size of the organization irrespective of their nature of activities. for Example, you can see below the purpose of different ISO Standards are given below:</text>
        </div>
    </Container>

    <Container>
        <div className='exp_iso_heading_div'>
            <heading className="exp_iso_heading">What is IAF ?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>IAF stands for International Accreditation Forum. IAF is the world most recognised association of global Accreditation bodies and that are responsible for conformity assessment in various fields of quality management systems. An ISO Certification issued by IAF member accreditation body carries more value and recognition in the world. Even though, Government authorities prefer it for fulfilling eligibility criteria of government tenders.</text>
        </div>
    </Container>

    <Container>
        <div className='exp_iso_heading_div'>
            <heading className="exp_iso_heading">How does ISO Certification help in Business expansion?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>IAF stands for International Accreditation Forum. IAF is the world most recognised association of global Accreditation bodies and that are responsible for conformity assessment in various fields of quality management systems. An ISO Certification issued by IAF member accreditation body carries more value and recognition in the world. Even though, Government authorities prefer it for fulfilling eligibility criteria of government tenders.</text>
        </div>
    </Container>
{/*  */}
    <Container>
        <div className='exp_iso_subheading_div'>
            <heading className="exp_iso_heading">ISO 9001 :  2015 Standard – it is a Quality Management System Standard (QMS) </heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>The objective of this standards is that when organization adopt for implementation to improve the overall performance of the organization, enhance the ability to consistently provide products and services that meet customer, applicable statutory & regulatory requirements and to enhance customer satisfaction</text>
        </div>
    </Container>

    <Container>
        <div className='exp_iso_subheading_div'>
            <heading className="exp_iso_heading">ISO 14001 : 2015 Standard– it is an Environmental Management System Standard (EMS)  </heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>The objective of this standards is that when organization adopt for implementation to improve the overall performance of the organization, enhance the ability to consistently provide products and services that meet customer, applicable statutory & regulatory requirements and to enhance customer satisfaction</text>
        </div>
    </Container>

    <Container>
        <div className='exp_iso_subheading_div'>
            <heading className="exp_iso_heading">ISO 45001 : 2018 Standard – it is an Occupational Health and Safety Management System Standard (OHSMS)  </heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>The objective of this Standard is that when organization adopt for implementation to provide framework for managing OH&S risks and opportunities, prevent work-related injury and ill health to workers and to provide safe and healthy workplaces</text>
        </div>
    </Container>

    <Container>
        <div className='exp_iso_subheading_div'>
            <heading className="exp_iso_heading">ISO 27001 :  </heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>describes a best practice of company who involves in the information security management system (ISMS)</text>
        </div>
    </Container>

    <Container>
        <div className='exp_iso_subheading_div'>
            <heading className="exp_iso_heading"> CE MARKING :  </heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>on any brand is a manufacturer's affirmation that the product has complied with the necessary requirements of the applicable European health, safety, and environmental protection benchmark.</text>
        </div>
    </Container>

    <Container>
        <div className='exp_iso_subheading_div'>
            <heading className="exp_iso_heading">ISO 50001  : </heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>Describes best energy management practices which outline using energy efficiently helps organizations save money as well as helping to conserve resources and tackle climate change.</text>
        </div>
    </Container>
    </Box>
  )
}

export default IsoCertificate
