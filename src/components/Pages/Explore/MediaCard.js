import React from 'react'
import { Container } from 'react-bootstrap'
import { Box, useColorModeValue,  } from "@chakra-ui/react"
import "./MediaCard.css"

const MediaCard = (props) => {
 
  return (
    // media-cards
    <Container className='expmedia_card_container'>
      <Box bg={useColorModeValue('#ffffff', '#2D2D2D')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} width={"100%"} borderRadius={"10px"}>
      <div className='expmedia_card_div'>
        <div>
        <div className='media_card_text_div'>
         <img src={props.img} alt="media-icon"/>
        </div>
      </div>
      </div>
    </Box>
    </Container>
  )
}

export default MediaCard