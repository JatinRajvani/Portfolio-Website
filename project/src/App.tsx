import React from 'react';
import { Github, Linkedin, Twitter, Globe, Download, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;