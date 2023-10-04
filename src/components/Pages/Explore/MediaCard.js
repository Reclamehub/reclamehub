import React from 'react'
import { Container } from 'react-bootstrap'
import { Box, useColorModeValue,  } from "@chakra-ui/react"
import "./MediaCard.css"

const MediaCard = (props) => {
 
  return (
    <>
   
      <Box bg={useColorModeValue('#ffffff', '#2D2D2D')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} width={""} borderRadius={"10px"} className='card-box' style={{marginTop:"2rem"}}>
        <Container className='expmedia_card_container '>
      <div className='expmedia_card_div'>
      <div className='media_card_text_div'>
         <img src={props.img} alt="media-icon"/>
      </div>
      </div>
    </Container>
    </Box>


</>
  )
}

export default MediaCard