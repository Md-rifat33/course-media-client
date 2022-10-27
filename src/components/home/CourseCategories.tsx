import React from 'react';
import CourseCard from '../shared/CourseCard';
import CategoryCard from './CategoryCard';

const CourseCategories: React.FC = () => {
  return (
    <div className="pt-32">
      <h1 className="text-center text-4xl">Popular Courses</h1>
      <h2 className="text-center text-2xl mt-2">Find your dream course category.</h2>
      <div className="flex justify-center flex-wrap mt-8">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <div className="md:text-center max-w-[1580px] mx-auto mt-5 px-4">
        <button className="btn w-full md:w-[200px]">View All Categories</button>
      </div>
    </div>
  );
};

export default CourseCategories;
