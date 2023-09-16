import React from 'react'
import { Container, } from "react-bootstrap"
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import ChatBox from './ChatBox';
import DropDownBar from './DropDownBar';
import { BsWhatsapp } from "react-icons/bs"
import Card from './Card';
import ExpBanner from './ExpBanner';
import ImgForm from './ImgForm';
import Clients from './Clients';
import Choose from './Choose';
import Media from './Media';
import ExpService from './ExpService';
import { Connect } from "../../Connect/Connect"
import "./Explore.css"


export const Explore = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('#fffffff', '#000')} color={useColorModeValue('#000', '#ffffff')} fontFamily={"poppins"} margin={"auto"}>
        <Container fluid className='explore_banner_container'>
          <div className='exp_links_div'>
          <a href="mailto:"> <p>support@reclame.com</p></a>
            {/* <p>Learning resource</p> */}
            <a href="https://wa.me/91857352284"
        className="">
          <div style={{display:"flex",justifyContent:"center",gap:"7px"}}>
          <p >8527352284</p>
        <BsWhatsapp  style={{marginTop:"2px"}}/>
        </div>
      </a>
          </div>
          <DropDownBar/>
        </Container>
<ExpBanner/>
        <div style={{
          background: colorMode === "light" ? '#fff' : "#1D1D1D",
          width: "100%", height: "20px",
          marginTop: "3.5%", marginBottom: "3%"
        }}>
        </div>
        {/* How reclame can help - section */}
        <Container>
          <div className='exp_heading_wrapper' style={{width:"100%"}}>
            <div className='exp_heading_div' >
              <heading className="exp_heading"  >How Your Business Can Benefit from Reclame Hub </heading>
            </div><br/>
            <div className='exp_text_div'>
              <text className='exphelp_heading'>Reclame Hub does not just promise success; we actually make it happen. With a track record of establishing over 1,000 + new Businesses and assisting MSMEs across India to obtain business licences. </text>
            </div>
          </div>
          <div className='cards_imgform_wrapper'>
            <div>
              <Card img="expvector3.png" title1="company formation" text="Starting a business requires a strong foundation. Our expertise in company incorporation, such as private limited, OPC, LLP, etc., ensures that your business kicks off with the right legal structure and licenses, enabling you to conquer the complexities of the business world with confidence" />
              <Card img="expvector2.png" title1="business registration & license" text="We assist businesses with the entire administrative process of business registration and obtaining the necessary licenses. We assist you to have special permits for your specific industry operations. " />
              <Card img="expvector1.png" title1="brand & marketing" text="We can leverage strategic planning, innovative campaigns, logo designing, trademarking, website development, digital marketing, and all such activities to create an online business presence. With Google Ads, we’ll help you be the   star on the digital horizon. Let your brand values echo exceptionally well across websites. Increase your visibility and expand your reach. " />
            </div>
            <div>
              <ImgForm />
            </div>
          </div>
        </Container>

        <div style={{
        background: colorMode === "light" ? '#ffffff' : "#1D1D1D",
        width: "100%", height: "20px",
        marginTop: "4.5%", marginBottom: "3%"
      }}>
      </div>
       <ExpService/>
       

        <Container fluid className="expbg_container">
          <img src='Bg.png' style={{ margin: "auto", width: "100%" }} />
        </Container>

        <Clients />

        <div style={{
          background: colorMode === "light" ? '#ffffff' : "#1D1D1D",
          width: "100%", height: "20px",
          marginTop: "3.5%", marginBottom: "3%"
        }}>
        </div>

        <Choose />

        <div style={{
          background: colorMode === "light" ? '#ffffff' : "#1D1D1D",
          width: "100%", height: "20px",
          marginTop: "3.5%", marginBottom: "3%"
        }}>
        </div>

        <Container className='mb-5'>
          <Media />
        </Container>

        <Connect />

      </Box>
    </>
  )
}

