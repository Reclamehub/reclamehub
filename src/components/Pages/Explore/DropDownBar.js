import React from 'react';
import { Container } from 'react-bootstrap';
import "./DropDownBar.css";

function DropDownBar() {
  return (
    <>
      <Container className='drop_container'>

        <>
          <div className="dropdown">
            <button className="btn drop-btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Business License
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" >
                <span className='drop-item-heading'><p>Business Registration</p></span>
                <p>iso certification</p>
                <p>msme registration</p>
                <p>fssai registration</p>
                <p>pan</p>
                <p>tan</p>
                <p>trade licence in delhi</p>
              </a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="btn drop-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Trademark
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" >
                <span className='drop-item-heading'><p>Trademark</p></span>
                <p>trade mark</p>
                <p>Trademark oppositions</p>
                <p>Trademark hearing</p>
                <p>patent</p>
                <p>copyright</p>
              </a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="btn drop-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              GST
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" >
                <span className='drop-item-heading'><p>  india</p></span>
                <p>gst registration</p>
                <p>gst modification</p>
                <p>gst cancellation</p>
                <p>gst return filing</p>
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


        </>

      </Container>
    </>
  );
}

export default DropDownBar;
