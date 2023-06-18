import { Box, Heading, Image } from "@chakra-ui/react"

import "./AboutFeatured.css"

export const AboutFeatured=()=>{



    return(<Box>
<Heading as="h1"><span style={{color:"#FF7721"}}>OUR</span> FEATURED</Heading>
<Box className="abt-featured-gif-box"><Image src="featured.gif" boxSize={"300px"} marginTop="-80px"  alt="featured" /></Box>
    </Box>)
}