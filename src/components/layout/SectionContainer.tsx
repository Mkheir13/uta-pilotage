import React, { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text inline-block">
            {title}
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;