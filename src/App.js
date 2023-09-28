import React, { useEffect,useState } from "react"
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
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner"; 
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
  const [isLoading, setIsLoading] = useState(true); 

 useEffect(() => {
setTimeout(() => {
      setIsLoading(false); 
    }, 5000); 
  }, []);


  return (

    <Box className="App">
    {isLoading ? (
      <LoadingSpinner /> // Display loading spinner when isLoading is true
    ) : (
      <>
        <Navbar />
        <AllRoutes />
        <FooterMain />
        <ScrollToTopButton />
      </>
    )}
  </Box>

  );
}

export default App;
