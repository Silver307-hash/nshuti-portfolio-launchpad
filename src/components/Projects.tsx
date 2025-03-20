
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link, ExternalLink, Calendar, Layers } from 'lucide-react';

const Projects = () => {
  const categories = ["All", "Academic", "Volunteer", "Personal"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      title: "Environmental Research Project",
      category: "Academic",
      date: "January 2023",
      description: "Conducted research on local water quality and its impact on community health. Collected samples, analyzed data, and presented findings to teachers and peers.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "#"
    },
    {
      title: "Community Clean-up Initiative",
      category: "Volunteer",
      date: "September 2022",
      description: "Organized and led a community clean-up event that mobilized over 30 students to beautify the neighborhood park and plant trees.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "#"
    },
    {
      title: "Science Fair Physics Demonstration",
      category: "Academic",
      date: "March 2022",
      description: "Designed and built a demonstration of key physics principles for the annual science fair, winning second place for creativity and educational value.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "#"
    },
    {
      title: "Digital Art Portfolio",
      category: "Personal",
      date: "2021 - Present",
      description: "Developed a collection of digital artwork exploring themes of nature and technology, showcasing growth in technical skills and artistic vision.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "#"
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h5 className="section-subtitle animate-fade-in-up">My Work</h5>
          <h2 className="section-title animate-fade-in-up">Projects</h2>
          
          <div className="flex justify-center mb-12 animate-fade-in-up">
            <div className="inline-flex p-1 bg-gray-100 rounded-full">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    activeCategory === category 
                      ? "bg-white shadow-sm text-black" 
                      : "text-gray-500 hover:text-gray-900"
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="glass-effect rounded-sm overflow-hidden animate-fade-in-up transition-all duration-300 hover:shadow-md group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-black transition-colors"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
