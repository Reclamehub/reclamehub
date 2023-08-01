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
function App() {
  // const ScrollToTop = ({ children }) => {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  //   return children;
  // };

  // localStorage.setItem("chakra-ui-color-mode","dark")
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
