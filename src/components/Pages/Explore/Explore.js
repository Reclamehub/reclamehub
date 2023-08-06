import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Flex, Button, Image, Box, Text, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import ChatBox from './ChatBox';
import DropDownBar from './DropDownBar';
import Card from './Card';
import "./Explore.css"
import ABC from './ImgForm';


export const Explore = () => {
  return (
    <>
    <Box bg={useColorModeValue('#fffffff','#000')} color={useColorModeValue('#000','#ffffff')} fontFamily={"poppins"} margin={"auto"}>
<Container fluid className='explore_banner_container'>
<div className='exp_links_div'>
  <p>support@reclame.com</p>
  <p>Learning resource</p>
  <p>8527352284</p>
</div>
<DropDownBar/>
</Container>

<Container className='exp_container'>
  <div className='exp_heading_wrapper'>
<div className='exp_heading_div'>
  <heading className="exp_heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </heading>
</div>
<div className='exp_text_div'>
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


 <Container className='form-img-toggle-container'>
 <div className='exp_heading_wrapper' style={{width:"90%"}}>
      <div className='exp_heading_div' style={{marginBottom:"1%"}}>
        <heading className="exp_heading" >How reclame hub can help your bussiness ?</heading>
      </div>
      <div className='exp_text_div'>
        <text className='exphelp_heading'>We believe in helping businesses at 360* angles so you can focus on your core operations business.</text>
        </div>
        </div>
  <div className='img_form_wrapper'>
    <div>
<Card img="expvector3.png" title1="company" title2="formation" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..."/>
<Card img="expvector2.png" title1="business registration &" title2="license" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..."/>
<Card img="expvector1.png" title1="brand &" title2="marketing" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..."/>
</div>
<div>
     <ABC/>
    </div>
    </div>
</Container>

  <Container className="exp_service_container">
  <div className='exp_heading_wrapper' style={{width:"90%"}}>
      <div className='exp_heading_div' style={{marginBottom:"1%"}}>
        <heading className="exp_heading" >Our services</heading>
      </div>
      <div className='exp_text_div' style={{width:"auto"}}>
        <text className='exphelp_heading'>Setup & Delivered 2,00,000 + New Companies and Business Licenses for MSMEs in India and continuing.</text>
        </div>
        </div>

        <div className='exp_service_card_wrapper'>
          <div>
          <Card img="expvector3.png" title1="company" title2="formation" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..."/>
<Card img="expvector2.png" title1="business registration &" title2="license" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..."/>
<Card img="expvector1.png" title1="brand &" title2="marketing" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..."/>
          </div>
       
        <div>
        <Card img="expvector3.png" title1="company" title2="formation" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..."/>
<Card img="expvector2.png" title1="business registration &" title2="license" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..."/>
<Card img="expvector1.png" title1="brand &" title2="marketing" text="We can incorporate all kinds of entities required to set up the business such as private limited companies, OPC, LLP, Partnership Firm, and many more..."/>
        </div>
        </div>
  </Container>



</Box>
</>
  )
}

