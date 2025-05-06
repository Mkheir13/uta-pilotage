import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 px-4 relative transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`mb-10 text-center transition-all duration-700 transform ${
          isVisible ? 'translate-y-0' : 'translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text inline-block">
            {title}
          </h2>
          <div className={`h-1 w-40 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full transition-all duration-1000 ${
            isVisible ? 'w-40 opacity-100' : 'w-0 opacity-0'
          }`}></div>
        </div>
        <div className={`transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;