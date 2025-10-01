import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {


  const projects = [
    {
      title: "Project One",
      description: "A web application built with React and modern technologies.",
      tags: ["React", "TailwindCSS", "Node.js"],
      image: "path_to_image",
      link: "#"
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with full payment integration.",
      tags: ["React", "Redux", "MongoDB"],
      image: "path_to_image",
      link: "#"
    },
    {
      title: "Project Three",
      description: "A real-time chat application with websockets.",
      tags: ["Socket.io", "Express", "React"],
      image: "path_to_image",
      link: "#"
    },
  ];

  return (
  <section id="work" className="relative min-h-screen py-20 bg-gradient-to-b from-primary via-[#0a0a0a] to-primary overflow-hidden scroll-mt-[80px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#915EFF]/10 via-transparent to-transparent opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white relative"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#6366f1] animate-gradient-x">Work</span>
          <motion.div 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#6366f1]"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group bg-tertiary/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[#915EFF]/20 transition-all duration-500 transform hover:-translate-y-2 border border-[#915EFF]/10 hover:border-[#915EFF]/30"
            >
              <div className="relative h-[200px] bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]">
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#915EFF] text-white px-6 py-2 rounded-lg font-semibold"
                  >
                    View Project
                  </motion.div>
                </div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white group-hover:text-[#915EFF] transition-colors">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-black-200 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-block px-6 py-2 bg-[#915EFF] text-white rounded-lg hover:bg-opacity-80 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;