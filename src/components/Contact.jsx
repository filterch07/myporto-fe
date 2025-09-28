import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Add your email service logic here
    // Example: EmailJS, SendGrid, etc.

    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-primary">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto px-4 py-20 xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-gradient-to-b from-[#050816] to-[#0a0a0a]"
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex-[0.75] bg-tertiary p-8 rounded-2xl"
        >
          <p className="text-secondary font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            Get in touch
          </p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact.
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#915EFF] to-[#6366f1] py-3 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-[#915EFF]/20 rounded-xl hover:shadow-xl hover:shadow-[#915EFF]/40 transition-all"
            >
              {loading ? 'Sending...' : 'Send'}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <div className="h-full bg-tertiary rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-white text-2xl font-bold mb-4">
                Other Ways to Connect
              </h4>
              <div className="space-y-4 text-secondary">
                <p>Email: jhony.tegal26@gmail.com</p>
                <p>LinkedIn: www.linkedin.com/in/jhonysamosir/</p>
                <p>GitHub: github.com/jhony-samosir</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;