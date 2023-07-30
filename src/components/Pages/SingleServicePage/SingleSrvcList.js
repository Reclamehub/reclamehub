import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./SingleSrvc.css"
import SMMTableData from './SingleSrvcListData';
const SingleSrvcTable = (props) => {
  return (
    <>
 
    <Container className="table-container">
     <main className='main_div' >
    <div style={{fontSize:"14px"}}>
      <p>{props.title0}</p>
    <p>{props.heading0}</p>
   </div>
   <div style={{color:'red',fontSize:"14px"}}>
    <p>{props.text0}</p>
   </div>
   </main>
   <main className='main_div'style={{marginBottom:'auto'}} >
  <div style={{fontSize:"14px"}}>
  <p>{props.title1}</p>
    <p>{props.heading1}</p>
   </div>
   <div style={{color:'red',fontSize:"14px"}}>
    <p>{props.text1}</p>
   </div>
   </main>
    <main className='main_div'style={{marginBottom:'auto'}} >
  <div style={{fontSize:"14px"}}>
  <p>{props.title2}</p>
    <p>{props.heading2}</p>
   </div>
   <div style={{color:'red',fontSize:"14px"}}>
    <p>{props.text2}</p>
   </div>
   </main>
    <main className='main_div'style={{marginBottom:'auto'}} >
  <div style={{fontSize:"14px"}}>
  <p>{props.title3}</p>
    <p>{props.heading3}</p>
   </div>
   <div style={{color:'red',fontSize:"14px"}}>
    <p>{props.text3}</p>
   </div>
   </main>
    <main className='main_div'style={{marginBottom:'auto'}} >
  <div style={{fontSize:"14px"}}>
  <p>{props.title4}</p>
    <p>{props.heading4}</p>
   </div>
  <div style={{color:'red',fontSize:"14px"}}>
    <p>{props.text4}</p>
   </div>
   </main>
    </Container>
    </>
  );
};
export default SingleSrvcTable