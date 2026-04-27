import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] my-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-800 p-3 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Mahek" 
                  className="w-full h-auto rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About <span className="gradient-text">Me</span></h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am a passionate aspiring Software Developer dedicated to building meaningful digital products. 
                My focus lies in creating efficient, scalable, and visually stunning web applications using 
                the latest technologies.
              </p>
              <p>
                My ultimate career goal is to work as a developer in **Germany**, where I can contribute to 
                world-class engineering teams and continue my growth in a high-tech environment. I am constantly 
                learning and adapting to new challenges in the software landscape.
              </p>
              <p>
                Outside of coding, I have a keen eye for design and enjoy exploring the intersection of 
                technology and creative arts. I believe in professional excellence combined with a human touch.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="p-6 glass rounded-2xl">
                <h3 className="text-3xl font-bold gradient-text mb-1">Aspiring</h3>
                <p className="text-sm font-semibold uppercase tracking-widest opacity-60">Professional</p>
              </div>
              <div className="p-6 glass rounded-2xl">
                <h3 className="text-3xl font-bold gradient-text mb-1">Germany</h3>
                <p className="text-sm font-semibold uppercase tracking-widest opacity-60">Career Goal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
