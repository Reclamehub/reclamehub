import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const homeData = [
  {
    id: 1,
    img: "top_dig.png",
    
  },
  {
    id: 2,
    img: "seo_blog.png",
    
  },
  {
    id: 3,
    img: "wiki.png",
    
  },
  {
    id: 4,
    img: "tech_view.png",
    
  },
  {
    id: 5,
    img: "top_dev.png",
    
  }
  
];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 768, itemsToShow: 3, pagination: false },
  { width: 1200, itemsToShow: 6, pagination: false }
];

export default function FeaturedSlider() {

 
  return (
    <Box className="carousel-main" marginBottom={"50px"}  paddingBottom={"50px"} >

      <Box className="carousel-wrapper">
      
        <Flex marginLeft={"6%"} justifyContent={"space-between"} alignItems={"center"}>
          {/* {homeData?.map((el) => (
            <Link style={{textDecoration:"none"}} to="">
              <Box key={el.id} width={'200px'} height={'240px'} display={'flex'}  flexDirection={'column'} justifyContent={'center'}>
                <Box width={'80%'}  display={'flex'} flexDirection={'column'} justifyContent={'center'} >
                  <Image src={el.img} alt="carousel-img" height={'50%'} border={"1px solid red"}  width={'100%'} />
                </Box>
                </Box>
            </Link>
          ))} */}
          <Box><Image src="top_dig.png" alt="top_digital" /></Box>
          <Box><Image src="seo_blog.png" alt="seo_blog" /></Box>
          <Box><Image src="wiki.png" alt="wiki" /></Box>
          <Box><Image src="tech_view.png" alt="top_digital" /></Box>
          <Box><Image src="top_dev.png" alt="top_dev" /></Box>
        </Flex>
      </Box>
    </Box>
  );
}