import React from 'react';
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Box, Text, Heading, Button, useColorModeValue } from "@chakra-ui/react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./HomeClients.css"

export const ClientSlider = () => {
  const images = [
    "c1.png",
    "c2.png",
    "c3.png",
    "c4.png",
    "c5.png",
    "c6.png",
    "c7.png",
    "c8.png",
    "c9.png",
    "c10.png",
    "c11.png",
    "c12.png"

  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box paddingBottom={'11%'} paddingTop={'10%'} display={{ base: "inline", sm: "inline", md: "none", lg: "none", xl: "none" }} margin={"auto"} >
        <div>
          <heading className="page_heading">some of Our Clients</heading>
        </div>
        <div className="heading_descp_div"style={{ marginBottom: "3.5%", lineHeight: "normal" }}>
          <text className='heading_description'>Helping these  and many other  incredible clients reach for the stars is what pulls us out of bed every morning.</text>
        </div>
        <Container className='main_container ' style={{ background: "#FF9450",paddingBottom:"5%" }}>
          <Slider {...settings} className='slider'>
            {images.map((image, index) => (
              <div key={index} className='clientImg_div' >
                <img src={image} className='clientImg' alt={`Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
           <Box className='expMore_btn_div' ><Link to="/service">< button  className="expMore_btn">Explore More</button></Link></Box>
        </Container>
      </Box>
    </>
  );
};
export default ClientSlider

// import { Box } from "@chakra-ui/react"


// export const ClientSlider = () => {


//     return (
//         <Box display={{ base:"inline", sm: "inline", md: "none", lg: "none", xl: "none" }}>
//             <div class="container">
//                 <h2>OUR CLIENTS</h2>
//                 <div id="myCarousel" class="carousel slide" data-ride="carousel">
//                     {/* <!-- Indicators --> */}
//                     <ol class="carousel-indicators">
//                         <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//                         <li data-target="#myCarousel" data-slide-to="1"></li>
//                         <li data-target="#myCarousel" data-slide-to="2"></li>
//                     </ol>

//                     {/* <!-- Wrapper for slides --> */}
//                     <div class="carousel-inner">

//                         <div class="item active">
//                             <img src="c1.png" alt="Los Angeles" style={{ width: "100%" }} />
//                         </div>

//                         <div class="item">
//                             <img src="c2.png" alt="Chicago" style={{ width: "100%" }} />
//                         </div>

//                         <div class="item">
//                             <img src="c3.png" alt="New York" style={{ width: "100%" }} />

//                         </div>




//                         <div class="item active">
//                             <img src="c4.png" alt="Los Angeles" style={{ width: "100%" }} />

//                         </div>

//                         {/* <div class="item">
//                             <img src="c5.png" alt="Chicago" style={{ width: "100%" }} />
//                         </div>

//                         <div class="item">
//                             <img src="c6.png" alt="New York" style={{ width: "100%" }} />

//                         </div>


//                         <div class="item active">
//                             <img src="c7.png" alt="Los Angeles" style={{ width: "100%" }} />

//                         </div>

//                         <div class="item">
//                             <img src="c8.png" alt="Chicago" style={{ width: "100%" }} />
//                         </div>

//                         <div class="item">
//                             <img src="c9.png" alt="New York" style={{ width: "100%" }} />

//                         </div>


//                         <div class="item active">
//                             <img src="c10.png" alt="Los Angeles" style={{ width: "100%" }} />

//                         </div>

//                         <div class="item">
//                             <img src="c11.png" alt="Chicago" style={{ width: "100%" }} />
//                         </div>

//                         <div class="item">
//                             <img src="c12.png" alt="New York" style={{ width: "100%" }} />

//                         </div> */}

//                     </div>

//                     {/* <!-- Left and right controls --> */}
//                     <a class="left carousel-control" href="#myCarousel" data-slide="prev">
//                         <span class="glyphicon glyphicon-chevron-left"></span>
//                         <span class="sr-only">Previous</span>
//                     </a>
//                     <a class="right carousel-control" href="#myCarousel" data-slide="next">
//                         <span class="glyphicon glyphicon-chevron-right"></span>
//                         <span class="sr-only">Next</span>
//                     </a>
//                 </div>
//             </div>

//         </Box>
//     )
// }