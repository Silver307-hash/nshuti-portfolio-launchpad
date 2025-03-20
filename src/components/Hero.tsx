
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block text-sm uppercase tracking-widest font-medium text-gray-500 mb-6 animate-fade-in-down">
            Welcome to my portfolio
          </span>
          
          <h1 className="text-5xl md:text-7xl font-serif mb-6 md:mb-8 animate-fade-in-up">
            <span className="block">I'm</span>
            <span className="block font-semibold mt-2">Nshuti Silver</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            A dedicated student with a passion for excellence, seeking new opportunities for growth and achievement.
          </p>
          
          <div className="animate-fade-in animation-delay-600">
            <button 
              onClick={scrollToAbout}
              className="inline-flex items-center text-sm font-medium tracking-wider uppercase py-3 px-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            >
              Discover More
              <ArrowDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
