import React from 'react'
import { Box, useColorModeValue } from "@chakra-ui/react"
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom"
import "./BlogCard.css"

const BlogCards = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/effective-digital-marketing-startegies-for-small-businesses');
    };
  return (
   <Card className='blog_card'>
          <Card.Img variant="top" src={props.imgsrc} />
          <Card.Body>
            <Card.Title className='card_title'>{props.title}</Card.Title>
            <Card.Text className='card_text'>
           {props.text}
            </Card.Text>
  <button className='card_btn' onClick={handleClick} >Read More</button>
          </Card.Body>
        </Card>
      );
    }
    


export default BlogCards