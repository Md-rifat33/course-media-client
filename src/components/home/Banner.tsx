import React from 'react';
import bannerImage from '~/assets/banner2.jpg';

const Banner: React.FC = () => {
  return (
    <div className="hero min-h-[60vh] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">World No 1 Online Best Courses Platform</h1>
          <p className="mb-5 text-xl">
            WHAT WOULD YOU LEARN? Increase your expertise in business, technology and personal development. You can develop new skills and achieving their goals by learning from the extensive library of various courses. Subjects that are available in Udemy are taught by expert instructions.
            The outline of courses can be viewed on all devices connected to the internet. You do not require any prequalification to take any course.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
