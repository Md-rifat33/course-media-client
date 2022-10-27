import React from 'react';

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="container mx-auto px-10">{children}</div>;
};
