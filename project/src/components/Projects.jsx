import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Homy",
    description: "Accommodation & Services Platform",
    image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1739942957/ezkwfhgbsnoxg1o9y2bp.png",
    github: "https://github.com/jatinrajvani/homy",
    live: "https://homy-demo.com",
    tags: [
      { name: "Homy", videoId: "1h7gEIqnDdYA8gAHApOY-VPsXtlOEphW0" }, ],
  },
  {
    title: 'Tata Motors Static Clone',
    description: "Recreated the static UI of Tata Motors' official website using HTML, CSS, and JavaScript, ensuring a responsive and visually accurate design that mirrors the original layout and user experience.",
    image: 'data:image/png;base64,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',
    github: 'https://github.com/JatinRajvani/Tata-Motors-Clone',
    live: 'https://tatamotorsclone.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Nvidia Static Clone',
    description:"Built a static replica of Nvidia’s website, focusing on high-quality visuals, animations, and a structured layout to match the brand’s sleek and modern aesthetic.",
    image: 'https://res.cloudinary.com/doqzxuxb1/image/upload/v1739790349/enceuaruurukyhwelget.png',
    github: 'https://github.com/JatinRajvani/Nvidia-Clone-',
    live: 'https://nvidiaclone.netlify.app//',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Naukri.com Static Clone',
    description: "Developed a static clone of Naukri.com, replicating its job listing interface with HTML, CSS, and JavaScript, emphasizing clean design and intuitive navigation.",
    image: 'https://res.cloudinary.com/doqzxuxb1/image/upload/v1739790417/lo4pephpabhccdcvoos9.png',
    github: 'https://github.com/JatinRajvani/Naukri-.com-Clone',
    live: 'https://naukriclone2.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Figma UI Designs',
    description: 'Collection of modern UI designs created in Figma',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop',
    github: 'https://github.com/yourusername/ui-designs',
    live: 'https://figma.com/@yourusername',
    tags: ['Figma', 'UI/UX', 'Design']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
          >
            <div className="relative h-48">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>


              <div className="flex flex-wrap gap-2 mb-4">
  {project.tags.map((tag, tagIndex) => (
    <div key={tagIndex} className="text-sm px-3 py-1 bg-gray-700/50 rounded-lg text-gray-300">

      {/* Embed the video only if videoId is not null */}
      {tag.videoId && (
        <iframe
          src={`https://drive.google.com/file/d/${tag.videoId}/preview`}
          width="390"
          height="300"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      )}
    </div>
  ))}
</div>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;