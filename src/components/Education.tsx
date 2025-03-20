
import React from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      period: "2019 - 2023",
      degree: "High School Diploma",
      school: "Central High School",
      location: "Kigali, Rwanda",
      description: "Graduated with honors, maintaining a high GPA throughout my studies. Focused on science and mathematics courses, while also participating in extracurricular activities.",
      achievements: [
        "President of Student Council (2022-2023)",
        "National Merit Scholar",
        "First place in Regional Science Competition"
      ]
    },
    {
      period: "2017 - 2019",
      degree: "Junior High School",
      school: "Horizon Middle School",
      location: "Kigali, Rwanda",
      description: "Completed junior high school with distinction. Developed strong foundational knowledge in core subjects while participating in various school clubs.",
      achievements: [
        "Perfect attendance for two consecutive years",
        "Member of Mathematics Club",
        "Led community service initiatives"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h5 className="section-subtitle animate-fade-in-up">My Academic Journey</h5>
          <h2 className="section-title animate-fade-in-up">Education</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:translate-x-[-0.5px]"></div>
            
            {/* Education Items */}
            {educationItems.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "relative mb-16 md:mb-24 animate-fade-in-up",
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-auto" : "md:pl-12 md:ml-auto md:mr-auto"
                )}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div 
                  className={cn(
                    "flex md:block items-start",
                    index % 2 === 0 ? "md:items-end" : "md:items-start"
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] top-0 w-4 h-4 rounded-full bg-black"></div>
                  
                  {/* Content box */}
                  <div 
                    className={cn(
                      "ml-6 md:ml-0 md:mr-0 glass-effect p-6 md:p-8 rounded-sm max-w-md w-full transition-all duration-300 hover:shadow-md",
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    )}
                  >
                    <div className="flex items-center mb-4 text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                    <div className="flex items-center mb-4">
                      <GraduationCap size={16} className="mr-2 text-gray-500" />
                      <span className="text-gray-600">{item.school}</span>
                    </div>
                    
                    <div className="flex items-center mb-4 text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide mb-3 flex items-center">
                        <Award size={16} className="mr-2" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-start">
                            <span className="mr-2 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
