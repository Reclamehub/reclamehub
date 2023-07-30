import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./SingleSrvcList.css"
import SMMTableData from './SingleSrvcListData';
const SingleSrvcTable = (props) => {

  return (
    <>
 
    <Container  className="table-container">
     <main className='main_div' >
    <div>
    <p className='table_title'>{props.title0}</p>
    <p>{props.heading0}</p>
   </div>
   <div style={{color:'red',}}>
    <p>{props.text0}</p>
   </div>
   </main>
   
   <main className='main_div'style={{marginBottom:'auto'}} >
  <div>
  <p className='table_title'>{props.title1}</p>
    <p>{props.heading1}</p>
   </div>
   <div style={{color:'red',}}>
    <p>{props.text1}</p>
   </div>
   </main>
    
    <main className='main_div'style={{marginBottom:'auto'}} >
  <div>
  <p className='table_title'>{props.title2}</p>
    <p>{props.heading2}</p>
   </div>
   <div style={{color:'red',}}>
    <p>{props.text2}</p>
   </div>
   </main>
    
    <main className='main_div'style={{marginBottom:'auto'}} >
  <div>
  <p className='table_title'>{props.title3}</p>
    <p>{props.heading3}</p>
   </div>
   <div style={{color:'red',}}>
    <p>{props.text3}</p>
   </div>
   </main>
    <main className='main_div'style={{marginBottom:'auto'}} >
  <div>
  <p className='table_title'>{props.title4}</p>
    <p>{props.heading4}</p>
   </div>
  <div style={{color:'red',}}>
    <p>{props.text4}</p>
   </div>
   </main>
    </Container>
    </>
  );
};
export default SingleSrvcTable