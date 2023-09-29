import React from 'react'
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import ExpServiceBanner from './ExpServiceBanner'
import ExpServiceTypeForm from "./ExpServiceTypeForm"
import { Container } from 'react-bootstrap'
import "./IsoCertificate.css"

const IsoCertificate = () => {
    const { colorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('#fffffff', '#000')} color={useColorModeValue('#000', '#ffffff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
      <ExpServiceBanner heading="Claim the Best ISO Certification for Your Business" text="Apply the Best ISO Certification for your business. Our professionals at Reclame Hub Will Guide you and take care of the entire ISO Certification process of until you receive the Certification." img="expiso.png"/>
    </Container>

  <Container className='d-flex flex-column justify-content-start align-items-start'>
        <div className='exp_iso_heading_div'>
            <heading className="">What is ISO?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>International Standardization Organization (ISO) was founded in 1947. Its main objective is to create guidelines and standards for different types of industries. Because no one could tell which product was good for the customer. Thus,  ISO Came into existence and made some international standards for different kinds of products and services so the customer can trust the quality. Its main purpose is to maintain Quality in the international marketplace. ISO also make guidelines for some industries so all the international organization will work on the same format. It makes it easy to coordinate with local authorities and customers.</text>
        </div>
    </Container>

    <Container className='d-flex flex-column justify-content-start align-items-start'>
        <div className='exp_iso_heading_div'>
            <heading className="">What is IAF ?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>International Accreditation Forum (IAF) is an organization that brings accreditation bodies from different countries and regions. An ISO Certification endorsed by an IAF member holds significant international recognition. It can take your organization's product/service to the next level. Also, ISO Certificates approved by IAF members are required for many government tenders. It can increase the chances of getting that tender. </text>
        </div>
    </Container>

    <Container className='d-flex flex-column justify-content-start align-items-start'>
        <div className='exp_iso_heading_div'>
            <heading className="">Why is ISO Certification Important? </heading>
        </div>
        <div className='exp_iso_text_div'>
           <ul>
            <li>An ISO Certificate approved by an IAF member holds so much power. It makes you stand out from the crowd and shows your product as a Quality product among others. Many countries only allow those products that have ISO Certification. </li>
          <li>Also, it saves so much paperwork and additional costs while entering into the international marketplace. You don’t have to go through tests to show your product quality. ISO Certification is valid in all the respective countries. It helps you to maintain product waste and energy. </li>
          <li>ISO certificate also boosts employee moral support, increases organisational reputation, saves you from legal liabilities, and manages financial loss risk. </li>
           </ul>
        </div>
    </Container>
{/*  */}
<Container className='d-flex flex-column justify-content-start align-items-start'>
        <div className='exp_iso_heading_div'>
            <heading className="">How Does ISO Certification Help Businesses to Grow?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>Having an ISO certification makes you stand out from the crowd and shows that you hold more credibility, transparency, and professionalism in your work. When you show the customer that you have ISO certification on that product, they will trust you more. Many Countries ask for ISO certification if you're exporting the product outside of your home country. Sometimes they don’t consider local authorities' documents as proof that your product meets the international standards criteria. There, the International Standardization Organization (ISO) comes in and helps them to understand your product and its quality level. 
ISO certification can avoid many potential legal issues because each country has its criteria for quality certification but ISO certification is valid in most countries. You don’t have to go through much paperwork when you enter an international market. Even if you only work in one country still many people see ISO certification as a mark of a high-quality product. 
</text>
        </div>
    </Container>

    <Container className='d-flex flex-column justify-content-start align-items-start'>
        <div className='exp_iso_heading_div'>
            <heading className="">Which ISO Certificate Is Best for You? </heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>There are many different types of ISO standards for different kinds of companies, products, and businesses. For example, if you deal in Quality Water Products, your ISO standard will be ISO 5667, but if you're dealing with any Meat-related products, your ISO standard will be ISO 22000. So it depends on the product and industry you work in. You can apply Some of the ISO standards without any certifications.<br/>
            If you're confused about which ISO standard is good for you then our professional can help you in this journey. Where we do all the work and you don’t have to worry about anything. We will take care of all the important things and guide you through the process until you get the ISO Certification for your product / Service. 
             </text>
        </div>
    </Container>

    <Container className='diff_category_container d-flex flex-column justify-content-start align-items-start'>
        <div className='exp_iso_heading_div'>
            <heading className="">Different Categories of ISO Certification </heading>
        </div>
        <div className='exp_iso_text_div'>
            <text>Here is a list of different types of ISO standards grouped by their categories and where they get used, Check them and find out in which category you fall:</text>
        </div><br/>
            <div className='exp_iso_pTag_div'>
            <p className='ptag_heading'>Quality Management and Assurance:</p>
            <p> ISO 9001 - Uses for Quality Management Systems</p>
            <p> ISO 9000 - Uses for Fundamentals and Vocabulary</p>
            <p> ISO 9004 - Uses for Quality Management for Sustained Success</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Environmental Management:</p>
            <p>  ISO 14001 - Uses for Environmental Management Systems</p>
            <p>  ISO 14000 - Uses for Environmental Management - Overview and Principles</p>
            <p>  ISO 14004 - Uses for Environmental Management Systems - General Guidelines  </p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Information Security:</p>
            <p> ISO/IEC 27001 - Uses for Information Security Management Systems</p>
            <p> ISO/IEC 27002 - Uses for Code of Practice for Information Security controls</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Occupational Health and Safety:</p>
            <p> ISO 45001 - Uses for Occupational Health and Safety Management Systems</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Food Safety Management:</p>
            <p> ISO 22000 -  Uses for Food Safety Management Systems</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Energy Management:</p>
            <p> ISO 50001 - Uses for Energy Management Systems</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Risk Management:</p>
            <p> ISO 31000 - Uses for Risk Management - Principles and Guidelines</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Medical Devices: </p>
            <p>ISO 13485 - Uses for Medical Devices - Quality Management Systems</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Automotive:</p>
            <p> ISO 26262 - Uses for Functional Safety for Road Vehicles</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Aerospace:</p>
            <p> ISO 26262 - Uses for Functional Safety for Road Vehicles</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>IT and Software:</p>
            <p> ISO/IEC 20000 - Uses for IT Service Management</p>
            <p>ISO/IEC 12207 - Uses for Software Life Cycle Processes</p>
            <p>ISO/IEC 27018 - Uses for Protection of Personally Identifiable Information in Public Clouds</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Social Responsibility:</p>
            <p>ISO 26000 - Uses for Guidance on Social Responsibility</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Energy Efficiency:</p>
            <p> ISO 50002 - Uses for Energy Audits. </p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Supply Chain Management:</p>
            <p> ISO 28000 - Uses for Specification for Security Management Systems for the Supply Chain</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Country Codes:</p>
            <p> ISO 3166 - Uses for Codes for the Names of Countries</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Language and Script Codes:</p>
            <p> ISO 639 -  Uses for Codes for the Representation of Names of Languages </p>
            <p>ISO 15924 - Codes for the Representation of Names of Scripts</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Paper Sizes:</p>
            <p> ISO 216 - Uses for Paper Sizes</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Photography:</p>
            <p> ISO 12232 - Uses for Digital Still Camera Image Quality</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Quality of Water:</p>
            <p> ISO 5667 - Uses for Water Quality Sampling</p>
            </div>

            <div className='exp_iso_pTag_div'>
            <p>Currencies:</p>
            <p>ISO 4217 - Uses for Codes for the Representation of Currencies</p>
            </div>
       
    </Container>

   

    </Box>
  )
}

export default IsoCertificate
