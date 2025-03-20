
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h5 className="section-subtitle animate-fade-in-up">About Me</h5>
          <h2 className="section-title animate-fade-in-up">Who I Am</h2>
          
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2 animate-fade-in-up">
              <div className="aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Nshuti Silver Portrait" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="md:col-span-3 animate-fade-in-up">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hello! I'm Nshuti Silver, a recent high school graduate with a passion for learning and personal growth. I am currently seeking opportunities to further my education and begin my professional journey.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Throughout my academic career, I've developed strong analytical skills, effective communication abilities, and a dedication to excellence. I thrive in collaborative environments and enjoy taking on new challenges that allow me to expand my knowledge and capabilities.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Outside of academics, I'm passionate about technology, community service, and continuous learning. I believe in the power of education to transform lives and am excited about the next chapter in my academic and professional development.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h6 className="text-sm font-medium uppercase tracking-wider mb-3">Interests</h6>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Technology & Innovation</li>
                    <li className="text-gray-600">Community Service</li>
                    <li className="text-gray-600">Academic Research</li>
                  </ul>
                </div>
                
                <div>
                  <h6 className="text-sm font-medium uppercase tracking-wider mb-3">Skills</h6>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Critical Thinking</li>
                    <li className="text-gray-600">Communication</li>
                    <li className="text-gray-600">Leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
