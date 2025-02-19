import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Homy',
    description: 'Accommodation & Services Platform',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
    github: 'https://github.com/yourusername/homy',
    live: 'https://homy-demo.com'
  },
  {
    title: 'Website Clones',
    description: 'Static clones of popular websites including Tata Motors, Nvidia, Netflix, and more',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    github: 'https://github.com/yourusername/website-clones',
    live: 'https://website-clones-demo.com'
  },
  {
    title: 'Figma UI Designs',
    description: 'Collection of modern UI designs created in Figma',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop',
    github: 'https://github.com/yourusername/ui-designs',
    live: 'https://figma.com/@yourusername'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all hover:-translate-y-2"
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;