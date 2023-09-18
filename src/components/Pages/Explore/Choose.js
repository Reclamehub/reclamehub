import React from 'react'
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Container } from 'react-bootstrap';
import ChooseCard from "./ChooseCard"
import "./Choose.css"

const Choose = () => {
    const { colorMode } = useColorMode();
    return (
        <Container className='choose_container'>
            <div className="exp_heading_wrapper" style={{ margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", width: "95%" }}>
                <div className='exp_heading_div'
                    style={{
                        color: colorMode === "light" ? '#000' : "#ffffff",
                    }}
                >
                    <heading>why choose us ?</heading>
                </div>
                <div className='exp_text_div'>
                    <text>Let us hear stories from our valuable clients</text>
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
                        <ChooseCard text="The team at Reclame Hub has been significantly helping us reach our advertising goals. Their expertise in digital marketing and data analysis has allowed us to optimise our campaigns and improve our Return on investment. We highly recommend their services to any business looking to maximise their online presence and drive results." />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <div className='choose_img_div'>
                        <img style={{ width: "100%", height: "50px" }} src="exic.png" alt="g-img" />
                    </div>
                    <div className='choose_card_div'>
                        <ChooseCard text="Our partnership with Reclame Hub has greatly benefited our marketing strategies. Their innovative and personalised approach helped us engage our target audience effectively. Their social media expertise has resulted in increased brand awareness and customer engagement. We extremely appreciate their services and recommend them to any business or financial institution seeking effective advertising solutions. " />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <div className='choose_img_div' >
                        <img style={{ width: "100%", height: "50px" }} src="exsi.png" alt="g-img" />
                    </div>
                    <div className='choose_card_div'>
                        <ChooseCard text="Reclame Hub has expertise in government legal compliances and has been invaluable in dealing with the complex regulations and legal requirements in the StartupIndia company formation process. Their knowledge and experience have saved our time and resources allowing us to focus on growing our business. We are happy for their support and would recommend their services to any aspiring startup looking to establish themselves in the Indian market.  " />
                    </div>
                </div>
            </div>

            <div className='choose_card_wrapper2'>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                    <div className='choose_img_div'>
                        <img style={{ width: "100%", height: "50px" }} src="exgp.png" alt="g-img" />
                    </div>
                    <div className='choose_card_div'>
                        <ChooseCard text="Reclame Hub has been a reliable partner in our government compliance search. Their extensive network and understanding of the local market dynamics have been instrumental in assisting us with the necessary business registrations and legal documentation. Their efficient services have helped us throughout the intricacies of the Startup India initiative smoothly. Their commitment to excellence is commendable." />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                    <div className='choose_img_div'>
                        <img style={{ width: "100%", height: "100%" }} src="exfcbk.png" alt="g-img" />
                    </div>
                    <div className='choose_card_div'>
                        <ChooseCard text="Reclame Hub has an extensive network and understanding of the market dynamic. They streamlined the process of business registration and provided us with all necessary legal documentation. Their continuous support in establishing our presence in the Indian market is praiseworthy." />
                    </div>
                </div>
            </div>
            </div>
        </Container>
    )
}

export default Choose