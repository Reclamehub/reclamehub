import React from 'react'
import { Box, useColorModeValue,  } from "@chakra-ui/react"
import { Container, Row, Col } from "react-bootstrap"
import "./ChooseCard.css"
const Card = (props) => {

  return (
    // explore-help + service-cards
    <Box bg={useColorModeValue('#ffffff', '#2D2D2D')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} width={"100%"} borderRadius={"10px"}>
      <Container className='expchoose_card_div'>

      <div className='choose_card_text_div'>
          <text className='choose_card_text'>{props.text}</text>
        </div>
      
</Container>
    </Box>
  )
}

export default Card