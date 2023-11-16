import React from 'react';
import { Container } from 'react-bootstrap';
import { Box,useColorModeValue } from '@chakra-ui/react';
import "./DropDownBar.css";
import { Link } from 'react-router-dom';

function DropDownBar() {
  return (
    <>
      <Box bg={useColorModeValue('#ffffff', '#2D2D2D')} color={useColorModeValue('#000', '#fff')} fontFamily={"poppins"} margin={"auto"} width={"100%"}>
      <Container className='drop_container'>
         <div className="dropdown">
            <button className=" drop-btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Business License
            </button>
            <ul className="dropdown-menu">
              <li>
                <div className="dropdown-item" >
                <span className='drop-item-heading'><p>Business Registration</p></span>
               <p className='drop-down'>  <Link  to ="/ISO-Certification">iso certification </Link></p>
                <p className='drop-down'> <Link to="/MSME-Registration">msme registration</Link></p>
                <p className='drop-down'> <Link to="/FSSAI-Registration">fssai registration</Link></p>
                <p className='drop-down'><Link to="/About-PAN">pan</Link></p>
                <p className='drop-down'><Link to="/About-TAN">Tan</Link></p>
                <p className='drop-down'><Link to="/Trade-License">TRADE LICENSE </Link></p>
              </div>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button className=" drop-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Trademark
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" >
                <span className='drop-item-heading'><p>Trademark</p></span>
                <p className='drop-down'><Link  to ="/About-TradeMark">trademark </Link></p>
                <p className='drop-down'> <Link to="/TradeMark-Objection"> Trademark objection</Link></p>
                <p className='drop-down'><Link to="/TradeMark-Hearing">Trademark hearing</Link></p>
                <p className='drop-down'> <Link to="/CopyRight">copyright</Link></p>
                {/* <p>patent</p> */}
              </a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className=" drop-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              GST
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" >
                <span className='drop-item-heading'><p>  india</p></span>
                <Link to="/GST-Registration"> <p className='drop-down'>gst registration</p></Link>
               <Link to="/GST-Modification"> <p className='drop-down'>gst modification</p></Link>
                <Link to="/GST-Cancellation"><p className='drop-down'>gst cancellation</p></Link>
                <Link to="/GST-Return-Filing"><p className='drop-down'>gst return filing</p></Link>
              </a></li>
            </ul>
          </div>

          {/* <div className="dropdown">
            <button className="btn drop-btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              income tax
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" >Something else here</a></li>
            </ul>
          </div> */}


     

      </Container>
      </Box>
    </>
  );
}

export default DropDownBar;
