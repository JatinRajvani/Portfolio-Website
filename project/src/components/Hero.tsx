import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="w-full aspect-square rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full" />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400">
            Computer Science Student & Web Developer
          </h2>
          <p className="text-gray-300 max-w-lg">
            Passionate about creating beautiful, functional, and user-friendly websites.
            Currently pursuing B.Tech in CSE at Rai University.
          </p>
          <button className="group relative px-6 py-3 font-semibold">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-gray-800 border-2 border-purple-500 group-hover:bg-purple-500"></span>
            <span className="relative text-purple-500 group-hover:text-white flex items-center gap-2">
              <Download size={20} /> Download Resume
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;