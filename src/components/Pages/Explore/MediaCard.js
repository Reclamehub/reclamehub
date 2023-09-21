import React from 'react'
import { Box, useColorModeValue,  } from "@chakra-ui/react"
import "./MediaCard.css"

const MediaCard = (props) => {
 
  return (
    // media-cards
    <div className='expmedia_card_container'>
      <Box bg={useColorModeValue('#FFFAF0', '#2D2D2D')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} width={"100%"}>
      <div className='expmedia_card_div'>
        <div>
        <div className='media_card_text_div'>
         <img src={props.img} alt="media-icon"/>
        </div>
      </div>
      </div>
    </Box>
    </div>
  )
}

export default MediaCard