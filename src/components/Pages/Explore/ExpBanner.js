import React from 'react'
import { Container } from "react-bootstrap"
import "./ExpBanner.css"

const ExpBanner = () => {
  return (
    <div>
          <Container className='exp_container'>
          <div className='exp_top_heading_wrapper'>
            <div className='exp_top_heading_div'>
              <heading className="exp_heading">Welcome to Reclame Hub, Where Entrepreneurial, Tech-Savvy Innovation Meets Excellence</heading>
            </div>
            <div className='exp_top_text_div'>
              <text>
              Reclame Hub is Leading the Way in Business Registration, Company Incorporation, CA Consultancy, Business License
           </text>
            </div>
            <div className='exp_btn_div'>

              <button className='exp_btn'>           
       <a href="https://wa.me/8527352284"
        >arrange call </a></button>
             
              {/* <button className='exp_btn'> live chat</button> */}
            </div>
          </div>
          <div>
            <img src="Ellipse60.png" alt="explore-top-img" />
          </div>
        </Container>
    </div>
  )
}

export default ExpBanner