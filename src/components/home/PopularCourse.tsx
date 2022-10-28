import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '~/components/shared/CourseCard';
import {  fetchCourses } from '~/lib/services';

const PopularCourse: React.FC = () => {
  const [courses, setCourses] = useState<Object | null>(null);
  useEffect(() => {
    const data = fetchCourses();
    setCourses(data);
  }, []);

  

  return (
    <div className="pt-32">
      <h1 className="text-center text-4xl">Popular Courses</h1>
      <h2 className="text-center text-2xl mt-2">Find your dream course in online with low price.</h2>
      <div className="flex justify-center flex-wrap mt-8">
        {/*// @ts-ignore */}
        {courses?.data?.results?.map((item, i) => {
          if (i < 4) {
            return (
              <CourseCard key={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                category={item.category}
                slug={item.slug}
              />
            );
          } else return null;
        })}
      </div>
      <div className="md:text-center max-w-[1580px] mx-auto mt-5 px-4">
        <Link to="/courses" className="btn w-full md:w-[200px]">
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default PopularCourse;
