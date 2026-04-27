import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const BlogCard = ({ title, date, readTime, excerpt, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group h-full flex flex-col"
  >
    <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-video">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
      <div className="absolute top-4 left-4">
        <span className="px-4 py-1.5 glass text-xs font-bold rounded-full shadow-lg">Tech Insights</span>
      </div>
    </div>
    <div className="flex items-center gap-6 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
      <div className="flex items-center gap-2"><Calendar size={14} className="text-indigo-500" /> {date}</div>
      <div className="flex items-center gap-2"><Clock size={14} className="text-purple-500" /> {readTime}</div>
    </div>
    <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-500 transition-colors leading-tight">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">{excerpt}</p>
    <a href="#" className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-indigo-500 group-hover:gap-3 transition-all">
      Read Article <ChevronRight size={18} />
    </a>
  </motion.div>
);

const Blog = () => {
  const posts = [
    {
      title: 'Navigating the German Tech Market as a Junior',
      date: 'April 10, 2024',
      readTime: '6 min read',
      excerpt: 'Key strategies for landing your first developer role in Berlin or Munich, focusing on cultural fit and technical requirements.',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Why React is Still King in 2024',
      date: 'March 22, 2024',
      readTime: '8 min read',
      excerpt: 'Exploring Server Components, Actions, and why the ecosystem remains the strongest choice for modern web apps.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Clean Code: Beyond the Basics',
      date: 'March 05, 2024',
      readTime: '10 min read',
      excerpt: 'Moving from "it works" to "it is maintainable". Lessons learned from building scalable React architectures.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest <span className="gradient-text">Insights</span></h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sharing my journey, technical findings, and career advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <BlogCard key={post.title} {...post} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
