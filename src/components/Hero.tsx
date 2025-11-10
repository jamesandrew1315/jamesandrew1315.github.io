'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-20 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block text-blue-600 mt-3">James Andrew Tamayo</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-gray-600">
              I am a front-end developer who loves creating and exploring new things when it comes to the web. 
              I show huge interest in innovation and my goal is to provide solutions for people's lives to be 
              better with the help of technology.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-300 flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center gap-6">
              <a
                href="https://github.com/jamesandrew1315"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/jamesandrewtamayo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jamesandrew1315@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;