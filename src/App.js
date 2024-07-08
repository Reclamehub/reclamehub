import React, { useEffect, useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar/Navbar";
import { AllRoutes } from "./components/AllRoutes/AllRoutes";
import { Footer } from "./components/Footer/Footer";
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FooterMain } from './components/Footer/FooterMain';
import ScrollToTopButton from './ScrollToTop/ScrollToTOpButton';
import ExpServiceTypeForm from "../src/components/Pages/ExpServiceTypes/ExpServiceTypeForm";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner"; 

function App() {
  const [isLoading, setIsLoading] = useState(true); 
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [whatsappIconPosition, setWhatsappIconPosition] = useState({ top: 20, right: 20 });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 3500); 
  }, []);

  const scrollThreshold = 200;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      setShowWhatsapp(true);
    } else {
      setShowWhatsapp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle user's drag and drop to change the position
  const handleIconDrag = (event) => {
    setWhatsappIconPosition({
      top: event.clientY - 50, // Adjust to half of the icon size
      right: window.innerWidth - event.clientX - 50, // Adjust to half of the icon size
    });
  };

  return (
    <Box className="App">
      {isLoading ? (
        <LoadingSpinner /> 
      ) : (
        <>
          <Navbar />
          <AllRoutes />
          <FooterMain />
          <ScrollToTopButton />
          {showWhatsapp && (
            <div
              className="whatsapp-icon"
              style={{ top: whatsappIconPosition.top, right: whatsappIconPosition.right, position: 'fixed', cursor: 'move' }}
              onMouseDown={(e) => {
                e.preventDefault();
                window.addEventListener('mousemove', handleIconDrag);
                window.addEventListener('mouseup', () => {
                  window.removeEventListener('mousemove', handleIconDrag);
                });
              }}
            >
              <FaWhatsapp size={50} />
            </div>
          )}
        </>
      )}
    </Box>
  );
}

export default App;
