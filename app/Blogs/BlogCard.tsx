import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type BlogCardType = {
  name: string;
  description: string;
  url: string;
};

const BlogCard = ({ blog }: { blog: BlogCardType }) => {
  return (
    <article className="blog-card">
      <div className="blog-card-content">
        <div className="blog-meta">
          <span>DEVELOPER NOTES</span>
          <span aria-hidden="true">·</span>
          <span>HASHNODE</span>
        </div>
        <h3>
          <Link href={blog.url} target="_blank" rel="noreferrer">
            {blog.name}
          </Link>
        </h3>
        <p>{blog.description}</p>
        <Link
          className="blog-read-link"
          href={blog.url}
          target="_blank"
          rel="noreferrer"
        >
          Read on Hashnode <ArrowUpRight aria-hidden="true" size={14} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
