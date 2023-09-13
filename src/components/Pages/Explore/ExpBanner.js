import React from 'react'
import { Container } from "react-bootstrap"
import "./ExpBanner.css"

const ExpBanner = () => {
  return (
    <div>
          <Container className='exp_container'>
          <div className='exp_top_heading_wrapper'>
            <div className='exp_top_heading_div'>
              <heading className="exp_heading">Lorem Ipsum is simply dummy text of<br /> the printing. </heading>
            </div>
            <div className='exp_top_text_div'>
              <text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </text>
            </div>
            <div className='exp_btn_div'>
              <button className='exp_btn'>arrange call</button>
              <button className='exp_btn'> live chat</button>
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