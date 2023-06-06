import { Box } from "@chakra-ui/react"
import { AboutBanner } from "./AboutBanner"
import { AboutVision } from "./AboutVision"
import { AboutProcess } from "./AboutProcess"
import { AboutApproch } from "./AboutApproch"
import { AboutExperties } from "./AboutExperties"
import { AboutChoose } from "./AboutChoose"
import { AboutForm } from "./AboutForm"

export const AboutUs=()=>{



    return(<Box>
        <AboutBanner />
        <AboutVision />
        <AboutApproch />
        <AboutProcess />
        <AboutExperties />
        <AboutChoose />
        <AboutForm />
    </Box>)
}