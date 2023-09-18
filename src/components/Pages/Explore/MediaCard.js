import React from 'react'
import { Box, useColorModeValue, useColorMode, } from "@chakra-ui/react"
import "./MediaCard.css"

const MediaCard = (props) => {
  const { colorMode } = useColorMode();
  return (
    // media-cards
    <div className='expmedia_card_container'>
      <div className='expmedia_card_div'
        style={{
          backgroundColor: colorMode === "light" ? '#1D1D1D' : "#1D1D1D",
        }}>
        <div>
        <div className='media_card_text_div'>
         <img src={props.img} alt="media-icon"/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MediaCard