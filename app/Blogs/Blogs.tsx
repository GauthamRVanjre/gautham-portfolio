import React from "react";
import BlogsGrid from "./BlogsGrid";
import { blogSectionContent } from "../data/blogPosts";

const Blogs = () => {
  return (
    <section id="blogs" className="portfolio-section">
      <h2 className="section-kicker">{blogSectionContent.kicker}</h2>
      <p className="section-title">{blogSectionContent.title}</p>

      {/* <div className="dark:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[300px] h-[50px] blur-3xl absolute z-[-999] right-[3rem] top-[8rem] opacity-80"></div> */}

      <BlogsGrid />
    </section>
  );
};

export default Blogs;
