import React from 'react';
import { AcademicCap } from '~/assets/svgIcons';
import Feature from './Feature';

const Features: React.FC = () => {
  return (
    <div className="py-12 px-4 align-middle bg-neutral-focus text-primary">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1160px] mx-auto">
        <Feature icon={<AcademicCap />} title="+200 courses" description="Explore a variety of fresh topics" />
        <Feature icon={<AcademicCap />} title="Expert teachers" description="Find the right instructor for you" />
        <Feature icon={<AcademicCap />} title="Focus on target" description="Increase your personal expertise" />
      </div>
    </div>
  );
};

export default Features;
