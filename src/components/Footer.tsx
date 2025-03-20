
import React from 'react';
import { Linkedin, Github, Mail, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center mb-8 hover:bg-gray-800 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <h3 className="text-2xl font-serif font-medium mb-6">Nshuti Silver</h3>
          
          <div className="flex items-center space-x-6 mb-8">
            <a 
              href="#" 
              className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="#" 
              className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="mailto:nshuti.silver@example.com" 
              className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="#" 
              className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
          
          <div className="w-full max-w-md border-t border-gray-200 pt-8 mt-2 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Nshuti Silver. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
