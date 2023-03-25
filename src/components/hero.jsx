import Link from 'next/link';
import React from 'react';
import Button from '@/components/button'

const heading = "Supercharge Your Real Estate Planning"
const description = "We reduce commercial development building and regulatory approval times by 100 days on average with AI"

const Hero = ({}) => {
  return (
    <section className="flex items-center mt-32 mb-24 mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br to-blue-300 via-purple-400 from-indigo-400 py-1">
            {heading}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-70">
            {description}
          </p>
          <div className="flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
