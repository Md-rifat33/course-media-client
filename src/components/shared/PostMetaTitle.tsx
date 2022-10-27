import React from 'react';
import { Link } from 'react-router-dom';

type PostMetaTitle = {
  category: string;
  title: string;
  isShowLink?: boolean;
  center: boolean;
  slug: string;
};

const PostMetaTitle: React.FC<PostMetaTitle> = ({ category, title, isShowLink = true, center, slug }) => {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
      </div>
      <h2 className={`text-2xl mt-4 ${center ? 'text-center' : ''}`}>
        {isShowLink ? <Link to={`${slug}`}>{title}</Link> : title}
      </h2>
    </>
  );
};

export default PostMetaTitle;
