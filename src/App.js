import logo from './logo.svg';
import './App.css';

import {Navbar} from "./components/Navbar/Navbar"
import {AllRoutes} from "./components/AllRoutes/AllRoutes"
import {Footer} from "./components/Footer/Footer"
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
function App() {
  
  // localStorage.setItem("chakra-ui-color-mode","dark")
  return (
    <Box className="App" >
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
