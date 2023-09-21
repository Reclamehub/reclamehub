import React from 'react'
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Container } from 'react-bootstrap';
import ChooseCard from "./ChooseCard"
import "./Choose.css"

const Choose = () => {
    const { colorMode } = useColorMode();
    return (
        <Container className='choose_container'>
            <div className="exp_heading_wrapper mb-3" style={{ margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", width: "95%" }}>
                <div className='exp_heading_div mb-2'
                    style={{
                        color: colorMode === "light" ? '#F47722' : "#ffffff",
                    }}
                >
                    <heading>Channel Partners</heading>
                </div>
                <div className='exp_text_div'>
                    <text>We collaborate with the following entities to bring your products and services to great heights </text>
                </div>
            </div>
            <div>
            </div>
<div className='main_card_wrapper'>
            <div className='choose_card_wrapper1'>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <div className='choose_img_div'>
                        <img style={{ width: "90%", height: "57px" }} src="googleimg.png" alt="g-img" />
                    </div>
                    <div className='choose_card_div'>
                        <ChooseCard text="Reclame Hub makes your online presence stand out with the help of Google Partnership. With the Google partnership, we bring the advantage of high-quality advertising solutions, analytics tools, and industry insights you need to make your digital marketing campaigns rock! " />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <div className='choose_img_div'>
                        <img style={{ width: "100%", height: "50px" }} src="exic.png" alt="g-img" />
                    </div>
                    <div className='choose_card_div'>
                        <ChooseCard text="Our partnership with ICICI Bank lets us offer many financial decisions that meet your business goals. Our partnership with ICICI Bank ensures secure payment gateways, smooth transaction processes, and financial strategy optimization." />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <div className='choose_img_div' >
                        <img style={{ width: "100%", height: "50px" }} src="exsi.png" alt="g-img" />
                    </div>
                    <div className='choose_card_div'>
                        <ChooseCard text="Startup India is a private initiative that Reclame Hub is proud to be an affiliate of because it helps and supports startups. Startups can benefit from this collaboration because we streamline the delivery of individualised marketing and establishing strategies. This gives them a leg up on the competition and paves the way for future success. " />
                    </div>
                </div>
            </div>

            <div className='choose_card_wrapper2'>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                    <div className='choose_img_div'>
                        <img style={{ width: "100%", height: "50px" }} src="exgp.png" alt="g-img" />
                    </div>
                    <div className='choose_card_div'>
                        <ChooseCard text="As a verified Google Partner, we've proven our expertise with Google Ads and other digital advertising tools. Because of this partnership, we have access to advanced tools and knowledge that help us run successful digital advertising campaigns for your company." />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                    <div className='choose_img_div'>
                        <img style={{ width: "100%", height: "100%" }} src="exfcbk.png" alt="g-img" />
                    </div>
                    <div className='choose_card_div'>
                        <ChooseCard text="We get benefits from Facebook's global reach through its collaboration. Reclame Hub creates engaging social media campaigns using Facebook advertising tools and insights. These campaigns aim to strengthen brand recognition, audience engagement, and organization-audience relationships." />
                    </div>
                </div>
            </div>
            </div>
        </Container>
    )
}

export default Choose