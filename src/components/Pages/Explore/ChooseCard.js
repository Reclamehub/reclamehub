import React from 'react'
import { Box, useColorModeValue, useColorMode, } from "@chakra-ui/react"
import { Container, Row, Col } from "react-bootstrap"
import "./ChooseCard.css"
const Card = (props) => {
  const { colorMode } = useColorMode();
  return (
    // explore-help + service-cards
    <div className='expchoose_card_container'>
      <div className='expchoose_card_div'
        style={{
          backgroundColor: colorMode === "light" ? '#1D1D1D' : "#1D1D1D",
        }}>
        <div>
        <div className='choose_card_text_div'>
          <text className='choose_card_text'>{props.text}</text>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Card