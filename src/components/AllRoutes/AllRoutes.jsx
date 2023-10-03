import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom"
import React,{useEffect } from "react"
import { HomePage } from "../Pages/HomePage/HomePage"
import { AboutUs } from "../Pages/AboutUsPage/AboutUs"
import { Blog } from "../Pages/Blogs/Blog"
// import { SingleBlog } from "../Pages/Blogs/SingleBlog"
// import { SingleBlogPage } from "../Pages/Blogs/SingleBlogPage"
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
import {Explore} from "../Pages/Explore/Explore"
import { ContactUsAddress } from "../Pages/ContactUsPage/ContactUsAddress"
import IsoCertificate from "../Pages/ExpServiceTypes/IsoCertificate"
import {MSME} from "../Pages/ExpServiceTypes/MSME"
import {Fssai} from "../Pages/ExpServiceTypes/Fssai"
import {PAN} from "../Pages/ExpServiceTypes/PAN"
import {TAN} from "../Pages/ExpServiceTypes/TAN"
import {TLO} from "../Pages/ExpServiceTypes/TLO"
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
        <Route path="*" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/address" element={<ContactUsAddress/>}/>
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/social-media-management" element={<SMM />} />
            <Route path="/content-marketing" element={<ContentWriter/>} />
            <Route path="/online-reputation-management" element={<ORM />} />
            <Route path="/graphic-designing" element={<GD />} />
            <Route path="/web-design-development" element={<WDD />} />
            <Route path="/digital-advertisement" element={<DA />} />
            <Route path="/video-ad-film" element={<VAF />} />
            <Route path="/email-marketing" element={<EM />} />
            <Route path="/seo-development" element={<SEO />} />
            <Route path="/campaign-marketing" element={<CM />} />
            <Route path="/app-design-development" element={<AD />} />
            <Route path="/ISO-Certification" element={<IsoCertificate />} />
            <Route path="/MSME-Registration" element={<MSME/>}/>
            <Route path="/FSSAI-Registration" element={<Fssai/>}/>
            <Route path="/About-PAN" element={<PAN/>}/>
            <Route path="/About-TAN" element={<TAN/>}/>
            <Route path="/Trade-License" element={<TLO/>}/>
            <Route path="/effective-digital-marketing-strategies-for-small-businesses" element={<BlogOne />} />
    {/* <Route path="/:id" element={<SingleBlog />} />
            <Route path="/single" element={<SingleBlogPage />} /> */}
        </Routes>

       </ScrollToTop> 
    )
}