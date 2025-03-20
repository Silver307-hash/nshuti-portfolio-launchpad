
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h5 className="section-subtitle animate-fade-in-up">Get In Touch</h5>
          <h2 className="section-title animate-fade-in-up">Contact Me</h2>
          
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2 animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                I'm currently looking for opportunities to further my education and begin my professional journey. Feel free to reach out if you'd like to connect.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide">Email</h4>
                    <a href="mailto:nshuti.silver@example.com" className="text-gray-600 hover:text-black transition-colors">
                      nshuti.silver@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide">Phone</h4>
                    <a href="tel:+250789123456" className="text-gray-600 hover:text-black transition-colors">
                      +250 789 123 456
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide">Location</h4>
                    <p className="text-gray-600">
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 animate-fade-in-up">
              <form className="glass-effect p-6 md:p-8 rounded-sm">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  className="w-full md:w-auto inline-flex items-center justify-center text-sm font-medium tracking-wider uppercase py-3 px-6 border-2 border-black bg-black text-white hover:bg-transparent hover:text-black transition-all duration-300 ease-in-out"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
