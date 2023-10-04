import React from 'react'
import {Box , useColorModeValue} from "@chakra-ui/react"
import { Container } from 'react-bootstrap'
import "./TradeMarkCards.css"

export const TradeMarkCards = (props) => {
  return (
    <Box bg={useColorModeValue('#ffffff', '#2D2D2D')} color={useColorModeValue('#000', '#fff')} borderRadius={"10px"} fontFamily={"poppins"} margin={"auto"} width={"100%"} className='card-box'>
    <Container className='tm_card_div'>
<div className='tm_icon_div'>
   <text className='tm_icon'>{props.icon}</text>
    </div>
    <div className='tm_title_div'>
      <text className='tm_text'>{props.text}</text>
    </div>
 </Container>
</Box>
  )
}

