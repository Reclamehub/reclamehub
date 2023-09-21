import React from 'react'
import { Box, useColorModeValue, useColorMode, } from "@chakra-ui/react"
import { Container, Row, Col } from "react-bootstrap"
import "./Card.css"
const Card = (props) => {
  const { colorMode } = useColorMode();
  return (
    // explore-help + service-cards
    <Box bg={useColorModeValue('#FFFAF0', '#2D2D2D')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} width={"100%"}>
    <div className='exphelpcard_container'>
      <div className='exphelp_card_div'>
    <div>
        <div className='expcard_icon_div'>
          <img src={props.img} className='expcard_icon' />
        </div>
        <div className='card_title_div'>
          <heading className="card_title">{props.title1}</heading><br></br>
          <text className='card_text'>{props.text}</text>
        </div>
      </div>
      </div>
    </div>
    </Box>
  )
}

export default Card