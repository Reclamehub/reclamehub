import logo from './logo.svg';
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
