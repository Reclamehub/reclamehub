import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Box,useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import ChatBox from './ChatBox';
import DropDownBar from './DropDownBar';
import Card from './Card';
import "./Explore.css"
import ImgForm from './ImgForm';
import Clients from './Clients';
import Choose from './Choose';
import Media from './Media';
import {Connect} from"../../Connect/Connect"


export const Explore = () => {
  const { colorMode } = useColorMode();
  return (
    <>
    <Box bg={useColorModeValue('#fffffff','#000')} color={useColorModeValue('#000','#ffffff')} fontFamily={"poppins"} margin={"auto"}>
<Container fluid className='explore_banner_container'>
<div className='exp_links_div'>
  <p>support@reclame.com</p>
  <p>Learning resource</p>
  <p>8527352284</p>
</div>
{/* <DropDownBar/> */}
</Container>

<Container className='exp_container'>
  <div className='exp_top_heading_wrapper'>
<div className='exp_top_heading_div'>
  <heading className="exp_heading">Lorem Ipsum is simply dummy text of<br/> the printing. </heading>
</div>
<div className='exp_top_text_div'>
<text>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
</text>
</div>
<div className='exp_btn_div'>
<button className='exp_btn'>arrange call</button>
<button className='exp_btn'> live chat</button>
</div>
</div>
<div>
<img src="Ellipse60.png" alt="explore-top-img"/>
</div>
</Container>

<div style={{
   background: colorMode === "light" ? '#fff' : "#1D1D1D",
  width:"100%",height:"20px",
marginTop:"3.5%",marginBottom:"3%"}}>
</div>

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
<Card img="expvector3.png" title1="company" title2="formation" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..."/>
<Card img="expvector2.png" title1="business registration &" title2="license" text="We can secure all kinds of licenses / registrations required for running different kinds of business legally and hassle free."/>
<Card img="expvector1.png" title1="brand &" title2="marketing" text="Logo designing, Trademark, Website Development, Digital Marketing, Do all such activities to create Online Business Presence."/>
</div>
<div>
     <ImgForm/>
    </div>
    </div>
</Container>
<div style={{
   background: colorMode === "light" ? '#fff' : "#1D1D1D",
  width:"100%",height:"20px",
marginTop:"4.5%",marginBottom:"3%"}}>
</div>
  <Container className="exp_service_container">
  <div className='exp_heading_wrapper'>
      <div className='exp_heading_div' >
        <heading className="exp_heading" >Our services</heading>
      </div>
      <div className='exp_text_div' style={{width:"auto"}}>
        <text className='exphelp_heading'>Setup & Delivered 2,00,000 + New Companies and Business Licenses for MSMEs in India and continuing.</text>
        </div>
        </div>
        <div className='exp_service_card_wrapper'>
          <div>
          <Card img="expvector3.png" title2="iso" text="the iso certificate helps to enhance the credibility and authority of your company as well as the overall effectiveness of the company ."/>
<Card img="expvector2.png"  title2="copy right" text="copyright is the legal right of the owner of intellectual property which means that the creator of products and anyone they give permission to are the ones the only with the exclusive right to reproduce the work."/>
<Card img="expvector1.png"  title2="fssai" text="FSSAI is an independent agency that reports to the Indian Ministry of Health and Family Welfare. Through the regulation and oversight of food safety."/>
          </div>
        <div>
        <Card img="expvector3.png"  title2="trademark" text="a trademark registration is the process that proves ownership and the brand , logo , or name . it also protects brand from any illegal use by a third party."/>
<Card img="expvector2.png"  title2="gst msme" text="gST registration is required for firms that have a turnover exceeding INR  20 lakh. also the limit is 10 lakh in northern hilly states."/>

        </div>
        </div>
  </Container>
  
  <Container fluid className="expbg_container">
    <img src='Bg.png' style={{margin:"auto",width:"100%"}}/>
    </Container> 

  <Clients/>
  <div style={{
   background: colorMode === "light" ? '#ffffff' : "#1D1D1D",
  width:"100%",height:"20px",
marginTop:"3.5%",marginBottom:"3%"}}>
</div>
<Choose/>
<div style={{
   background: colorMode === "light" ? '#ffffff' : "#1D1D1D",
  width:"100%",height:"20px",
marginTop:"3.5%",marginBottom:"3%"}}>
</div>
<Container className='mb-5'>
  <Media/>
  </Container>

<Connect/>

</Box>
</>
  )
}

