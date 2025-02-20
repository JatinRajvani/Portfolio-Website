// import React from 'react';
// import { motion } from 'framer-motion';
// import { Download } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen pt-16 flex items-center">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="relative group"
//         >
//           <div className="w-full aspect-square rounded-2xl overflow-hidden">
//             <motion.img
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1739944026/yyqcwx0ewp8mausb8h8j.png"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl group-hover:opacity-75 transition-opacity" />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-2xl" />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="space-y-8"
//         >
//           <div>
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="text-5xl md:text-7xl font-bold"
//             >
//               <span className="block mb-2">Hi, I'm</span>
//               <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
//                 Jatin Rajvani
//               </span>
//             </motion.h1>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-xl md:text-2xl text-gray-400 mt-4"
//             >
//               Computer Science Student & Web Developer
//             </motion.h2>
//           </div>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="text-gray-300 max-w-lg text-lg"
//           >
//             Passionate about creating beautiful, functional, and user-friendly websites.
//             Currently pursuing B.Tech in CSE at Rai University.
            

//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="group relative px-8 py-4 font-semibold text-lg overflow-hidden rounded-lg"
//           >
//             <div className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></div>
//             <div className="absolute inset-0 w-full h-full bg-gray-800 border-2 border-purple-500 group-hover:bg-purple-500 transition-colors duration-300"></div>
//             <span className="relative text-purple-500 group-hover:text-white flex items-center gap-2 transition-colors duration-300">
//               <Download size={24} /> Download Resume
//             </span>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Hero;




import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone } from 'lucide-react';
// import handleDownload from '../Public/download'

const Hero = () => {

  // <handleDownload/>
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1hKpnTHMQ_IyR1QpOilYnNeFqpSxH6H6w/view?usp=sharing'; // Ensure the resume is placed in the public folder
    link.download = 'Jatin_Rajvani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="w-full aspect-square rounded-2xl overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1739944026/yyqcwx0ewp8mausb8h8j.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl group-hover:opacity-75 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-2xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold"
            >
              <span className="block mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Jatin Rajvani
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mt-4"
            >
              Computer Science Student & Web Developer
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-300 max-w-lg text-lg"
          >
            Passionate about creating beautiful, functional, and user-friendly websites.
            Currently pursuing B.Tech in CSE at Rai University.
          </motion.p>
          <div className="space-y-2">
            <motion.div className="flex items-center gap-3 text-gray-300 text-lg">
              <Mail size={24} className="text-purple-500" />
              <span>jatin.rajvani@example.com</span>
            </motion.div>
            <motion.div className="flex items-center gap-3 text-gray-300 text-lg">
              <Phone size={24} className="text-purple-500" />
              <span>+91 98765 43210</span>
            </motion.div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="group relative px-8 py-4 font-semibold text-lg overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></div>
            <div className="absolute inset-0 w-full h-full bg-gray-800 border-2 border-purple-500 group-hover:bg-purple-500 transition-colors duration-300"></div>
            <span className="relative text-purple-500 group-hover:text-white flex items-center gap-2 transition-colors duration-300">
              <Download size={24} /> Download Resume
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
