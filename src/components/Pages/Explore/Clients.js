import React from 'react'
import { Container } from 'react-bootstrap'
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import "./Clients.css"

const Clients = () => {
const { colorMode } = useColorMode();
  return (
    <>
  <Container className='exp_client_container'>
    <div className="exp_heading_wrapper"style={{margin:"auto",display:"flex",justifyContent:"center",textAlign:"center",width:"95%"}}>
    <div className='exp_heading_div'
      style={{
          color: colorMode === "light" ? '#000' : "#ffffff",
      }}
    >
        <heading>What our clients say about<span style={{color:"#ff7721"}}>  reclame hub </span> </heading>
    </div>
    <div className='exp_text_div'>
        <text>Let us hear stories from our valuable clients</text>
    </div>
    </div>
    <div
    Style = {{
    backgroundImage: 'url("path/to/your/image.jpg")',
    backgroundSize: 'cover', // Adjust the background image size
    backgroundPosition: 'center', // Adjust the background image position
    width: '100%',
    height: '400px', // Set the desired height
  }}
  >

  </div>
    </Container>
    </>
  )
}

export default Clients