import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react"
import { Container, Row, Col } from "react-bootstrap"
import "./AboutProcess.css"

export const AboutProcess = () => {

    return (
        <Container style={{ margin: "auto" }}>
            <Container className="processContent_container">
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6} className="processvision_col">
                        <div className="process_cardtext_div">

                            <text >
                                <ul style={{textAlign:""}}>
                                    <li >Initial Consultation</li>
                                    <li>Strategy Development</li>
                                    <li> Campaign Planning</li>
                                    <li>Creative Development</li>
                                    <li>Execution and Implementation</li>
                                    <li>Continuous Improvement</li>
                                </ul>
                            </text>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="aboutprocess_col">
                        <div style={{ height: "auto", width: "100%" }} >
                            <h className="ourprocess_heading">our process</h>
                            <img style={{ height: "90%", width: "90%" }} src="abtgif3.gif" />
                        </div>

                    </Col>
                </Row>
            </Container>
        </Container>
    )

}




// abtgif2.gif