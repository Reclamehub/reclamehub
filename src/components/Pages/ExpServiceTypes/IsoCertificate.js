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
            <text>International Standardization Organization (ISO) was founded in 1947. Its main objective is to create guidelines and standards for different types of industries. Because no one could tell which product was good for the customer. Thus,  ISO Came into existence and made some international standards for different kinds of products and services so the customer can trust the quality. Its main purpose is to maintain Quality in the international marketplace. ISO also make guidelines for some industries so all the international organization will work on the same format. It makes it easy to coordinate with local authorities and customers.</text>
        </div>
    </Container>

    <Container>
        <div className='exp_iso_heading_div'>
            <heading className="exp_iso_heading">What is IAF ?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>International Accreditation Forum (IAF) is an organization that brings accreditation bodies from different countries and regions. An ISO Certification endorsed by an IAF member holds significant international recognition. It can take your organization's product/service to the next level. Also, ISO Certificates approved by IAF members are required for many government tenders. It can increase the chances of getting that tender. </text>
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
