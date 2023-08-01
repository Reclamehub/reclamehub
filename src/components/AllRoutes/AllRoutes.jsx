import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom"
import React,{useEffect } from "react"
import { HomePage } from "../Pages/HomePage/HomePage"
import { AboutUs } from "../Pages/AboutUsPage/AboutUs"
import { Blog } from "../Pages/Blogs/Blog"
import { SingleBlog } from "../Pages/Blogs/SingleBlog"
import { SingleBlogPage } from "../Pages/Blogs/SingleBlogPage"
import { ContactUsPage } from "../Pages/ContactUsPage/ContactUsPage"
import { ServicePage } from "../Pages/ServicePage/ServicePage"
import { BlogOne } from "../Pages/Blogs/BlogOne"
import { ContactForm } from "../ContactForm/ContactForm"
import {SMM}from "../Pages/SingleServicePage/SMM"
import {ContentWriter} from "../Pages/SingleServicePage/ContentWriter"
import {ORM}from "../Pages/SingleServicePage/ORM"
import {GD}from "../Pages/SingleServicePage/GD"
import {WDD}from "../Pages/SingleServicePage/WDD"
import {DA}from "../Pages/SingleServicePage/DA"
import {VAF}from "../Pages/SingleServicePage/VAF"
import {EM}from "../Pages/SingleServicePage/EM"
import {SEO}from "../Pages/SingleServicePage/SEO"
import {CM}from "../Pages/SingleServicePage/CM"
import {AD} from "../Pages/SingleServicePage/AD"
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return children;
  };

export const AllRoutes = () => {


    return (
       <ScrollToTop>
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/:id" element={<SingleBlog />} />
            <Route path="/single" element={<SingleBlogPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/SMM" element={<SMM />} />
            <Route path="/ContentWriter" element={<ContentWriter/>} />
            <Route path="/ORM" element={<ORM />} />
            <Route path="/GD" element={<GD />} />
            <Route path="/WDD" element={<WDD />} />
            <Route path="/DA" element={<DA />} />
            <Route path="/VAF" element={<VAF />} />
            <Route path="/EM" element={<EM />} />
            <Route path="/SEO" element={<SEO />} />
            <Route path="/CM" element={<CM />} />
            <Route path="/AD" element={<AD />} />
            <Route path="/effective-digital-marketing-startegies-for-small-businesses" element={<BlogOne />} />

        </Routes>

         </ScrollToTop> 
    )
}