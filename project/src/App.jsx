import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import FigmaProjects from './components/Figma Project';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
    >
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] opacity-5 bg-cover bg-center pointer-events-none" />
      <Navbar />
      <main className="container mx-auto px-4 relative">
        <Hero />
        <Projects />
        <FigmaProjects/>
        <Skills />
        <About />
        <Contact />
      </main>
    </motion.div>
  );
}

export default App;