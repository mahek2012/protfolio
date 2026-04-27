import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <a href="#home" className="text-2xl font-bold gradient-text">Mahek.dev</a>
          <p className="text-sm text-slate-500 mt-3 font-medium tracking-wide">© 2024 Mahek. Built for Excellence.</p>
        </div>
        
        <div className="flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
          <a href="#blog" className="hover:text-indigo-500 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
        </div>

        <div className="text-sm font-semibold text-slate-500 px-6 py-3 glass rounded-full">
          Crafted with <span className="text-red-500 animate-pulse inline-block">♥</span> in React & Tailwind
        </div>
      </div>
    </footer>
  );
};

export default Footer;
