import React from 'react'
import { Box,useColorModeValue,useColorMode, } from "@chakra-ui/react"
import {Container,Row,Col} from "react-bootstrap"
import "./Card.css"
const Card = (props) => {
    const { colorMode } = useColorMode();
  return (
    <div className='exphelpcard_container'>
  <div className='exphelp_card_div'
      style={{
        backgroundColor: colorMode === "light" ? '#ffffff' : "#1D1D1D",
    }}>
          <div className='expcard_icon_div'>
    <img src={props.img} className='expcard_icon'/>
    </div>
    <div className='card_title_div'>
      <heading className="card_title">{props.title1}<br/>{props.title2}</heading><br/>
      <text className='card_text'>{props.text}</text>
    </div>
        </div>
      </div>
  )
}

export default Card