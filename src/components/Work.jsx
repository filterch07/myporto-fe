import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

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
    <section id="work" className="min-h-screen py-20 bg-primary">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My <span className="text-[#915EFF]">Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-tertiary rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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