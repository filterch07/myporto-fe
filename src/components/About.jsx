import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-b from-[#0a0a0a] to-[#050816]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          About <span className="text-[#915EFF]">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-6 text-secondary"
          >
            <p className="text-lg">
              I am a web developer who enjoys creating responsive and dynamic web applications. 
              I have strong backend skills with C#, Java, PHP, Python, SQL, 
              as well as frontend expertise with React.js and Tailwind CSS.
            </p>
            <p className="text-lg">
              I always strive to write clean and efficient code, 
              and I enjoy learning new technologies and solving problems. 
              In my free time, I like exploring tech trends and sharing knowledge 
              with the community.
            </p>
            <p className="text-lg">
              I am also experienced with development tools such as Git, GitHub, 
              GitLab CI/CD, VS Code, and Visual Studio to support a structured 
              and collaborative workflow.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-6"
          >
            <div className="bg-tertiary/30 backdrop-blur-sm rounded-xl p-8 hover:shadow-2xl hover:shadow-[#915EFF]/20 transition-all duration-300 border border-[#915EFF]/20">
              <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#915EFF] to-[#6366f1] text-transparent bg-clip-text">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Backend */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group p-6 rounded-lg bg-gradient-to-b from-black/40 to-black/20 hover:from-[#915EFF]/10 hover:to-black/30 transition-all duration-300 border border-[#915EFF]/10 hover:border-[#915EFF]/30"
                >
                    <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#915EFF] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Backend
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      
                      <span>C# (.NET 8, ASP.NET Core)</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>Java (Spring Boot, JPA)</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>PHP (Laravel)</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>Python (Django / FastAPI)</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>SQL (SQL Server, PostgreSQL)</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>Microservices & APIs</span>
                    </motion.li>
                    </ul>
                </motion.div>

                {/* Frontend */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group p-6 rounded-lg bg-gradient-to-b from-black/40 to-black/20 hover:from-[#915EFF]/10 hover:to-black/30 transition-all duration-300 border border-[#915EFF]/10 hover:border-[#915EFF]/30"
                >
                    <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#915EFF] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Frontend
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>HTML5 / CSS3</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>JavaScript / TypeScript</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>React.js</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>Tailwind CSS</span>
                    </motion.li>
                    </ul>
                </motion.div>

                {/* Tools & Others */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group p-6 rounded-lg bg-gradient-to-b from-black/40 to-black/20 hover:from-[#915EFF]/10 hover:to-black/30 transition-all duration-300 border border-[#915EFF]/10 hover:border-[#915EFF]/30"
                >
                    <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#915EFF] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Tools
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>Git & GitHub</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>GitLab CI/CD</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>VS Code</span>
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3 hover:text-white transition-colors">
                      <span>Visual Studio</span>
                    </motion.li>
                    </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;