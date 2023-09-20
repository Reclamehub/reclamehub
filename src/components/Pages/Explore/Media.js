import React from 'react'
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Container } from 'react-bootstrap'
import MediaCard from "./MediaCard"
import "./Media.css"

const Media = () => {
    const { colorMode } = useColorMode();
    return (
        <Container className='choose_container'>
            <div className="exp_heading_wrapper" style={{ margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", width: "95%" }}>
                <div className='exp_heading_div'
                    style={{
                        color: colorMode === "light" ? '#000' : "#ffffff",
                    }}
                >
                    <heading>in the media</heading>
                </div>
                <div className='exp_text_div'>
                    {/* <text>Let us hear stories from our valuable clients</text> */}
                </div>
            </div>
            <div>
            </div>
            <div className='media_card_wrapper1'>
                <MediaCard  img="mstory.png" />
                <MediaCard img= "m24.png"/>
                <MediaCard img="mm.png" />
            </div>
            <div className='media_card_wrapper2'>
                <MediaCard img="mnoida.png" />
                <MediaCard img="mgoogle.png"/>
            </div>
        </Container>
    )
}

export default Media