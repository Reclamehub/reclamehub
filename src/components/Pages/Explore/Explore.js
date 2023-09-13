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
          {/* <DropDownBar/> */}
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
          <div className='exp_heading_wrapper'>
            <div className='exp_heading_div' >
              <heading className="exp_heading" >How reclame hub can help your bussiness ?</heading>
            </div>
            <div className='exp_text_div'>
              <text className='exphelp_heading'>We believe in helping businesses at 360* angles so you can focus on your core operations business.</text>
            </div>
          </div>
          <div className='cards_imgform_wrapper'>
            <div>
              <Card img="expvector3.png" title1="company formation" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..." />
              <Card img="expvector2.png" title1="business registration & license" text="We can secure all kinds of licenses / registrations required for running different kinds of business legally and hassle free." />
              <Card img="expvector1.png" title1="brand & marketing" text="Logo designing, Trademark, Website Development, Digital Marketing, Do all such activities to create Online Business Presence." />
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

