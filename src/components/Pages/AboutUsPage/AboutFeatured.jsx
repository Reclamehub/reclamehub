import { Box, Heading, Image } from "@chakra-ui/react"

import "./AboutFeatured.css"

export const AboutFeatured=()=>{



    return(<Box paddingTop={"50px"}>
<Heading as="h1"><span style={{color:"#FF7721"}}>OUR</span> FEATURED</Heading>
<Box className="abt-featured-gif-box"><Image src="featured.gif" boxSize={"300px"} marginTop="-80px"  alt="featured" /></Box>
<div class="trustpilot-widget" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="645c9b68484ec7b9c3eac191" data-style-height="24px" data-style-width="100%" data-theme="light" data-min-review-count="10" data-without-reviews-preferred-string-id="1" data-style-alignment="center">
  <a href="https://www.trustpilot.com/review/reclamehub.com" target="_blank" rel="noopener"></a>
</div>

    </Box>)
}