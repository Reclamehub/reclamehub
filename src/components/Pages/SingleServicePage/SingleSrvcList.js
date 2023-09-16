import React from 'react'
import { Box, useColorModeValue } from "@chakra-ui/react"
import { Container } from "react-bootstrap"
import "./SingleSrvcList.css"

const SingleSrvcTable = (props) => {

  return (
    <>
      <Container>
        <div className='table_main_heading'>
          <p>here comes <span style={{ color: "#ff7721" }}>our services...</span></p>
        </div>
      </Container>

      <Container className="table-container">
        <main className='main_div' >
          <div className='table_sub_headings'>
            <Box color={useColorModeValue('#000', "#15E888")} >
              <p style={{fontWeight:"500"}}>{props.heading0}</p>
            </Box>
          </div>
          <Box color={useColorModeValue('#FF7721', "#FFB800")} >
          <div className='table_text'>
              <p>{props.text0}</p>
            </div>
          </Box>
        </main>

        <main className='main_div' style={{ marginBottom: 'auto' }} >
          <div className='table_sub_headings'>
            <Box color={useColorModeValue('#000', "#15E888")} >
              <p style={{fontWeight:"500"}}>{props.heading1}</p>
            </Box>
          </div>
          <Box color={useColorModeValue('#FF7721', "#FFB800")} >
          <div className='table_text'>
              <p>{props.text1}</p>
            </div>
          </Box>
        </main>
           

        <main className='main_div' style={{ marginBottom: 'auto', }} >
          <div className='table_sub_headings'>
            <Box color={useColorModeValue('#000', "#15E888")} >
              <p style={{fontWeight:"500"}}>{props.heading2}</p>
            </Box>
          </div>
          <Box color={useColorModeValue('#FF7721', "#FFB800")} >
          <div className='table_text'>
              <p>{props.text2}</p>
            </div>
          </Box>
        </main>
         

        <main className='main_div' style={{ marginBottom: 'auto', }} >
          <div className='table_sub_headings'>
            <Box color={useColorModeValue('#000', "#15E888")} >
              <p style={{fontWeight:"500",}}>{props.heading3}</p>
            </Box>
          </div>
          <Box color={useColorModeValue('#FF7721', "#FFB800")} >
          <div className='table_text'>
              <p>{props.text3}</p>
            </div>
          </Box>
        </main>
        
        <main className='main_div' style={{ marginBottom: 'auto' }} >
          <div className='table_sub_headings'>
            <Box color={useColorModeValue('#000', "#15E888")} >
              <p style={{fontWeight:"500"}}>{props.heading4}</p>
            </Box>
          </div>
          <Box color={useColorModeValue('#FF7721', "#FFB800")} >
            <div className='table_text'>
              <p>{props.text4}</p>
            </div>
          </Box>
        </main>
      </Container>
    </>
  );
};
export default SingleSrvcTable
           