import React, { useState } from "react";
import "./AboutFeatured.css"
import { Container } from "react-bootstrap"
import { Box, Text, Heading, useColorModeValue } from "@chakra-ui/react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//const homeData = [
//   {
//     id: 1,
//     img: "top_dig.png",

//   },
//   {
//     id: 2,
//     img: "seo_blog.png",

//   },
//   {
//     id: 3,
//     img: "wiki.png",

//   },
//   {
//     id: 4,
//     img: "tech_view.png",

//   },
//   {
//     id: 5,
//     img: "top_dev.png",

//   }

// ];

// const breakPoints = [
//   { width: 1, itemsToShow: 1, pagination: false },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
//   { width: 768, itemsToShow: 3, pagination: false },
//   { width: 1200, itemsToShow: 6, pagination: false }
// ];

export default function FeaturedSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>

      <Container className="featured_container ">
        <Slider {...settings} className='slider'>

          <div className='' >
            <img src="top_dig.png" className='aboutFetured_img' alt="aboutFetured_img" />
          </div>
          <div className='' >
            <img src="seo_blog.png" className='aboutFetured_img' alt="aboutFetured_img" />
          </div>
          <div className='' >
            <img src="wiki.png" className='aboutFetured_img' alt="aboutFetured_img" />
          </div>
          <div className='' >
            <img src=" tech_view.png" className='aboutFetured_img' alt="aboutFetured_img" />
          </div>
          <div className='' >
            <img src="top_dev.png" className='aboutFetured_img' alt="aboutFetured_img" />
          </div>


        </Slider>
      </Container>

    </>

    // return (
    //   <Box className="carousel-main" marginBottom={"50px"}  paddingBottom={"50px"} >

    //     <Box className="carousel-wrapper">

    //       <Flex marginLeft={"6%"} justifyContent={"space-between"} alignItems={"center"}>
    //         {/* {homeData?.map((el) => (
    //           <Link style={{textDecoration:"none"}} to="">
    //             <Box key={el.id} width={'200px'} height={'240px'} display={'flex'}  flexDirection={'column'} justifyContent={'center'}>
    //               <Box width={'80%'}  display={'flex'} flexDirection={'column'} justifyContent={'center'} >
    //                 <Image src={el.img} alt="carousel-img" height={'50%'} border={"1px solid red"}  width={'100%'} />
    //               </Box>
    //               </Box>
    //           </Link>
    //         ))} */}
    //         <Box><Image src="top_dig.png" alt="top_digital" /></Box>
    //         <Box><Image src="seo_blog.png" alt="seo_blog" /></Box>
    //         <Box><Image src="wiki.png" alt="wiki" /></Box>
    //         <Box><Image src="tech_view.png" alt="top_digital" /></Box>
    //         <Box><Image src="top_dev.png" alt="top_dev" /></Box>
    //       </Flex>
    //     </Box>
    //   </Box>
  );
}