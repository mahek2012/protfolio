import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const ProfileModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative glass w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl"
        >
          <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white dark:bg-slate-800/50 dark:hover:bg-slate-800 rounded-full transition-all">
            <X size={20} />
          </button>
          
          <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
          
          <div className="px-8 pb-8">
            <div className="relative -mt-16 mb-4 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Mahek" 
                className="w-32 h-32 object-cover rounded-full border-4 border-white dark:border-slate-900 shadow-lg"
              />
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-1">Mahek Savaliya</h3>
              <p className="text-sm text-indigo-500 font-semibold uppercase tracking-wider">Aspiring Software Developer</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-500 rounded-xl"><Mail size={20} /></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email</p>
                  <p className="font-medium">hello@mahek.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                <div className="p-2 bg-purple-100 dark:bg-purple-500/20 text-purple-500 rounded-xl"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Goal</p>
                  <p className="font-medium">Working in Germany</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                <div className="p-2 bg-pink-100 dark:bg-pink-500/20 text-pink-500 rounded-xl"><Briefcase size={20} /></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Focus</p>
                  <p className="font-medium">React, Frontend, Web UI</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Hero = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
            >
              <span className="gradient-text">Mahek</span> Savaliya
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-4xl text-slate-800 dark:text-white font-semibold mb-6"
            >
              Aspiring Software Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl"
            >
              Building modern web experiences using React & JavaScript
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20">
                View Projects <ArrowRight size={20} />
              </a>
              <a href="#contact" className="glass hover:border-indigo-500 flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-sm">
                Contact Me
              </a>
              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:text-indigo-500 transition-all hover:scale-110">
                  <GithubIcon size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:text-indigo-500 transition-all hover:scale-110">
                  <LinkedinIcon size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div 
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] cursor-pointer group"
              onClick={() => setIsProfileOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Mahek Developer"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-10 right-10 z-20 bg-white dark:bg-slate-800 p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">View Profile</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </section>
  );
};

export default Hero;
