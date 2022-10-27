import React from 'react';

const BlogCard: React.FC = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-2">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Qus: What is Cors?</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Visit Blog</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
