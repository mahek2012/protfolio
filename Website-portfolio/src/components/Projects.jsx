import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, X } from 'lucide-react';
import { GithubIcon } from './Icons';

// Removed CaseStudyModal to display Case Study directly on the card as requested.

const ProjectCard = ({ project, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass rounded-[2rem] overflow-hidden group hover:border-indigo-500 transition-all flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20"
    >
      <div className="w-full h-56 overflow-hidden relative border-b border-slate-200 dark:border-slate-800 shadow-inner">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-6 group-hover:text-indigo-500 transition-colors">{project.title}</h3>

        <div className="space-y-5 mb-8 flex-grow">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-500">Problem:</span>
            <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-purple-500">Solution:</span>
            <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-500">Tech Stack:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-bold px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-purple-500">Case Study:</span>
            <p className="text-slate-600 dark:text-slate-400 mt-1 italic leading-relaxed">{project.caseStudy}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
          {project.demoUrl === '#' ? (
            <button disabled className="flex-1 flex justify-center items-center gap-2 py-3 bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-500 font-bold rounded-xl transition-all shadow-sm cursor-not-allowed">
              Deploying Soon
            </button>
          ) : (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/30">
              Live Demo <ExternalLink size={18} />
            </a>
          )}
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold rounded-xl transition-all shadow-sm hover:shadow-md">
            GitHub <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'LuxeHaven E-Commerce',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
      problem: 'Luxury products needed a highly performant and elegant online storefront.',
      solution: 'Developed a fast, responsive e-commerce platform using modern Angular with a sleek product catalog and seamless checkout.',
      tech: ['Angular 18', 'TypeScript', 'HTML/CSS'],
      caseStudy: 'Leveraged the latest Angular CLI and component-based architecture to ensure high scalability and performance.',
      demoUrl: '#',
      repoUrl: 'https://github.com/mahek2012/systems/tree/main/LuxeHaven-ecommerce',
    },
    {
      title: 'Freelance Digital Hub',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      problem: 'Freelancers lacked a centralized, localized platform to connect with clients and display their digital portfolios.',
      solution: 'Created a dedicated digital hub for freelancers to showcase skills, manage projects, and communicate with clients effectively.',
      tech: ['React', 'JavaScript', 'CSS', 'Node.js'],
      caseStudy: 'Focused on creating an intuitive UI/UX to maximize user engagement and facilitate seamless client-freelancer connections.',
      demoUrl: '#',
      repoUrl: 'https://github.com/mahek2012/systems/tree/main/Freelance_digital_Hub',
    },
    {
      title: 'Airway Reservation System',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
      problem: 'Booking and managing flights was a tedious process, lacking a unified system for users and administrators.',
      solution: 'Built a full-stack airline reservation system with flight search, real-time seat booking, and an admin dashboard.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      caseStudy: 'Implemented JWT-based authentication for role-based access and managed complex states for live seat selection.',
      demoUrl: '#',
      repoUrl: 'https://github.com/mahek2012/systems/tree/main/NG_PROJ',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my best work, solving real-world problems with elegant code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/mahek2012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <GithubIcon size={24} />
            <span>View More on GitHub</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
