import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout } from 'lucide-react';

const SkillItem = ({ name, level }) => (
  <div className="flex items-center justify-between p-4 mb-3 glass bg-slate-50/50 dark:bg-slate-800/50 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all group">
    <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{name}</span>
    {level && (
      <span className="text-xs font-bold px-3 py-1 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full">
        {level}
      </span>
    )}
  </div>
);

const SkillCategory = ({ title, icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 glass rounded-3xl hover:border-indigo-500 transition-all group shadow-sm hover:shadow-xl hover:shadow-indigo-500/10"
  >
    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-6">{title}</h3>
    <div className="space-y-1">
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: <Layout size={28} />,
      skills: [
        { name: 'React', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'HTML/CSS', level: 'Advanced' }
      ],
    },
    {
      title: 'Backend',
      icon: <Server size={28} />,
      skills: [
        { name: 'Node.js', level: 'Beginner' },
        { name: 'Express.js', level: 'Beginner' }
      ],
    },
    {
      title: 'Database',
      icon: <Database size={28} />,
      skills: [
        { name: 'MongoDB', level: 'Beginner' }
      ],
    },
    {
      title: 'Tools',
      icon: <Code size={28} />,
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' }
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical <span className="gradient-text">Excellence</span></h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Categorized skills and proficiency levels across the modern development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.title} {...cat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
