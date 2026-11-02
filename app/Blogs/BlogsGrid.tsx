import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import { blogPosts } from "../data/blogPosts";
import BlogCard from "./BlogCard";

const BlogsGrid = () => {
  return (
    <AnimatedDiv ClassName="blog-list mt-3">
      {blogPosts.map((blog) => (
        <BlogCard key={blog.url} blog={blog} />
      ))}
    </AnimatedDiv>
  );
};

export default BlogsGrid;
