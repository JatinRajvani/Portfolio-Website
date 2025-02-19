import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl transform rotate-1" />
          <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <div className="space-y-6 text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg leading-relaxed"
              >
                I'm a Computer Science student at Rai University, pursuing my B.Tech in CSE.
                My journey in web development started with a curiosity to create beautiful
                and functional websites that make a difference.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed"
              >
                Currently focused on modern web technologies, I'm passionate about creating
                seamless user experiences and solving complex problems through code.
                I believe in continuous learning and staying updated with the latest
                industry trends.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg leading-relaxed"
              >
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or working on personal projects
                to enhance my skills.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;