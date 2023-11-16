import React from 'react'
import { Container } from 'react-bootstrap'
import ExpServiceBanner from "./ExpServiceBanner"
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import {TradeMarkCards}from './TradeMarkCards'
import "./IsoCertificate.css"

const GSTReturn = () => {
  return (
    <>
    <Box bg={useColorModeValue('#fffffff', '#000')} color={useColorModeValue('#000', '#ffffff')} fontFamily={"poppins"} margin={"auto"} position={""}>
    <Container >
    <ExpServiceBanner heading="GST Returns Filing" text="The filing of GST returns is compulsory for those who possess GST registration in India. Taxpayers who are enrolled in the Goods and Services Tax (GST) system are required to submit their GSTR 1, GSTR 2, and GSTR 3 returns on a monthly basis, namely on the 10th, 15th, and 20th day of each month." img="gstreturn.png"/>
  </Container>

  <Container fluid className='box-shadow mt-5'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">About GST Returns</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>A Goods and Services Tax (GST) return is a formal record that encompasses detailed information regarding the income, sales, costs, and purchases of a taxpayer who is registered under the GST system on a monthly, quarterly, or annual basis depending on the business classification. This document is obligatory for every taxpayer with a Goods and Services Tax Identification Number (GSTIN) and must be submitted to the relevant tax administrative authorities. Tax authorities utilise this method to compute the net tax liability.</p>
           <ul>
            <li>A person is required to furnish information regarding the transactions involving products and services with the applicable tax amounts that have been collected or remitted at the official GST portal provided by the Government of India.</li>
            <li>Individual taxpayers utilise distinct forms to submit their Goods and Services Tax (GST) returns, including the supply of returns, purchase returns, monthly returns, and annual returns. Taxpayers must have to participate in the composition to submit returns. Reclame Hub offers the authorised process for filing returns on online platforms.</li>
           </ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
    <Container className='d-flex flex-column justify-content-start align-items-start inner_box'>
        <div className='exp_iso_heading_div'>
            <heading className="">Why Should We File a GST Return on Time?</heading>
        </div>
        <div className='exp_iso_text_div'>
            <p>All Indian businesses must file GST returns on time. GST returns list all business transactions for a given period. GST returns have these advantages:</p>
           <ul>
            <li>Late fees and penalties can be avoided by filing GST returns on time. A daily penalty may be assessed for each day that a GST return is late.</li>
            <li>Make a claim for Input Tax Credit (ITC) on GST paid on purchases when filing your GST return. Input tax credit (ITC) is a deduction from the taxable income of a business for taxes paid on products and services used in the production of the final output.</li>
            <li>The act of filing Goods and Services Tax (GST) returns can serve as a catalyst for facilitating the growth and expansion of your business. Because GST returns document all business activity, they can form the basis for long-term planning and investment.</li>
            <li>The likelihood of an audit by the tax authorities can be mitigated by filing GST returns on a consistent basis.  This measure protects individuals from undesired examination and mitigates the associated costs and time commitments.</li>
            <li>GST returns are a transparent method of disclosing financial transactions for your business. Errors and discrepancies in reporting business transactions can be avoided in this way.</li>
            <li>Regularly submitting Goods and Services Tax (GST) returns enhances the creditworthiness of your business. This can facilitate the obtaining of loans and credit facilities from a bank.</li>
            <li>Filing GST returns allows you to keep tabs on your business's success by providing an overview of all sales and purchases conducted within a designated time frame, enabling businesses to effectively monitor their overall performance.</li>
           </ul>
        </div>
    </Container>
    </Container>

    <Container fluid className='box-shadow'>
  <Container className='inner_box '>
        <div className='exp_iso_heading_div '>
            <heading className="">GST RETURN FILING PROCESS</heading>
        </div>
<Container fluid className='fssai_cards_main_container'> 
<wrapper className="fssai_cards_wrapper1">
  <div>
    <TradeMarkCards icon="1" text="Connect with the GST Expert team at Reclame Hub to initiate the process to have a complete understanding of the obligations associated with filing your GST returns"/>
  </div>
  <div>
    <TradeMarkCards icon="2" text="Collect all financial and transactional information relating to the tax including sales, purchases, input tax credit, and output tax liability."/>
  </div>
  <div>
    <TradeMarkCards icon="3" text="Verify the accuracy of information in compliance with the GST regulations."/>
  </div>
</wrapper>
<wrapper className="fssai_cards_wrapper1">
  <div>
    <TradeMarkCards icon="4"  text="Fill out the GST return form including the information of input and output supplies tax responsible for paying on the goods or services it supplies."/>
  </div>
  <div>
    <TradeMarkCards icon="5"  text="Calculate the tax liability of GST using the data provided in the return form. Ensure compliance with the GST regulation."/>
  </div>

  <div>
    <TradeMarkCards icon="6"  text="Settle Goods and Service Tax (GST) liabilities and the amount of tax owed to the government. To comply with this it is recommended to maintain the"/>
  </div>
</wrapper>
</Container>
    </Container>
    </Container>
  </Box>
  </>
  )
}
export default GSTReturn