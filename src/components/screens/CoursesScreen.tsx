import React, { useEffect, useState } from 'react';
import CourseCard from '~/components/shared/CourseCard';
import { fetchCourses } from '~/lib/services';

const CoursesScreen: React.FC = () => {
  const [courses, setCourses] = useState<Object | null>(null);
  useEffect(() => {
    async function getdata():Promise<void>{
      const data =  fetchCourses()
    setCourses(data);
    }
    getdata()
  }, [])

  


  return (
    <div className="min-h-screen bg-base-200 flex w-full px-5 flex-col md:flex-row">
      <div className="md:w-1/5 p-2 pb-5 rounded min-w-80 w-full">
        <ul className="menu bg-base-100 p-2 rounded-box w-full h-full">
          <li className="menu-title">
            <span>Category</span>
          </li>
          <li>
            <a className="active">Programming</a>
          </li>
          <li>
            <a>Business</a>
          </li>
        </ul>
      </div>
      <div className="md:w-4/5 w-full p-2 pt-4 pb-5 rounded-lg bg-base-100">
        <div className="flex justify-center flex-wrap">
          {/*// @ts-ignore */}
          {courses?.data?.results?.map((item) => {
            console.log(item);
            return (
              <CourseCard
                title={item.title}
                image={item.image}
                description={item.description}
                category={item.category}
                slug={item.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursesScreen;
