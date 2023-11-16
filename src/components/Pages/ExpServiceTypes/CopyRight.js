import React from 'react'
import ExpServiceBanner from "./ExpServiceBanner"
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Box,useColorModeValue} from "@chakra-ui/react"
import FssaiCards from './FssaiCards'
import { TradeMarkCards } from './TradeMarkCards'

const CopyRight = () => {
  return (
    <Box bg={useColorModeValue('#fffffff', '#000')} color={useColorModeValue('#000', '#ffffff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="Copyright Registration" text ="Safeguard Your Creative Masterpieces with Confidence! Are you an artist, writer, musician, or creator of any kind? We are here for you."img="trademark4.png"/>
  </Container>

  <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">About Copyright Registration</heading>
        </div>
        <div className='exp_iso_text_div'>
           <p>Creativity needs to be protected. The creator needs protection from misuse of the same. If someone is using your work without your permission, you have the right to take legal action. The copyright holder has the exclusive right to assign the rights to a third party.</p>
           <p>Copyright prohibits the production, duplication, execution, or dissemination of any rendition of the copy piece. The dissemination and modification of the material through various channels including broadcast, radio, or cable networks is prohibited.</p>
           <p>The protection of copyrighted work in India is made through the express permission of the author or creator. The author has the exclusive right to transform their work into any medium they choose. The Copyright Act, of 1957 sets out rules and procedures around how copyrighted work can be used and protected from unauthorised use of the same. </p>
        <p>The protection of the rights of the owner and people who want to use the work. One can do many things with registered copyright work including copy, change or sell as well as prevent others from doing the same without permission. The creation and interaction protect the creative things that owners create.</p>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Advantages of copyright protection</heading>
        </div>
<Container fluid className='fssai_cards_main_container'> 
<wrapper className="fssai_cards_wrapper1">
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Copyright Protection" text="The creation of intellectual works can get protection of copyright which makes it impossible for others to exploit the work without paying any royalties or remuneration. Copyright inspires people to create a favourable climate to stimulate economic activities."/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Owner’s rights" text=" The intellectual property provides the right over dissemination, translation, reproduction, and adaptation of work to the creator of the work."/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Economic Rightst" text="Copyright protection provides creators control to use their literary and artistic work to get benefits and economic rewards of investment and creativity."/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper2">
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Paternity Right" text="Copyright provides moral rights to the creator or author for certain kinds of material to object to the modification or derogatory action for the work as an integrity right."/>
  </div>
  <div>
    <FssaiCards img="expfssaiicon.png" title1="Type of Work" text="The intellectual property that can get the protection of copyright includes artistic work, music, cinematograph film, sound recordings, literary works, dramatic works, software codes and algorithms, etc. "/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">Step-by-Step Process of Copyright Registration</heading>
        </div>
<Container fluid className='fssai_cards_main_container'> 
<wrapper className="fssai_cards_wrapper1">
  <div>
    <TradeMarkCards icon="1" text="Connect with the Expert team of Reclame Hub to discuss specific requirements for your business through the form fillup provided on www.Reclame Hub.in."/>
  </div>
  <div>
    <TradeMarkCards icon="2" text="Once the needs and requirements of your business are confirmed, we assign you to our dedicated task manager to understand your needs and provide solutions for the entire process."/>
  </div>
  <div>
    <TradeMarkCards icon="3" text="Our team provides a support system to track the progress of the application and stay updated with the progress of your project, the remaining parts, and all."/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper1">
  <div>
    <TradeMarkCards icon="4"  text="The copyright registration application form can be done online from the government copyright website or through our expert copyright team. "/>
  </div>
  <div>
    <TradeMarkCards icon="5"  text="Registrar's office reviews your application and determines whether it meets all the requirements for copyright protection."/>
  </div>
  <div>
    <TradeMarkCards icon="6"  text="Your certification goes to your doorstep after approval of the application as official proof of your copyright claim."/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='d-flex flex-column justify-content-start align-items-start inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">When do we need copyright protection?</heading>
        </div>
        <div className='exp_iso_text_div'>
           <p>Copyright protection requires unique, original, and tangible work such as:</p>
<ul>
    <li>Unique work includes work where the output of your skill, labour, and intellectual creation does not replicate the work of anyone else. It also includes the prevention of copying things like writing a poem.</li>
    <li>Tangible work includes work that is not just an idea but also an articulation of ideas in a physical form. The ideas we make are protected from copyright infringement from the moment we write down the complete blueprints of it. </li>
</ul>
        </div>
    </Container>
    </Container>
  </Box>
  )
}

export default CopyRight