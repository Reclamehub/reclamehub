import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react"
import { Container, Row, Col } from "react-bootstrap"
import "./AboutApproch.css"

export const AboutApproch = () => {


    return (
        <Container style={{ margin: "auto" }}>
            <Container className="approchContent_container">
                <Row className="row flex-column-reverse flex-md-row">
                    <Col sm={12} md={6} lg={6} xl={6} className="aboutapproch_col">
                        <div style={{ height: "auto", width: "100%" }} >
                            <h className="ourapproch_heading">our approch</h>
                            <img style={{ height: "90%", width: "90%" }} src="abtgif1.gif" />
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="aboutapproch_col">
                        <div className="approch_cardtext_div">
                            {/* <heading className="chooseBox_heading">let's team up !</heading><br/> */}
                            <text ><span style={{ color: "#FF7721", fontWeight: "bold" }}>Reclame Hub  </span> we have developed a unique approach that combines strategic thinking, data-driven insights, and creative excellence to deliver impactful marketing solutions. Our approach is tailored to each client's specific needs and objectives, ensuring a customized strategy that maximizes results. Here's an overview of our approach
                            </text>
                        </div>

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}