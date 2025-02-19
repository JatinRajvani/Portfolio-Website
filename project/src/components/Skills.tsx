// import React from 'react';
import { Code2, Server, Database, Palette, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 size={24} />,
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    skills: ['Node.js', 'Express', 'REST APIs']
  },
  {
    title: 'Database',
    icon: <Database size={24} />,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'UI/UX',
    icon: <Palette size={24} />,
    skills: ['Figma', 'Responsive Design', 'Prototyping']
  },
  {
    title: 'Soft Skills',
    icon: <Users size={24} />,
    skills: ['Teamwork', 'Communication', 'Problem Solving']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-purple-500">{category.icon}</span>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;