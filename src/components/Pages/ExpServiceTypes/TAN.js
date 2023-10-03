import React from 'react'
import ExpServiceBanner from "./ExpServiceBanner"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Box,useColorModeValue} from "@chakra-ui/react"
import "./IsoCertificate.css"
import "./TAN.css"

export const TAN = () => {
  return (
<Box bg={useColorModeValue('#fff', '#000')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="Get the Straightforward Process of Securing Tan Registration in India" text="Would you like to inquire about the TAN registration in India? Reclame Hub is duly recognized and authorized as a TAN Facilitation Center. Experience our valued customer support with just one click. "img="tan.png"/>
  </Container>

  
  <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">TAN Registration </heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>We have all the details you need to know about TAN registration. The topic of discussion is the process of registering for a Tax Deduction and Collection Account Number (TAN).  </p>
            <p>The Tax Deduction and Collection Number (TAN), also known as the Tax Deduction and Collection Number, is an essential 10-digit alphanumeric identifier that must be acquired by individuals and other esteemed entities (such as the distinguished Private Limited Company, LLP, and the like) responsible for Tax Deduction at Source (TDS) or Tax Collection at Source (TCS).</p>
            <p>Introducing Reclame Hub, the perfect solution for your TAN registration needs. Our esteemed services provide a seamless and opulent experience, free from any inconvenience. Trust us to facilitate the expeditious acquisition of your TAN registration, ensuring an easy one from start to finish. </p>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className= " pan_card">
        <div className='exp_iso_heading_div mb-2 '>
            <heading className="">Explore if you're eligible to apply!</heading>
        </div>
        <div className='exp_iso_text_div ' style={{textAlign:"center"}}>
            <p>Whether you're a diligent taxpayer or a responsible corporate entity, TAN is your gateway to seamless TDS deduction and filing TDS returns. Don't miss out on this mandatory requirement to stay in sync with regulations. Apply for TAN today!</p>
            </div>
    </Container>
    </Container>
  </Box>
  )
}

