import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout } from 'lucide-react';

const SkillItem = ({ name, level }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="font-semibold">{name}</span>
      <span className="text-sm opacity-60">{level}%</span>
    </div>
    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
      />
    </div>
  </div>
);

const SkillCategory = ({ title, icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 glass rounded-3xl hover:border-indigo-500 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-6">{title}</h3>
    <div className="space-y-2">
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
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 }
      ],
    },
    {
      title: 'Backend',
      icon: <Server size={28} />,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 75 }
      ],
    },
    {
      title: 'Database',
      icon: <Database size={28} />,
      skills: [
        { name: 'MongoDB', level: 65 }
      ],
    },
    {
      title: 'Tools',
      icon: <Code size={28} />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 }
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
