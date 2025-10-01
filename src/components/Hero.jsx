import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      <div className="max-w-7xl mx-auto flex flex-row items-start gap-5 px-4 pt-12 h-full">
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-5 h-5 rounded-full bg-gradient-to-r from-[#915EFF] to-[#6366f1]"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "200px" }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent"
          />
  </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#6366f1]">Jhony Samosir</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I develop user interfaces <br className="sm:block hidden" />
            and web applications
          </p>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;