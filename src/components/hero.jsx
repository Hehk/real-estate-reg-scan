import Link from 'next/link';
import React from 'react';
import Button from '@/components/button'

const Hero = () => {
  return (
    <section className=" min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br to-blue-300 via-purple-400 from-indigo-400 py-1">
            Supercharge Your Real Estate Planning
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-8 opacity-80">
            Simplify local regulations and save time, money, and labor with our AI-powered platform.
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
