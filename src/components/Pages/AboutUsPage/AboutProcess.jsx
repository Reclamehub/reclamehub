import { Box, Flex, Heading, Text,Image } from "@chakra-ui/react"

import "./AboutVision.css"

export const AboutProcess=()=>{


    return (  
<Box className="vision-container">
    <Flex className="vision-flex-box"  flexDirection={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}} justifyContent={{base:"center",sm:"center",md:"space-around",lg:"space-around",xl:"space-around"}} alignItems={"center"}>
        <Box className="vision-text-heading-container" w={{base:"100%",sm:"100%",md:"50%",lg:"40%",xl:"40%"}} bgColor={"white"} color="black" boxShadow={"2xl"}>
            <Box className="vision-heading-container" p="5%">
                <Heading as="h2" color="orangered">OUR PROCESS</Heading>
                <br />
<Box  textAlign={"left"} alignItems={"center"} display={"flex"} justifyContent={"center"} margin={"auto"} fontWeight={"550"} ml="20px">
<ul>
<li><Text>Initial Consultation</Text></li>
<li><Text>Strategy Development</Text></li>
<li><Text>Campaign Planning</Text></li>
<li><Text>Creative Development</Text></li>
<li><Text>Execution and Implementation</Text></li>
<li><Text>Continuous Improvement</Text></li>
    </ul>
</Box>
  </Box>
           
     </Box>
        
       <Box w={{base:"100%",sm:"100%",md:"50%",lg:"50%",xl:"50%"}}>
        <Box className="vision-img-box"><Image className="vision-img" w="90%"  src="abtgif2.gif" atl="process" /></Box>
        </Box>

    </Flex>
    
</Box>)
    
}




// abtgif2.gif