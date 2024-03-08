"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import Tilt from "react-parallax-tilt";

type BlogCardType = {
  name: string;
  image: StaticImageData;
  description: string;
  url: string;
};

const BlogCard = ({ blog }: { blog: BlogCardType }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="7px"
      className="h-fit"
    >
      <div className="overflow-hidden border  dark:border-0 rounded-lg dark:bg-zinc-900">
        <Link href={`${blog.url}`} target="_blank">
          <Image
            className="object-cover md:h-[180px]"
            src={blog.image}
            alt={blog.name}
          />
        </Link>

        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold my-3 hover:text-violet-500 ">
              {blog.name}
            </h3>
          </div>

          <p className="opacity-80 pb-4">{blog.description}</p>
          {blog.url && (
            <a
              className="rounded bg-green-100 p-2  text-xs font-bold me-2 px-2.5 py-0.5 dark:bg-green-900 dark:text-green-300"
              href={blog.url}
              target="_blank"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </Tilt>
  );
};

export default BlogCard;
