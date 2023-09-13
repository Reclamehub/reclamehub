import React from 'react';
import { Container } from 'react-bootstrap';
import { useColorMode } from "@chakra-ui/react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Clients.css";

const Clients = () => {
  const data = [
    {
      img: "tlaxmi.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ",
    },
    {
      img: "tisha.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ",
    },
    {
      img: "tswati.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ",
    },
    // Add more data entries
  ];

  const { colorMode } = useColorMode();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className='exp_client_container'>
      <div className="exp_heading_wrapper" style={{ margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", width: "95%" }}>
        <div className='exp_heading_div'
          style={{
            color: colorMode === "light" ? '#000' : "#ffffff",
          }}
        >
          <heading>What our clients say about<span style={{ color: "#ff7721" }}>  reclame hub </span> </heading>
        </div>
        <div className='exp_text_div'>
          <text>Let us hear stories from our valuable clients</text>
        </div>
      </div>
      <div className='slider_main_div'
        style={{
          backgroundColor: "#1D1D1D",
          height: 'auto',
          borderRadius: "20px",
          margin: "auto",
          boxShadow: "0px 20px 0px 0px #3D3D3D",
        }}
      >
        <Container fluid className='slider_container' >
          <Slider {...settings} className='slider'>
            {data.map((item, index) => (
              <div key={index} className='slider-item'>
                <img src={item.img} className='testimonial-image' alt={''} />
                <p className='testimonial-text'>{item.text}</p>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </Container>
  );
}

export default Clients;

// import React from 'react'
// import { Container } from 'react-bootstrap'
// import { useColorMode, useColorModeValue } from "@chakra-ui/react"
// import "./Clients.css"

// const Clients = () => {
// const { colorMode } = useColorMode();
//   return (
//     <>
//   <Container className='exp_client_container'>
//     <div className="exp_heading_wrapper"style={{margin:"auto",display:"flex",justifyContent:"center",textAlign:"center",width:"95%"}}>
//     <div className='exp_heading_div'
//       style={{
//           color: colorMode === "light" ? '#000' : "#ffffff",
//       }}
//     >
//         <heading>What our clients say about<span style={{color:"#ff7721"}}>  reclame hub </span> </heading>
//     </div>
//     <div className='exp_text_div'>
//         <text>Let us hear stories from our valuable clients</text>
//     </div>
//     </div>
//     <div
//     Style = {{
//     backgroundImage: 'url("path/to/your/image.jpg")',
//     backgroundSize: 'cover', // Adjust the background image size
//     backgroundPosition: 'center', // Adjust the background image position
//     width: '100%',
//     height: '400px', // Set the desired height
//   }}
//   >

//   </div>
//     </Container>
//     </>
//   )
// }

// export default Clients