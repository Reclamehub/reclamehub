import React from 'react'
import { Container } from 'react-bootstrap'
import "./SingleSrvcListMobile.css"

const SingleSrvcListMobile = (props) => {
  return (
   <>
   <Container>
   <div className='SSL_heading_div'>
    <p>here comes <span style={{ color: "#ff7721" }}>our services...</span></p>
    </div>
    <wrapper>
    <div>
        <heading>{props.heading}</heading>
    </div>
    <div>
        <text>{props.text}</text>
    </div>
    </wrapper>
   </Container>
    
</>
  )
}

export default SingleSrvcListMobile