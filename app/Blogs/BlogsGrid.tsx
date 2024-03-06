import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import { Blogs } from "../data/data";
import BlogCard from "./BlogCard";

const BlogsGrid = () => {
  return (
    <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4 sm:gap-5">
      {Blogs.map((blog) => (
        <BlogCard key={blog.url} blog={blog} />
      ))}
    </AnimatedDiv>
  );
};

export default BlogsGrid;
