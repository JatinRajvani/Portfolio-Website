import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </span>
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-purple-500 bg-purple-500/10 p-3 rounded-lg">
                {category.icon}
              </span>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </motion.div>
            <ul className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 + skillIndex * 0.1 }}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;