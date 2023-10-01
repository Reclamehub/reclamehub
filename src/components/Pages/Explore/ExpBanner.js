import React from 'react'
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap"
import {Box,Text} from "@chakra-ui/react"
import "./ExpBanner.css"

const ExpBanner = () => {
  let wordArray = ["Entrepreneurial", "tech-savvy", "inovation",]

	const [curWord, setCurWord] = useState(wordArray[0]);
	const [isActive, setIsActive] = useState(true);

	const index = useRef(0);
	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				index.current++;
				setCurWord(wordArray[index.current]);
				if (index.current === wordArray.length - 1) {
					setIsActive(false);
				}
			}, 2000);
		}
		return () => clearInterval(interval);
	});
  return (
    <div>
          <Container className='exp_container'>
     
          <Box className="exp_top_heading_wrapper">
		    	<Box className='exp_top_heading_div'>
        <Text >welcome to reclame hub </Text>
           <Text >where <span style={{color:"#ff7722"}}>{curWord}</span></Text>
		      <Text > meets excellence</Text>
          </Box>
            <div className='exp_top_text_div'>
              <text>
              Start your journey with our contemporary ideas and profound expertise.
           </text>
            </div>
            <div className='exp_btn_div'>

              <button className='exp_btn'>           
       <a href="https://wa.me/8527352284"
        >arrange call </a></button>
             
              {/* <button className='exp_btn'> live chat</button> */}
            </div>
            </Box>
          <div className='exp_top_img'>
            <img src="Ellipse60.png" alt="explore-top-img" />
          </div>
        </Container>
    </div>
  )
}

export default ExpBanner