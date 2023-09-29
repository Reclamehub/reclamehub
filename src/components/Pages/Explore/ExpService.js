import React from 'react'
import Card from './Card';
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Container } from 'react-bootstrap'
import "./ExpService.css"
import { Link } from 'react-router-dom';

const ExpService = () => {
  return (
    <>
 <Container className="exp_service_container">
        <div className='exp_heading_wrapper'>
          <div className='exp_heading_div' >
            <heading className="exp_heading" >Our services</heading>
          </div>
          <div className='exp_text_div' style={{ width: "auto" }}>
            <text className='exphelp_heading'>Our primary objective is to facilitate you all adopt a business mindset and use our services as a launching pad for your success. Let us handle the paperwork and numbers so you can focus on what you do best-growing your business.</text>
          </div>
        </div>
        <div className='exp_service_card_wrapper'>
          <div>
           <Link to="/ISO-Certification">
            <Card img="sisoicon.png" title1="iso" text="Do you want to stand tall in the competition? Get yourself an ISO certification. We ensure your smooth and successful ISO certification process to raise the flag of quality and credibility, showing the world your commitment to quality management."/>
            </Link>
            <div>
              <Card img="scopyicon.png" title1="copy right" text="Creativity is like a prized jewel. Our copyright services protect your creations by registering them, giving you exclusive rights, and prohibiting unauthorized use or infringement. You can relax knowing that our trustworthy and comprehensive assistance is going to set you up to concentrate on growth and development." />
            </div>
            <Card img="sfssaiicon.png" title1="fssai" text="FSSAI protects the quality of your product through Food Safety. Our services ensure you sail the safe waters of food standards, ensuring your culinary treasures are compliant and safe for all who partake." />
          </div>
          <div>
            <Card img="stmicon.png" title1="trademark" text="Your brand is sacred, mate. Protecting your brand with trademark registration establishes a strong legal foundation for your business. So sit back and relax. Our crew is there to guide you through the process, safeguarding your brand from any infringement by anyone who dares cross its path. 
" />
            <Card img="sgsticon.png" title1="gst msme" text="In the tumultuous environment of taxes, GST registration is your guiding star. Our crew ensures you are compliant with all regulations, leaving you free to focus on sailing toward your goals." />

          </div>
        </div>
      </Container>
      </>
  )
}

export default ExpService