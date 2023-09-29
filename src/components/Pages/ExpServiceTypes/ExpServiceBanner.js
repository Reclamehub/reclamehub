import React from 'react'
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap"
import {Box,useColorModeValue} from "@chakra-ui/react"
import "./ExpServiceBanner.css"

const ExpBanner = (props) => {
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
          <Container className='expiso_container'>
     
          <Box className="expiso_top_heading_wrapper">
	<Box className='expiso_top_heading_div' color={useColorModeValue('#fff' ,'#f47721')}>
      <heading>{props.heading}</heading>
          </Box>
            <div className='expiso_top_text_div'>
              <text>{props.text}</text>
            </div>

            <div className='expiso_btn_div'>
              <button className='expiso_btn'>           
       <a href="https://wa.me/8527352284"
        >arrange call </a></button>
            </div>
             
              </Box>
          <div className='expiso_top_img'>
            <img src={props.img} alt="explore-top-img" />
          </div>
        </Container>
    </div>
  )
}

export default ExpBanner