import React from 'react';
import { Container } from 'react-bootstrap';
import "./DropDownBar.css";

function DropDownBar() {
  return (
    <>
      <Container className='drop_container'>

        <>
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          {/* <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div> */}
          {/* Add more desktop dropdowns here */}
        </>

      </Container>
    </>
  );
}

export default DropDownBar;
