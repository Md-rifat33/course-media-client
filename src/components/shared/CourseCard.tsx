import React from 'react';
import { Link } from 'react-router-dom';

type CourseCardProps = {
  title: string;
  image: string;
  description: string;
  category: string;
  slug: string;
};

const CourseCard: React.FC<CourseCardProps> = ({ title, image, description, category, slug }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-2">
      <figure className="w-full">
        <img src={image} alt="logo" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/${slug}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
