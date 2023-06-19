import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/HomePage"
import { AboutUs } from "../Pages/AboutUsPage/AboutUs"
import { Blog } from "../Pages/Blogs/Blog"
import { SingleBlog } from "../Pages/Blogs/SingleBlog"
import { SingleBlogPage } from "../Pages/Blogs/SingleBlogPage"
import { ContactUsPage } from "../Pages/ContactUsPage/ContactUsPage"
import { ServicePage } from "../Pages/ServicePage/ServicePage"
import { BlogOne } from "../Pages/Blogs/BlogOne"
import { ContentWriterPage } from "../Pages/SingleServicePage/ContentWriter"
import { Orm } from "../Pages/SingleServicePage/OrmPage"
import { SocialMediaManagmentPage } from "../Pages/SingleServicePage/SocialMediaManagment"

export const AllRoutes=()=>{


    return(<div>
        <Routes>
            
            <Route path="/" element= {<HomePage />}/>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/:id" element={<SingleBlog/>} />
            <Route path="/single" element={<SingleBlogPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/content-writing" element={<ContentWriterPage />} />
            <Route path="/online-reputation-managment" element={<Orm />} />
            <Route path="/social-media-managment" element={<SocialMediaManagmentPage />} />
            <Route path="/effective-digital-marketing-startegies-for-small-businesses" element={<BlogOne />} />

        </Routes>
    </div>)
}