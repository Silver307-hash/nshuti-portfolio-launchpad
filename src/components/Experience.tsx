
import React from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "Jun 2022 - Aug 2022",
      title: "Summer Intern",
      company: "Local Community Center",
      location: "Kigali, Rwanda",
      description: "Assisted in organizing community events and programs for youth. Developed leadership and organizational skills while working with diverse community members.",
      responsibilities: [
        "Coordinated weekly activities for children aged 8-14",
        "Assisted in developing educational materials",
        "Helped manage social media accounts and event promotion",
        "Supported senior staff with administrative tasks"
      ]
    },
    {
      period: "Jan 2021 - Dec 2021",
      title: "Student Volunteer",
      company: "City Library",
      location: "Kigali, Rwanda",
      description: "Volunteered at the local library to help organize books, assist visitors, and support literacy programs for young children.",
      responsibilities: [
        "Organized and shelved books according to the library classification system",
        "Assisted library visitors with finding resources and information",
        "Participated in weekly reading programs for elementary school children",
        "Helped with digitizing library records"
      ]
    },
    {
      period: "Jun 2020 - Aug 2020",
      title: "Peer Tutor",
      company: "School Tutoring Program",
      location: "Kigali, Rwanda",
      description: "Provided academic support to fellow students in mathematics and science. Developed communication and teaching skills while reinforcing personal knowledge.",
      responsibilities: [
        "Tutored students in algebra, geometry, and basic physics",
        "Created study materials and practice problems",
        "Provided one-on-one assistance to students struggling with concepts",
        "Collaborated with teachers to track student progress"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h5 className="section-subtitle animate-fade-in-up">My Background</h5>
          <h2 className="section-title animate-fade-in-up">Experience</h2>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="glass-effect p-6 md:p-8 rounded-sm animate-fade-in-up transition-all duration-300 hover:shadow-md"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <div className="flex items-center mt-2 text-gray-600">
                      <Briefcase size={16} className="mr-2 text-gray-500" />
                      <span>{experience.company}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2 text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{experience.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <Check size={16} className="mr-2 mt-1 text-gray-400" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
