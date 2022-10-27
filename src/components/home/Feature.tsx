import React, { ReactNode } from 'react';

type FeatureProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex justify-center items-center flex-col p-2">
      <>{icon}</>
      <p className="text-xl text-warning">{title}</p>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default Feature;
