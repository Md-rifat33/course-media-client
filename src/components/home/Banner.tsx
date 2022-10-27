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
            WHAT WOULD YOU LEARN? Increase your expertise in business, technology and personal development. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Accusamus, maiores aspernatur rerum modi officiis consectetur,
            voluptas, natus ipsum quos impedit perspiciatis. Dignissimos quia est provident laudantium illo, temporibus
            exercitationem voluptas sed dolorem impedit obcaecati officia aperiam veritatis ab? Doloremque quos quaerat
            iste, libero laudantium similique sequi sunt hic veniam iusto?
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
