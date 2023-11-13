import React from 'react'
import { Container } from 'react-bootstrap'
import ExpServiceBanner from "./ExpServiceBanner"
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
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
  </Box>
  </>
  )
}

export default GstRegistration
