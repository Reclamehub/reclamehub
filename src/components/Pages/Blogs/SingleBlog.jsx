import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

import "./SingleBlog.css"

const blogData=[
    {id:1,
        title:"What is Digital Marketing?",
        shortDEsc:"Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.",
    Bimage:"blogimg1.png",
    description:`Is it a marketing strategy, a tool, or a method of promoting your company?

    So here it is, the act of advertising products and services using digital channels such as social media, SEO, email, and mobile applications is known as digital marketing. Digital marketing refers to any type of marketing that uses electronic technology. 
    
    With the introduction of the internet in the 1990s, digital marketing grew in popularity.
    
    Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.
    According to statistics, worldwide digital advertising spend has reached $458.16 billion in 2021. This implies that digital marketing is, was & will be an essential tool for every business owner looking to increase income. Simply looking around will reveal that digital technology has altered the environment we live in. All approaches that were employed 5-10 years ago no longer work. This is a dynamic and quickly evolving industry. 
    To know more about such data and its increase you can look into this -  https://nix-united.com/blog/digital-marketing-for-small-businesses-overview-of-main-benefits/
    If you want to get the most out of your digital advertisements, you must keep up with the current developments in this field.
    Digital marketing is critical to the success of your online business. If you want to enhance your sales and overall growth, you need to robust and use successful digital marketing strategies.
    With 'n' number of benefits, it also has certain obstacles, and before we get into strategies, let's look at what challenges a firm must confront first`
    },
    {id:2,
        title:"What is Digital Marketing?",
        shortDEsc:"Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.",
    Bimage:"blogimg2.png",
    description:`Is it a marketing strategy, a tool, or a method of promoting your company?

    So here it is, the act of advertising products and services using digital channels such as social media, SEO, email, and mobile applications is known as digital marketing. Digital marketing refers to any type of marketing that uses electronic technology. 
    
    With the introduction of the internet in the 1990s, digital marketing grew in popularity.
    
    Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.
    According to statistics, worldwide digital advertising spend has reached $458.16 billion in 2021. This implies that digital marketing is, was & will be an essential tool for every business owner looking to increase income. Simply looking around will reveal that digital technology has altered the environment we live in. All approaches that were employed 5-10 years ago no longer work. This is a dynamic and quickly evolving industry. 
    To know more about such data and its increase you can look into this -  https://nix-united.com/blog/digital-marketing-for-small-businesses-overview-of-main-benefits/
    If you want to get the most out of your digital advertisements, you must keep up with the current developments in this field.
    Digital marketing is critical to the success of your online business. If you want to enhance your sales and overall growth, you need to robust and use successful digital marketing strategies.
    With 'n' number of benefits, it also has certain obstacles, and before we get into strategies, let's look at what challenges a firm must confront first`
    },
    {id:3,
        title:"What is Digital Marketing?",
        shortDEsc:"Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.",
    Bimage:"blogimg3.png",
    description:`Is it a marketing strategy, a tool, or a method of promoting your company?

    So here it is, the act of advertising products and services using digital channels such as social media, SEO, email, and mobile applications is known as digital marketing. Digital marketing refers to any type of marketing that uses electronic technology. 
    
    With the introduction of the internet in the 1990s, digital marketing grew in popularity.
    
    Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.
    According to statistics, worldwide digital advertising spend has reached $458.16 billion in 2021. This implies that digital marketing is, was & will be an essential tool for every business owner looking to increase income. Simply looking around will reveal that digital technology has altered the environment we live in. All approaches that were employed 5-10 years ago no longer work. This is a dynamic and quickly evolving industry. 
    To know more about such data and its increase you can look into this -  https://nix-united.com/blog/digital-marketing-for-small-businesses-overview-of-main-benefits/
    If you want to get the most out of your digital advertisements, you must keep up with the current developments in this field.
    Digital marketing is critical to the success of your online business. If you want to enhance your sales and overall growth, you need to robust and use successful digital marketing strategies.
    With 'n' number of benefits, it also has certain obstacles, and before we get into strategies, let's look at what challenges a firm must confront first`
    },
    {id:4,
        title:"What is Digital Marketing?",
    Bimage:"blogimg4.png",
    shortDEsc:"Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.",
    description:`Is it a marketing strategy, a tool, or a method of promoting your company?

    So here it is, the act of advertising products and services using digital channels such as social media, SEO, email, and mobile applications is known as digital marketing. Digital marketing refers to any type of marketing that uses electronic technology. 
    
    With the introduction of the internet in the 1990s, digital marketing grew in popularity.
    
    Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.
    According to statistics, worldwide digital advertising spend has reached $458.16 billion in 2021. This implies that digital marketing is, was & will be an essential tool for every business owner looking to increase income. Simply looking around will reveal that digital technology has altered the environment we live in. All approaches that were employed 5-10 years ago no longer work. This is a dynamic and quickly evolving industry. 
    To know more about such data and its increase you can look into this -  https://nix-united.com/blog/digital-marketing-for-small-businesses-overview-of-main-benefits/
    If you want to get the most out of your digital advertisements, you must keep up with the current developments in this field.
    Digital marketing is critical to the success of your online business. If you want to enhance your sales and overall growth, you need to robust and use successful digital marketing strategies.
    With 'n' number of benefits, it also has certain obstacles, and before we get into strategies, let's look at what challenges a firm must confront first`
    },
    {id:5,
        title:"What is Digital Marketing?",
    Bimage:"blogimg5.png",
    shortDEsc:"Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.",
    description:`Is it a marketing strategy, a tool, or a method of promoting your company?

    So here it is, the act of advertising products and services using digital channels such as social media, SEO, email, and mobile applications is known as digital marketing. Digital marketing refers to any type of marketing that uses electronic technology. 
    
    With the introduction of the internet in the 1990s, digital marketing grew in popularity.
    
    Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.
    According to statistics, worldwide digital advertising spend has reached $458.16 billion in 2021. This implies that digital marketing is, was & will be an essential tool for every business owner looking to increase income. Simply looking around will reveal that digital technology has altered the environment we live in. All approaches that were employed 5-10 years ago no longer work. This is a dynamic and quickly evolving industry. 
    To know more about such data and its increase you can look into this -  https://nix-united.com/blog/digital-marketing-for-small-businesses-overview-of-main-benefits/
    If you want to get the most out of your digital advertisements, you must keep up with the current developments in this field.
    Digital marketing is critical to the success of your online business. If you want to enhance your sales and overall growth, you need to robust and use successful digital marketing strategies.
    With 'n' number of benefits, it also has certain obstacles, and before we get into strategies, let's look at what challenges a firm must confront first`
    },
    {id:6,
        title:"What is Digital Marketing?",
    Bimage:"blogimg5.png",
    shortDEsc:"Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.",
    description:`Is it a marketing strategy, a tool, or a method of promoting your company?

    So here it is, the act of advertising products and services using digital channels such as social media, SEO, email, and mobile applications is known as digital marketing. Digital marketing refers to any type of marketing that uses electronic technology. 
    
    With the introduction of the internet in the 1990s, digital marketing grew in popularity.
    
    Digital marketing employs some of the same ideas as conventional marketing and is frequently regarded as an alternative means for businesses to contact consumers and comprehend their behaviour.
    According to statistics, worldwide digital advertising spend has reached $458.16 billion in 2021. This implies that digital marketing is, was & will be an essential tool for every business owner looking to increase income. Simply looking around will reveal that digital technology has altered the environment we live in. All approaches that were employed 5-10 years ago no longer work. This is a dynamic and quickly evolving industry. 
    To know more about such data and its increase you can look into this -  https://nix-united.com/blog/digital-marketing-for-small-businesses-overview-of-main-benefits/
    If you want to get the most out of your digital advertisements, you must keep up with the current developments in this field.
    Digital marketing is critical to the success of your online business. If you want to enhance your sales and overall growth, you need to robust and use successful digital marketing strategies.
    With 'n' number of benefits, it also has certain obstacles, and before we get into strategies, let's look at what challenges a firm must confront first`
    }
]



export const SingleBlog=()=>{
 const params=useParams()



console.log(params)
let filterData=blogData.filter((el)=>{
    return el.id==params.id
})

 
 
 return(<div> 
    <Box className="single-blog-container">
    <Heading className="single-blog-heading" fontSize={"4vw"} >{filterData[0].title}</Heading>
    <Image className="single-blog-img" src={filterData[0].Bimage} />   
      
        <Box className="single-blog-text"><Text>{filterData[0].description}</Text></Box>
    </Box>
    </div>

)
}