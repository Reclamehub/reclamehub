import React from 'react'
import {Box , useColorModeValue} from "@chakra-ui/react"
import { Container } from 'react-bootstrap'
import "./FssaiCards.css"

const FssaiCards = (props) => {
  return (
    <Box bg={useColorModeValue('#ffffff', '#2D2D2D')} color={useColorModeValue('#000', '#fff')} borderRadius={"10px"} fontFamily={"poppins"} margin={"auto"} width={"100%"}>
    <Container className='fssai_card_div'>
<div className='fssai_icon_div'>
        <img src={props.img} className='fssai_icon' />
      </div>
      <div className='fssai_title_div'>
        <heading className="fssai_title">{props.title1}</heading><br/>
        <text className='fssai_text'>{props.text}</text>
      </div>
   </Container>
  </Box>
  )
}

export default FssaiCards