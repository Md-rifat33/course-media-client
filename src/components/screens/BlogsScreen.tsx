import React from 'react';
import BlogCard from '~/components/shared/BlogCard';

const BlogsScreen: React.FC = () => {
  return (
    <div className="min-h-[93.5vh]">
      <h1 className="text-5xl text-center">Blogs</h1>
      <div className="flex justify-center flex-wrap mt-8 bg-base-100 shadow-lg p-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogsScreen;
