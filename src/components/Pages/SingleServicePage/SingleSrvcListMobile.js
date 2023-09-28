import React from 'react'
import {Box ,useColorModeValue} from "@chakra-ui/react"
import { Container } from 'react-bootstrap'
import "./SingleSrvcListMobile.css"

const SingleSrvcListMobile = (props) => {
  return (
   <>
   <div className='ssl_mobile_container'>
   <Container>
 <wrapper className="SSL_title_text_wrapper">
    <Box color={useColorModeValue('#000', "#15E888")}>
    <div className='ssl_title_div'>
        <heading>{props.heading}</heading>
    </div>
    </Box>
    <Box color={useColorModeValue('#f47721', "#FFB800")}>
    <div className='ssl_text_div'>
        <text>{props.text}</text>
    </div>
    </Box>
    </wrapper>
   </Container>
   </div>
    
</>
  )
}

export default SingleSrvcListMobile