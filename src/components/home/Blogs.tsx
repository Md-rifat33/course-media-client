import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '~/components/shared/BlogCard';

const Blogs: React.FC = () => {
  return (
    <div className="py-32">
      <h1 className="text-center text-4xl">Popular Blogs</h1>
      <h2 className="text-center text-2xl mt-2">Read ours blogs to gain knowledge.</h2>
      <div className="flex justify-center flex-wrap mt-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="md:text-center max-w-[1580px] mx-auto mt-5 px-4">
        <Link to="/blogs" className="btn w-full md:w-[200px]">
          View All Blogs
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
