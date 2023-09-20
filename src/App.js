import React, { useEffect } from "react"
import { useLocation } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar/Navbar"
import { AllRoutes } from "./components/AllRoutes/AllRoutes"
import { Footer } from "./components/Footer/Footer"
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FooterMain } from './components/Footer/FooterMain';
import ScrollToTopButton from './ScrollToTop/ScrollToTOpButton';
import ExpServiceTypeForm from "../src/components/Pages/ExpServiceTypes/ExpServiceTypeForm"
// import ReactGA from "react-ga"

// useEffect(()=>{
//   ReactGA.pageView(Window.location.pathname);
// },[]);

// const details=(item: fooditem)=>{
// React.isValidElement({
//   category: item.name,
//   action:"test action",
//   label:"test lable",
//   value:item.price,
// });
// Navigate("./food-details,{state:item"});
// }


function App() {

  return (

    <Box className="App" >
      <Navbar />
      <AllRoutes />
      <FooterMain />
      <ScrollToTopButton />
    </Box>

  );
}

export default App;
